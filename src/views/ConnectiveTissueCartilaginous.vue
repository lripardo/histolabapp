<template>
  <tissue-list title="Tecido Conjuntivo Cartilaginoso" :tissues="tissues">
    <p>O Tecido Conjuntivo cartilaginoso possui forma conjuntiva de consistência rígida.</p>
    <p>Desempenha a função de suporte de tecidos moles, reveste superfícies articulares, onde absorve choques, e
      facilita o deslizamento dos ossos na articulação.</p>
    <p>Contém células chamadas de condrócitos e abundante material extracelular.</p>
    <p>Pode der subdividido em:</p>
  </tissue-list>
</template>

<script>
import TissueList from '@/components/TissueList';

export default {
  name: 'ConnectiveTissueCartilaginous',
  components: {TissueList},
  data: () => ({
    tissues: [
      {
        to: 'connective-tissue-cartilaginous-elastic',
        txt: 'Elástica'
      },
      {
        to: 'connective-tissue-cartilaginous-fibrocartilage',
        txt: 'Fibrocartilagem'
      },
      {
        to: '',
        txt: 'Hialina'
      }
    ]
  })
}
</script>
