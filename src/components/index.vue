<template>
  <div>
    当前为index页<br>
    <button @click="load">跳转到home页</button>
  </div>
</template>

<script>
export default {
  methods: {
    load () {
      this.$router.push('/home')
    }
  }
}
</script>

<style>

</style>
