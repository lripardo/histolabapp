<template>
  <v-container class="pa-0 fill-height ">
    <v-row class="text-center" no-gutters align="center" justify="center">
      <v-col cols="12">
        <v-avatar size="300">
          <v-img src="@/assets/logo.png" alt="logo"></v-img>
        </v-avatar>
      </v-col>
      <v-col class="pa-2" cols="12">
        <router-link to="/presentation">
          <v-btn class="black--text font-weight-bold" elevation="0" color="primary" tile block x-large>APRESENTAÇÃO
          </v-btn>
        </router-link>
      </v-col>
      <v-col class="pa-2" cols="12">
        <v-btn class="black--text font-weight-bold" elevation="0" color="primary" tile block x-large>TECIDOS BÁSICOS
          DE
          HISTOLOGIA
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home'
}
</script>
