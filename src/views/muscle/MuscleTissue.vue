<template>
  <tissue-list title="Tecido Muscular" :tissues="tissues">
    <p>O tecido muscular apresenta células com capacidade de contração, sendo chamadas de fibras musculares.</p>
    <p>Estas são alongadas e apresentam grande quantidade de filamentos de proteínas contráteis, como actina e
      miosina.</p>
    <p>Devido a sua capacidade de contração, extensibilidade, elasticidade e excitabilidade, o tecido muscular
      desempenha um papel importante no nosso corpo e pode ser classificado como:</p>
  </tissue-list>
</template>

<script>
import TissueList from '@/components/TissueList';

export default {
  name: 'MuscleTissue',
  components: {TissueList},
  data: () => ({
    tissues: [
      {
        to: 'muscle-tissue-skeletal-striated',
        txt: 'Estriado esquelético'
      },
      {
        to: 'muscle-tissue-cardiac-striated',
        txt: 'Estriado cardíaco'
      },
      {
        to: 'muscle-tissue-smooth',
        txt: 'Liso'
      }
    ]
  })
}
</script>
