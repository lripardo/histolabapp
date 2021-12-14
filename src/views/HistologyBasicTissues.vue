<template>
  <v-card flat>
    <v-card-title>Tecidos Básicos de Histologia</v-card-title>
    <v-card-text>
      <p>Histologia é o estudo das células e dos tecidos do corpo e de como essas estruturas se organizam para
        constituir os órgãos.</p>
      <p>É fundamental para que se compreenda o funcionamento dos grupos de células presentes nos mais diversos seres
        vivos.</p>
      <p>Os tecidos básicos do estudo da Histologia são:</p>

      <v-container>
        <v-row class="text-center" align="center">
          <v-col cols="6">
            <custom-btn color="accent">
              <multiline-btn>
                <div>TECIDO</div>
                <div>EPITELIAL</div>
              </multiline-btn>
            </custom-btn>
          </v-col>
          <v-col cols="6">
            <custom-btn color="accent">
              <multiline-btn>
                <div>TECIDO</div>
                <div>CONJUNTIVO</div>
              </multiline-btn>
            </custom-btn>
          </v-col>
          <v-col cols="6">
            <custom-btn color="accent">
              <multiline-btn>
                <div>TECIDO</div>
                <div>MUSCULAR</div>
              </multiline-btn>
            </custom-btn>
          </v-col>
          <v-col cols="6">
            <custom-btn color="accent">
              <multiline-btn>
                <div>TECIDO</div>
                <div>NERVOSO</div>
              </multiline-btn>
            </custom-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import CustomBtn from '@/components/CustomBtn';
import MultilineBtn from "@/components/MultilineBtn";

export default {
  name: 'HistologyBasicTissues',
  components: {MultilineBtn, CustomBtn}
}
</script>
