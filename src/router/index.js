import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Presentation from '@/views/Presentation';
import HistologyBasicTissues from '@/views/HistologyBasicTissues';

Vue.use(VueRouter);

const router = new VueRouter({
    base: process.env.BASE_URL, routes: [{
        path: '/', name: 'home', component: Home, meta: {
            search: {
                text: 'Início', keys: ['inicio', 'home']
            }
        }
    }, {
        path: '/presentation', name: 'presentation', component: Presentation, meta: {
            search: {
                text: 'Apresentação', keys: ['apresentacao', 'sobre', 'informacoes']
            }
        }
    }, {
        path: '/histology-basic-tissues', name: 'histology-basic-tissues', component: HistologyBasicTissues, meta: {
            search: {
                text: 'Tecidos Básicos de Histologia', keys: ['tecidos basicos de histologia']
            }
        }
    }, {
        path: '*', redirect: '/'
    }]
});

export default router;
