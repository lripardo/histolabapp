<template>
  <v-app>
    <custom-app-bar :hidden-back="hideBackBtn"/>
    <v-main class="fill-height">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import CustomAppBar from '@/components/CustomAppBar';

export default {
  name: 'App',
  components: {CustomAppBar},
  computed: {
    hideBackBtn() {
      return this.$route.name === 'home';
    }
  }
}
</script>
