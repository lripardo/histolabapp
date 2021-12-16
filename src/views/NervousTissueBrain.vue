<template>
  <div>
    <tissue title="Tecido Nervoso: Cérebro"
            subtitle="nervous_tissue_brain_subtitle.png"
            img="nervous_tissue_brain.png">
      <p>O córtex cerebelar apresenta uma camada de células de Purkinje e uma camada granulosa.</p>
      <p>As células de Purkinje correspondem à via efetora ou de saída do córtex cerebelar.</p>
      <p>Na camada granulosa há numerosos núcleos com distribuição irregular, que pertencem, em sua grande parte, às
        celulas granulosas (neurônios pequenos).</p>
    </tissue>

    <tissue title=""
            subtitle="nervous_tissue_brain_subtitle_1.png"
            img="nervous_tissue_brain_1.jpg">
      <p>Os neurônios são responsáveis pelas funções receptivas no cérebro e as células da glia são responsáveis pela
        sustentação e pela proteção dos neurônios.</p>
    </tissue>
  </div>
</template>

<script>
import Tissue from '@/components/Tissue';

export default {
  name: 'NervousTissueBrain',
  components: {Tissue}
}
</script>
