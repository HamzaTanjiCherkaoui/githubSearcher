<template>
	<div class="repository">
	<h3 class=" big-text roboto"><i class="fa fa-github secondary-color big-text" aria-hidden="true"></i> {{repository.full_name}}</h3>
	<div class="details ubuntu text-center">
		<div><i class="fa fa-code-fork"></i>({{repository.forks}} forks)</div>
		<div><i class="fa fa-eye"></i>({{repository.watchers}} watchers)</div>
		<div><i class="fa fa-user"></i>{{repository.owner.login}}</div>
		<div></div>
	</div>
	
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
.repository {
	border-bottom: 1px solid #eee;
	display: grid;
	grid-template-rows: 1fr 1fr ;
}
.repository .details{ 
	color: #ccc;
	font-size: 14px;
	display: grid;
	grid-template-columns: repeat(6,1fr);
}
.repository .details i {
	margin-right:10px;
}
.big-text {
	font-size: 20px;
}
</style>
