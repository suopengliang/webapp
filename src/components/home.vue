<template>
  <div>
    当前为home页<br>
    <button @click="load">跳转到helloworld页</button>
  </div>
</template>

<script>
export default {
  methods: {
    load () {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
