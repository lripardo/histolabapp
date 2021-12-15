<template>
  <tissue-list title="Tecido Conjuntivo Adiposo" :tissues="tissues">
    <p>O Tecido Conjuntivo Adiposo armazena gordura em suas células adiposas (ou adipócitos).</p>
    <p>Esse tecido é a maior reserva de energia do organismo na forma de triglicerídeos.</p>
    <p>O tecido adiposo é constituído predominantemente por adipócitos envoltos por uma lâmina basal e fibras
      reticulares.</p>
    <p>Devido à distribuição e tamanho dos adipócitos, ele pode ser subdividido em:</p>
  </tissue-list>
</template>

<script>
import TissueList from '@/components/TissueList';

export default {
  name: 'ConnectiveTissueAdipose',
  components: {TissueList},
  data: () => ({
    tissues: [
      {
        to: '',
        txt: 'Unilocular'
      },
      {
        to: '',
        txt: 'Multilocular'
      }
    ]
  })
}
</script>
