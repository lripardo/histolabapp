<template>
  <v-btn class="black--text font-weight-bold" elevation="0" :color="color" tile block>
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  props: {
    color: String
  },
  name: 'CustomBtn'
}
</script>
