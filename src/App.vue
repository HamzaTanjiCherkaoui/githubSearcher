<template>
  <div id="app">
    <app-header @queryEmited="submitQuery"/>
    <filter-component @criteriaChanged="filterRepositorie"></filter-component>
    <div class="container">
      <div v-if="repositories && repositories.length">
        <repositories-component  :repositories="repositories"></repositories-component>  
      </div>
      <pagination-component @pageChanged="changePage"></pagination-component>
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
      currentOrder : 'desc'
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
      this.currentCriteria = criteria;
    },
    changePage(page) {
      githubService.search(this.currentQuery,this.currentCriteria, this.currentOrder,page )
                   .then(data => {
                          this.repositories  = data.items 
                    })
    },
    submitQuery(query) {
      this.currentQuery = query;
      githubService.search(query).then(data => {
        console.log(data);
        this.repositories  = data.items ;
        console.log(this.repositories);
      })
    }
  }
}

</script>

<style>

/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  }*/
  </style>

  <style type="text/css" src="./assets/css/main.css"></style>
