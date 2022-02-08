<template>
  <div>
    <tissue title="Tecido Nervoso: Cerebelo"
            subtitle="nervous_tissue_cerebellar_subtitle.png"
            img="nervous_tissue_cerebellar.png">
      <p>No cerebelo os estímulos aferentes são provenientes da primeira camada cerebelar e são recebidos por dendritos
        das células de
        Purkinje.</p>
      <p>Estas células são os maiores neurônios do sistema nervoso central.</p>
      <p>A informação é conduzida até os núcleos do cerebelo por meio dos axônios das células de Purkinje.</p>
    </tissue>

    <tissue title=""
            subtitle="nervous_tissue_cerebellar_subtitle_1.png"
            img="nervous_tissue_cerebellar_1.png">
      <p>O córtex cerebelar apresenta uma camada de células de Purkinje e uma camada granulosa.</p>
      <p>As células de Purkinje correspondem à via efetora ou de saída do córtex cerebelar.</p>
      <p>Na camada granulosa há numerosos núcleos com distribuição irregular, que pertencem, em sua grande parte, ás
        células granulosas (neurônios pequenos).</p>
    </tissue>
  </div>
</template>

<script>
import Tissue from '@/components/Tissue';

export default {
  name: 'NervousTissueCerebellar',
  components: {Tissue}
}
</script>
