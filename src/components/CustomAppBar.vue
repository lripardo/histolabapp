<template>
  <v-app-bar app absolute flat color="transparent">
    <v-dialog v-model="dialog" max-width="250">
      <v-card>
        <v-card-title>HistoLabApp</v-card-title>
        <v-card-text class="text-center">
          <v-avatar size="80">
            <v-img src="@/assets/logo_cropped.png"></v-img>
          </v-avatar>
          <div>
            versão {{ version }}
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn text @click="dialog = false">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

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

    <v-menu left bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item @click="dialog = true">
          <v-list-item-title>Versão</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import {goTo} from '@/router/util';
import {version} from '../../package.json';

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
    dialog: false,
    version: version,
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
