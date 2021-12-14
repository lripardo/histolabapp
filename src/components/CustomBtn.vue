<template>
  <router-link tag="span" :to="to">
    <v-btn class="black--text font-weight-bold" :color="color" tile block>
      <slot></slot>
    </v-btn>
  </router-link>
</template>

<script>
export default {
  props: {
    to: String,
    color: String
  },
  name: 'CustomBtn'
}
</script>
