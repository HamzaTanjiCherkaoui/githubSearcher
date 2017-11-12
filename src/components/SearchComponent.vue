<template>
	<div class="input-group">
      <div class="input-empty-icon"><i class="fa fa-search"></i></div>
      <input type="text" placeholder="What are you looking for ? (press enter to submit your query)" v-model="query" v-on:keyup.enter="emitQuery(query)" class="form-input ubuntu">
    </div>

</template>

<script>
export default {
  name: 'search-component',
  data() {
    return { query : '' }
  },
  methods : {
    emitQuery(query) {
      this.$emit('queryEmited',query);
      this.query =''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.input-empty-icon {
  background-color: rgba(241, 244, 245, 0.4);

}


.input-empty-icon i {
  color: #fff;  
}
.input-group input{
  grid-column-start: 2;
  height: 37px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: rgba(241, 244, 245, 0.4);
  color: #fff;
  margin: 0;
}
.input-group {
  width: 40%;  
  margin : 0 auto;

}
.input-group input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color:rgba(241, 244, 245, 0.7);
}
.input-group input::-moz-placeholder { /* Firefox 19+ */
  color: rgba(241, 244, 245, 0.7);
}
.input-group input:-ms-input-placeholder { /* IE 10+ */
  color: rgba(241, 244, 245, 0.7);
}
.input-group input:-moz-placeholder { /* Firefox 18- */
  color: rgba(241, 244, 245, 0.7);
}
</style>
