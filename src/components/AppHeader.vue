<template>
  <header class="primary-gradient-bg">
    <h1 class="text-center roboto">Github Searcher</h1>
    <search-component></search-component>
  </header>
</div>
</template>

<script>
import SearchComponent from './SearchComponent'

export default {
  name: 'app-header',
  components : {
    SearchComponent
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-empty-icon {
  background-color: rgba(241, 244, 245, 0.4);

}
header {
  padding: 50px;
}

</style>
