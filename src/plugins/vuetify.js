import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import pt from 'vuetify/lib/locale/pt';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
        }, themes: {
            light: {
                primary: '#FFCCCC', secondary: '#FFFFFF', accent: '#FF99FF'
            },
        },
    }, lang: {
        locales: {pt}, current: 'pt',
    },
});
