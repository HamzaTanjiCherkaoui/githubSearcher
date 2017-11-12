<template>
	<div>
	<p >{{repository.name}}</p>
	<p >owner : {{repository.owner.login}}</p>
	</div>
</template>

<script>
export default {
  name: 'repository-component',
  props : ['repository']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
