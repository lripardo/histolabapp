<template>
  <v-card class="fill-height" flat color="color1">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <slot></slot>

      <v-container>
        <v-row class="text-center" align="center">
          <v-col :key="i" v-for="(t, i) in tissues" cols="12">
            <custom-btn :to="t.to" color="white">{{ t.txt }}</custom-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import CustomBtn from '@/components/CustomBtn';

export default {
  props: {
    title: String,
    tissues: Array
  },
  name: 'TissueList',
  components: {CustomBtn}
}
</script>
