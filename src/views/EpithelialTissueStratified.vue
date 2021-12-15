<template>
  <tissue-list title="Tecido Epitelial Estratificado" :tissues="tissues">
    <p>O Tecido Epitelial estratificado possui duas ou mais camadas de células e pode ser subdividido em:</p>
  </tissue-list>
</template>

<script>
import TissueList from '@/components/TissueList';

export default {
  name: 'EpithelialTissueStratified',
  components: {TissueList},
  data: () => ({
    tissues: [
      {
        to: 'epithelial-tissue-stratified-cubic',
        txt: 'Cúbico'
      },
      {
        to: 'epithelial-tissue-stratified-non-keratinized',
        txt: 'Pavimentoso não queratinizado '
      },
      {
        to: '',
        txt: 'Pavimentoso queratinizado'
      },
      {
        to: '',
        txt: 'Transição'
      }
    ]
  })
}
</script>
