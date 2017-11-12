<template>
	<div class="repository">
	<div class=" heading">
		<img :src="repository.owner.avatar_url" height="20" width="20" />
		<h3 class="big-text roboto">{{repository.full_name}}</h3>
	</div>
	<div class="details ubuntu text-center">
		<div class="forks"><i class="fa fa-code-fork"></i>({{repository.forks}} forks)</div>
		<div class="watchers"><i class="fa fa-eye"></i>({{repository.watchers}} watchers)</div>
		<div class="user">
			<i class="fa fa-user"></i>{{repository.owner.login}}</div>
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
.heading {
	margin-top: 10px;
	margin-bottom: 10px;
	display: grid ;
	grid-template-columns: 30px 1fr;
	align-items: center;
}
.heading h3 {
	margin: 0;
}
.repository .details{ 
	color: #ccc;
	font-size: 14px;
	display: grid;
	grid-template-columns: repeat(20,1fr);
}
.repository .details i {
	margin-right:10px;
}
.big-text {
	font-size: 20px;
}
.forks {
	grid-column-start: 1;
	grid-column-end: 4;
	text-align: left;
}

.watchers {
	grid-column-start: 4;
	grid-column-end: 8;
	text-align: left;

}
.user {
	grid-column-start: 8;
	grid-column-end: 20;
	text-align: left;
}
.repository img {
	border-radius: 50px;
}
</style>
