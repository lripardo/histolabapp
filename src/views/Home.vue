<template>
  <v-container class="fill-height ">
    <v-row class="text-center" no-gutters align="center" justify="center">
      <v-col cols="12">
        <v-avatar size="300">
          <v-img src="@/assets/logo.png" alt="logo"></v-img>
        </v-avatar>
      </v-col>
      <v-col class="py-2" cols="12">
        <custom-btn to="presentation" color="primary">
          APRESENTAÇÃO
        </custom-btn>
      </v-col>
      <v-col class="py-2" cols="12">
        <custom-btn to="histology-basic-tissues" color="primary">
          TECIDOS BÁSICOS DE HISTOLOGIA
        </custom-btn>
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
