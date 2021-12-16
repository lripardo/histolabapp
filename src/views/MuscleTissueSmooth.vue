<template>
  <tissue title="Tecido Muscular Liso"
          subtitle="muscle_tissue_smooth_subtitle.png"
          img="muscle_tissue_smooth.jpg">
    <p><strong>Muscular liso:</strong> é formado por células que não apresentam estriações, sendo essa uma
      característica que permite fácil diferenciação dos outros tipos de tecido muscular.</p>
    <p>Suas células são longas, com centro mais espesso e extremidades afiladas.</p>
    <p>Elas apresentam apenas um único núcleo, disposto no centro de cada uma delas.</p>
    <p>Esse tecido é encontrado em diversas estruturas do corpo, como a bexiga, útero, trato digestório e artérias.</p>
  </tissue>
</template>

<script>
import Tissue from '@/components/Tissue';

export default {
  name: 'MuscleTissueSmooth',
  components: {Tissue}
}
</script>
