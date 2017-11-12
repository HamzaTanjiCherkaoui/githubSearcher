<template>

	<div>
		<h2>Results : </h2>
	<repository-component  v-for="repository in repositories" :repository="repository"></repository-component>	
	</div>
</template>

<script>
import RepositoryComponent from './RepositoryComponent'

export default {
  name: 'repositories-component',
  components : {
  	RepositoryComponent
  },
  props:['repositories']
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
