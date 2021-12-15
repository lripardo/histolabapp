<template>
  <v-card class="fill-height" flat color="color1">
    <v-card-title>Tecido Epitelial Simples</v-card-title>
    <v-card-text>
      <p>O Tecido Epitelial simples também conhecido como uniestratificado, são aqueles os quais apresentam apenas uma
        camada de células.</p>
      <p>Ele pode ser subdividido em:</p>

      <v-container>
        <v-row class="text-center" align="center">
          <v-col cols="12">
            <custom-btn to="epithelial-tissue-simple-cubic" color="white">Cúbico</custom-btn>
          </v-col>
          <v-col cols="12">
            <custom-btn to="epithelial-tissue-simple-pavement" color="white">Pavimentoso</custom-btn>
          </v-col>
          <v-col cols="12">
            <custom-btn to="home" color="white">Prismático</custom-btn>
          </v-col>
          <v-col cols="12">
            <custom-btn to="home" color="white">Pseudoestratificado</custom-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import CustomBtn from '@/components/CustomBtn';

export default {
  name: 'EpithelialTissueSimple',
  components: {CustomBtn}
}
</script>
