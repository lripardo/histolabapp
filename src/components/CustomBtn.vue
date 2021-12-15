<template>
  <v-btn class="black--text font-weight-bold" :color="color" tile block @click="goToRoute">
    <slot></slot>
  </v-btn>
</template>

<script>
import {goTo} from '@/router/util';

export default {
  props: {
    to: {
      type: String,
      required: false,
      default: ''
    },
    color: String
  },
  name: 'CustomBtn',
  methods: {
    goToRoute() {
      !this.to || goTo(this.to);
    }
  }
}
</script>
