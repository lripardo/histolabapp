<template>
  <tissue-list title="Tecido Epitelial" :tissues="tissues">
    <p>O Tecido Epitelial é formado por células que revestem superfícies e que secretam moléculas, tendo pouca matriz
      extracelular (MEC).</p>
    <p>O tecido epitelial desenvolve variadas funções, tais como proteção, absorção de íons e moléculas, secreção e
      excreção.</p>
    <p>Sua origem pode ser ectodérmica, mesodérmica e endodérmica.</p>
    <p>Ele pode ser classificado em:</p>
  </tissue-list>
</template>

<script>
import TissueList from '@/components/TissueList';

export default {
  name: 'EpithelialTissue',
  components: {TissueList},
  data: () => ({
    tissues: [
      {
        to: 'epithelial-tissue-simple',
        txt: 'Simples'
      },
      {
        to: '',
        txt: 'Estratificado'
      },
      {
        to: '',
        txt: 'Pseudo estratificado'
      }
    ]
  })
}
</script>
