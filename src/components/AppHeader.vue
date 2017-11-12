<template>
  <header class="primary-gradient-bg">
    <h1 class="text-center roboto">Github Searcher</h1>
    <div class="input-group">
      <div class="input-empty-icon"><i class="fa fa-search"></i></div>
      <input type="text" placeholder="What are you looking for ? " class="form-input ubuntu">
    </div>
  </header>
</div>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.input-empty-icon {
  background-color: rgba(241, 244, 245, 0.4);

}
header {
  padding: 50px;
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
