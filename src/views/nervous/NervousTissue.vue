<template>
  <tissue-list title="Tecido Nervoso" :tissues="tissues">
    <p>Possui células com longos prolongamentos emitidos pelo corpo celular que têm as funções especializadas de
      receber, gerar e transmitir impulsos nervosos.</p>
    <p>O tecido nervoso possui pouca substância intercelular e é composto principalmente por dois tipos celulares: os
      neurônios e as células da glia, também chamadas de gliócitos.</p>
    <p>O tecido nervoso pode ser observado nos órgãos do sistema nervoso central e periférico, como:</p>
  </tissue-list>
</template>

<script>
import TissueList from '@/components/TissueList';

export default {
  name: 'NervousTissue',
  components: {TissueList},
  data: () => ({
    tissues: [
      {
        to: 'nervous-tissue-medulla',
        txt: 'Medula'
      },
      {
        to: 'nervous-tissue-cerebellar',
        txt: 'Cerebelo'
      },
      {
        to: 'nervous-tissue-brain',
        txt: 'Cérebro'
      },
      {
        to: 'nervous-tissue-nerve-fibers',
        txt: 'Fibras nervosas'
      }
    ]
  })
}
</script>
