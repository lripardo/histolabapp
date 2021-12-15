<template>
  <tissue-list title="Tecido Epitelial Simples" :tissues="tissues">
    <p>O Tecido Epitelial simples também conhecido como uniestratificado, são aqueles os quais apresentam apenas uma
      camada de células.</p>
    <p>Ele pode ser subdividido em:</p>
  </tissue-list>
</template>

<script>
import TissueList from '@/components/TissueList';

export default {
  name: 'EpithelialTissueSimple',
  components: {TissueList},
  data: () => ({
    tissues: [
      {
        to: 'epithelial-tissue-simple-cubic',
        txt: 'Cúbico'
      },
      {
        to: 'epithelial-tissue-simple-pavement',
        txt: 'Pavimentoso'
      },
      {
        to: 'epithelial-tissue-simple-prismatic',
        txt: 'Prismático'
      },
      {
        to: 'epithelial-tissue-simple-pseudostratified',
        txt: 'Pseudoestratificado'
      }
    ]
  })
}
</script>
