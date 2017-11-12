<template>
	<div class="filter-section">
		<div class="controls">
			<button :class="{ 'secondary-bg': isActive=='stars'  }" class="box primary-bg  icon-btn" @click="filterBy('stars')" title="stars"><i class="fa fa-star"></i></button>
			<button :class="{ 'secondary-bg': isActive=='forks' }" class="box primary-bg  icon-btn" @click="filterBy('forks')" title="forks"><i class="fa fa-code-fork"></i></button>
			<button :class="{ 'secondary-bg': isActive=='updated' }" class="box primary-bg  icon-btn" @click="filterBy('updated')" title="activity"><i class="fa fa-bolt" ></i></button>
		</div>
	</div>

</template>

<script>
export default {
	name: 'filter-component',
	data() {
		return { isActive : 'stars'}
	},
	methods : {
		filterBy(criteria) {
			this.isActive = criteria
			this.$emit('criteriaChanged' , criteria);
		}
	}
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
