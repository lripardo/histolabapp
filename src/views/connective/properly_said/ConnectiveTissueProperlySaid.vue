<template>
  <tissue-list title="Tecido Conjuntivo Propriamente Dito" :tissues="tissues">
    <p>O Tecido Conjuntivo propriamente dito apresenta diferentes composições de suas células e matriz extracelular e
      pode ser subdividido em:</p>
  </tissue-list>
</template>

<script>
import TissueList from '@/components/TissueList';

export default {
  name: 'ConnectiveTissueProperlySaid',
  components: {TissueList},
  data: () => ({
    tissues: [
      {
        to: 'connective-tissue-properly-said-loose',
        txt: 'Frouxo'
      },
      {
        to: 'connective-tissue-properly-said-dense-patterned',
        txt: 'Denso Modelado'
      },
      {
        to: 'connective-tissue-properly-said-dense-unpatterned',
        txt: 'Denso não modelado'
      },
      {
        to: 'connective-tissue-properly-said-elastic',
        txt: 'Elástico'
      },
      {
        to: 'connective-tissue-properly-said-mucous',
        txt: 'Mucoso'
      }
    ]
  })
}
</script>
