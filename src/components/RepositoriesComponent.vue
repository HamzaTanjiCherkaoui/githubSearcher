<template>
	<div>
		<h1 class="roboto underline secondary-color">Repositories : </h1>	
		<hr>
		<repository-component  v-for="repository in repositories" :repository="repository" v-bind:key="repository.id"></repository-component>	
	</div>
</template>

<script>
import RepositoryComponent from './RepositoryComponent'

export default {
	name: 'repositories-component',
	components : {
		RepositoryComponent
	},
	props:['repositories'],
	watch:{
		repositories(newVal){
			this.repositories = newVal
		}
	}
} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
