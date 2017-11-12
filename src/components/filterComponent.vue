<template>
	<div class="filter-section">
		<div class="controls">
			<button class="box primary-bg icon-btn"><i class="fa fa-star"></i></button>
			<button class="box primary-bg icon-btn"><i class="fa fa-code-fork"></i></button>
			<button class="box primary-bg icon-btn" alt="activity"><i class="fa fa-bolt" ></i></button>
		</div>
	</div>

</template>

<script>
export default {
	name: 'filter-component',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.filter-section {
	padding: 10px;
	display: grid;
	grid-template-columns: 1fr 130px;
}

.filter-section .controls{
	grid-column-start: 2;
}

</style>
