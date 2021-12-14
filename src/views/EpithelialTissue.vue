<template>
  <v-card class="fill-height" flat color="color1">
    <v-card-title>Tecido Epitelial</v-card-title>
    <v-card-text>
      <p>O Tecido Epitelial é formado por células que revestem superfícies e que secretam moléculas, tendo pouca matriz
        extracelular (MEC).</p>
      <p>O tecido epitelial desenvolve variadas funções, tais como proteção, absorção de íons e moléculas, secreção e
        excreção.</p>
      <p>Sua origem pode ser ectodérmica, mesodérmica e endodérmica.</p>
      <p>Ele pode ser classificado em:</p>

      <v-container>
        <v-row class="text-center" align="center">
          <v-col cols="12">
            <custom-btn to="epithelial-tissue-simple" color="white">Simples</custom-btn>
          </v-col>
          <v-col cols="12">
            <custom-btn to="home" color="white">Estratificado</custom-btn>
          </v-col>
          <v-col cols="12">
            <custom-btn to="home" color="white">Pseudo estratificado</custom-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import CustomBtn from '@/components/CustomBtn';

export default {
  name: 'EpithelialTissue',
  components: {CustomBtn}
}
</script>
