<template>
	<div class="pagination">
		<div class="controls">
			<button v-if="pageCount!=0" class="box primary-bg icon-btn" @click="step(-1)"><i class="fa fa-arrow-left"></i></button>
			<button class="box primary-bg icon-btn" @click="step(1)" alt="activity"><i class="fa fa-arrow-right" ></i></button>
		</div>
	</div>

</template>

<script>
export default {
	name: 'pagination-component',
	data() {
		return {pageCounts : this.pageCount }
	},
	props : ['pageCount'],
	methods : {
		step(stepOffset) {
			this.pageCounts = this.pageCounts +stepOffset;
			console.log(this.pageCounts);
			this.$emit('pageChanged' ,this.pageCounts);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pagination {
	padding: 10px;
	display: grid;
	grid-template-columns: 1fr 2fr 1fr ;
}

.pagination .controls{
	grid-column-start: 2;
	justify-self: center;
}

</style>
