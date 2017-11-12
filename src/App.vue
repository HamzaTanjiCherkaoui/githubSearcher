<template>
  <div id="app">
    <app-header @queryEmited="submitQuery"/>
    <filter-component @criteriaChanged="filterRepositorie" @orderChanged="sortRepositories"></filter-component>
    <div class="container rounde-bordred">
      <div class="loading text-center" v-if="loading"> 
        <h5>loading ...</h5>
      </div>
      <div v-if="repositories.length==0 && !loading">
        <h4 class="text-center"> No Data found, submit a new Query please</h4>
      </div>
      <div v-if="repositories && repositories.length && !loading">
        <repositories-component  :repositories="repositories"></repositories-component>  
      <pagination-component :pageCount="pageCount"  @pageChanged="changePage"></pagination-component>
      </div>
    </div>
    
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import filterComponent from './components/filterComponent'
import RepositoriesComponent from './components/RepositoriesComponent'
import githubService from './services/github.service'
import paginationComponent from './components/paginationComponent'

export default {
  name: 'app',
  data()  {
    return {
      repositories : [],
      currentQuery : '',
      currentCriteria : 'stars',
      currentOrder : 'desc',
      pageCount : 0,
      loading : false
    }
  },
  components: {
    AppHeader,
    RepositoriesComponent,
    filterComponent,
    paginationComponent,
    AppFooter
  },
  methods : {
    filterRepositorie(criteria) {
      this.currentCriteria = criteria
      
      if(this.currentQuery != '') {
          this.loading = true
          githubService.search(this.currentQuery,this.currentCriteria, this.currentOrder)
                       .then(data => {
                          this.repositories  = data.items 
                          this.loading = false
                    })
        }
    },
    sortRepositories(order) {
      this.currentOrder = order
      if(this.currentQuery != '') {
      this.loading = true
      githubService.search(this.currentQuery,this.currentCriteria, this.currentOrder)
                   .then(data => {
                          this.repositories  = data.items 
                          this.loading = false
                    })
                 }

    },
    changePage(page) {
      console.log(page)
      this.pageCount = page
      this.loading = true
      githubService.search(this.currentQuery,this.currentCriteria, this.currentOrder,page )
                   .then(data => {
                          this.repositories  = data.items 
                          this.loading = false
                    })
    },
    submitQuery(query) {
      this.loading = true
      this.currentQuery = query
      githubService.search(query).then(data => {
        this.loading = false
        this.repositories  = data.items 
        this.resetPageCount()
      })
    },
    resetPageCount(){
      this.pageCount = 0
    }
  }
}

</script>

<style>

  </style>

  <style type="text/css" src="./assets/css/main.css"></style>
