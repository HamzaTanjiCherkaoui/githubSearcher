<template>
  <div id="app">
    <app-header/>
    <filter-component></filter-component>
    <repositories-component class="container"></repositories-component>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import filterComponent from './components/filterComponent'
import RepositoriesComponent from './components/RepositoriesComponent'

export default {
  name: 'app',
  components: {
    AppHeader,
    RepositoriesComponent,
    filterComponent,
    AppFooter
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
