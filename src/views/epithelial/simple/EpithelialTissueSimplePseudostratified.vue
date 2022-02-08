<template>
  <tissue title="Tecido Epitelial Pseudoestratificado"
          subtitle="epithelial_tissue_simple_pseudostratified_subtitle.png"
          img="epithelial_tissue_simple_pseudostratified.png">
    <p><strong>Epitelial Pseudoestratificado:</strong> apresenta uma só camada de células, porém elas apresentam alturas
      diferentes, o que resulta na distribuição variada de seus núcleos, dando a falsa impressão de estratificação.</p>
    <p>Reveste internamente as porções condutoras do sistema respiratório como cavidade nasal, traqueia e brônquios.</p>
  </tissue>
</template>

<script>
import Tissue from '@/components/Tissue';

export default {
  name: 'EpithelialTissueSimplePseudostratified',
  components: {Tissue}
}
</script>
