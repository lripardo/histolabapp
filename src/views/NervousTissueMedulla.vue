<template>
  <div>
    <tissue title="Tecido Nervoso: Medula"
            subtitle="nervous_tissue_medulla_subtitle.png"
            img="nervous_tissue_medulla.jpg">
      <p>Na medula espinhal observa-se duas regiões distintas, a substância branca que se localiza externamente e a
        cinzenta internamente.</p>
      <p>A substância cinzenta é formada por uma grande quantidade de corpos celulares de neurônios.</p>
      <p>Enquanto que a substância branca tem um aspecto fibrilar, devido ao grande número de axônios presentes.</p>
    </tissue>

    <tissue title=""
            subtitle="nervous_tissue_medulla_subtitle_1.png"
            img="nervous_tissue_medulla_1.png">
      <p>A substância cinzenta é formada principalmente por corpos celulares dos neurônios e células glia, em que estas
        células são responsáveis pela sustentação e pela proteção dos neurônios.</p>
      <p>O centro da substância cinzenta é percorrido pelo canal medular, que é o espaço dentro das vértebras onde
        passa a medula espinhal que contém líquido céfalorraquidiano.</p>
    </tissue>

    <tissue title=""
            subtitle="nervous_tissue_medulla_subtitle_2.png"
            img="nervous_tissue_medulla_2.jpg">
      <p>A substância branca tem como funções dar apoio, sustentação, isolamento elétrico ou nutrição aos neurônios e
        gânglios.</p>
      <p>Consiste principalmente de células gliais, axônios e feixes de fibras.</p>
    </tissue>
  </div>
</template>

<script>
import Tissue from '@/components/Tissue';

export default {
  name: 'NervousTissueMedulla',
  components: {Tissue}
}
</script>
