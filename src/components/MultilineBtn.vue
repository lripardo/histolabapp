<template>
  <span class="multiline-btn">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'MultilineBtn'
}
</script>

<style scoped>
.multiline-btn {
  display: block;
}
</style>
