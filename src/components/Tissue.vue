<template>
  <v-card class="fill-height" flat>
    <h2 class="text-center mx-2">{{ title }}</h2>
    <v-card-text>
      <v-card color="color2">
        <v-card-text>
          <slot></slot>
        </v-card-text>
      </v-card>

      <v-container class="pa-0">
        <v-row class="text-center" align="center">
          <v-col cols="12">
            <img alt="subtitle" class="contain" :src="require(`@/assets/tissues/${subtitle}`)"/>
          </v-col>
          <v-col cols="12">
            <viewer>
              <img alt="img" class="contain" :src="require(`@/assets/tissues/${img}`)"/>
            </viewer>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import 'viewerjs/dist/viewer.css';
import {component as Viewer} from 'v-viewer';

export default {
  props: {
    title: String,
    subtitle: String,
    img: String
  },
  name: 'Tissue',
  components: {
    Viewer
  }
}
</script>
