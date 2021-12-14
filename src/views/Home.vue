<template>
  <v-container class="fill-height ">
    <v-row class="text-center" no-gutters align="center" justify="center">
      <v-col cols="12">
        <v-avatar size="300">
          <v-img src="@/assets/logo.png" alt="logo"></v-img>
        </v-avatar>
      </v-col>
      <v-col class="py-2" cols="12">
        <router-link to="presentation">
          <custom-btn color="primary">APRESENTAÇÃO</custom-btn>
        </router-link>
      </v-col>
      <v-col class="py-2" cols="12">
        <router-link to="histology-basic-tissues">
          <custom-btn color="primary">
            TECIDOS BÁSICOS DE HISTOLOGIA
          </custom-btn>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CustomBtn from '@/components/CustomBtn';

export default {
  name: 'Home',
  components: {CustomBtn}

}
</script>
