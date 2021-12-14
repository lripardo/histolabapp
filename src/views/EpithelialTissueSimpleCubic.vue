<template>
  <v-card class="fill-height" flat>
    <v-card-title>Tecido Epitelial Simples Cúbico</v-card-title>
    <v-card-text>
      <v-card color="color2">
        <v-card-text>
          <p><strong>Epitelial simples cúbico:</strong> suas células caracterizam-se pelo formato de cubo.</p>
          <p>Esse epitélio é encontrado nos ductos e ácinos das glândulas, túbulos renais, epitélio germinativo do ovário e
            na retina.</p>
        </v-card-text>
      </v-card>

      <v-container class="pa-0">
        <v-row class="text-center" align="center">
          <v-col cols="12">
            <v-img src="@/assets/tissues/epithelial_tissue_simple_cubic_subtitle.png"/>
          </v-col>
          <v-col cols="12">
            <v-img src="@/assets/tissues/epithelial_tissue_simple_cubic.jpg"/>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'EpithelialTissueSimpleCubic'
}
</script>
