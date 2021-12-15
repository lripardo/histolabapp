<template>
  <v-app-bar app absolute flat color="transparent">
    <v-app-bar-nav-icon v-if="!hiddenBack">
      <v-btn icon>
        <v-icon @click="back">mdi-arrow-left</v-icon>
      </v-btn>
    </v-app-bar-nav-icon>

    <v-autocomplete
        :items="items"
        dense
        flat
        full-width
        single-line
        rounded
        outlined
        hide-details
        hide-no-data
        hide-selected
        clearable
        return-object
        placeholder="Buscar"
        item-text="meta.search.text"
        prepend-inner-icon="mdi-magnify"
        :filter="pageQuery"
        @input="goToPageQuery"
    />
  </v-app-bar>
</template>

<script>
import {goTo} from '@/router/util';

export default {
  props: {
    hiddenBack: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  name: 'CustomAppBar',
  data: () => ({
    model: null,
    search: null,
  }),
  computed: {
    items() {
      return this.$router ? this.$router.options.routes.filter(r => r.name) : [];
    }
  },
  methods: {
    back() {
      history.back();
    },
    goToPageQuery(route) {
      !route || goTo(route.name);
    },
    pageQuery(route, queryText) {
      if (route && route.meta && route.meta.search.keys.length) {
        return !!route.meta.search.keys.find(key => key.includes(queryText.toLowerCase()));
      }
      return false;
    }
  }
}
</script>
