<template>
	<div class="filter-section">
		<select vi-model="order" v-on:change="changeOrder( $event)" class="ubuntu secondary-color">
			<option>desc</option>
			<option>asc</option>
		</select>
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
		return { isActive : 'stars' , order : 'asc'}
	},
	methods : {
		filterBy(criteria) {
			this.isActive = criteria
			this.$emit('criteriaChanged' , criteria)
		},
		changeOrder($event){
			
			this.order =event.target.value
			this.$emit('orderChanged',this.order)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.filter-section {
	padding: 10px;
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	grid-gap: 1em;
}

.filter-section select{
	grid-column-start: 8;
	grid-column-end: 9;
	background-color: #fff;
	border-radius: 5px;
	height: 37px;

}
.filter-section .controls{
	grid-column-start: 9;
	grid-column-end: 10;
	align-self: center;	
}

</style>
