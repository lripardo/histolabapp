<template>
  <tissue-list title="Tecido Conjuntivo Ósseo" :tissues="tissues">
    <p>O Tecido Conjuntivo ósseo possui uma característica marcante, que é a presença de material extracelular
      calcificado (matriz óssea), sendo encontrado nos ossos.</p>
    <p>Essa matriz é rígida devido à calcificação mas também é elástica devido à presença de fibras colágenas.</p>
    <p>Além da matriz ela apresenta células especializadas, os osteócitos, os osteoblastos e o osteoclastos.</p>
    <p>O Tecido conjuntivo ósseo pode ser subdividido em:</p>
  </tissue-list>
</template>

<script>
import TissueList from '@/components/TissueList';

export default {
  name: 'ConnectiveTissueOsseous',
  components: {TissueList},
  data: () => ({
    tissues: [
      {
        to: 'connective-tissue-osseous-compact-bone',
        txt: 'Osso compacto'
      },
      {
        to: '',
        txt: 'Osso esponjoso'
      }
    ]
  })
}
</script>
