<template>
  <div id="app">
    <app-header @queryEmited="submitQuery"/>
    <filter-component @criteriaChanged="filterRepositorie"></filter-component>
    <div class="container">
      <div v-if="repositories && repositories.length">
      <repositories-component  :repositories="repositories"></repositories-component>  
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

export default {
  name: 'app',
  data()  {
    return {
      repositories : []
    }
  },
  components: {
    AppHeader,
    RepositoriesComponent,
    filterComponent,
    AppFooter
  },
  methods : {
    filterRepositorie(criteria) {
      console.log(criteria)
    },
    submitQuery(query) {
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
