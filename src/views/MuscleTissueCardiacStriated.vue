<template>
  <tissue title="Tecido Muscular Estriado Cardíaco"
          subtitle="muscle_tissue_cardiac_striated_subtitle.png"
          img="muscle_tissue_cardiac_striated.jpg">
    <p><strong>Muscular estriado cardíaco:</strong> é encontrado no coração, apresenta células alongadas e ramificadas
      com estriações, sendo essas ramificações unidas por estruturas denominadas discos intercalares.</p>
    <p>Esses discos transmitem sinais de uma célula para outra, garantem a sincronização da contração cardíaca e atuam
      impedindo que as células separem-se quando ocorre o batimento do coração.</p>
    <p>Diferentemente do tecido muscular esquelético, as fibras do músculo cardíaco apresentam um ou dois núcleos, que
      estão na posição mais central ou próxima a essa região.</p>
  </tissue>
</template>

<script>
import Tissue from '@/components/Tissue';

export default {
  name: 'MuscleTissueCardiacStriated',
  components: {Tissue}
}
</script>
