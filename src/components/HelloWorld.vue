<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="load">跳转到</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '当前为helloworld页'
    }
  },
  methods: {
    load () {
      this.$router.push('/index')
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
</style>
