<template>
  <tissue-list title="Tecido Conjuntivo" :tissues="tissues">
    <p>O Tecido Conjuntivo é caracterizado por uma grande quantidade de matriz extracelular que é produzida por suas
      próprias células.</p>
    <p>É responsável por desempenhar as funções de preenchimento, sustentação, nutrição, defesa e armazenamento.</p>
    <p>O Tecido Conjuntivo tem origem mesodérmica e pode ser classificado em:</p>
  </tissue-list>
</template>

<script>
import TissueList from '@/components/TissueList';

export default {
  name: 'ConnectiveTissue',
  components: {TissueList},
  data: () => ({
    tissues: [
      {
        to: 'connective-tissue-properly-said',
        txt: 'Propriamente dito'
      },
      {
        to: 'connective-tissue-adipose',
        txt: 'Adiposo'
      },
      {
        to: 'connective-tissue-cartilaginous',
        txt: 'Cartilaginoso'
      },
      {
        to: '',
        txt: 'Ósseo'
      },
      {
        to: '',
        txt: 'Muscular'
      }
    ]
  })
}
</script>
