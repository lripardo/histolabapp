import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Presentation from '@/views/Presentation';
import HistologyBasicTissues from '@/views/HistologyBasicTissues';
import EpithelialTissue from '@/views/EpithelialTissue';
import EpithelialTissueSimple from '@/views/EpithelialTissueSimple';
import EpithelialTissueSimpleCubic from '@/views/EpithelialTissueSimpleCubic';

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
        path: '/epithelial-tissue', name: 'epithelial-tissue', component: EpithelialTissue, meta: {
            search: {
                text: 'Tecido Epitelial', keys: ['tecido epitelial']
            }
        }
    }, {
        path: '/epithelial-tissue-simple', name: 'epithelial-tissue-simple', component: EpithelialTissueSimple, meta: {
            search: {
                text: 'Tecido Epitelial Simples', keys: ['tecido epitelial simples']
            }
        }
    }, {
        path: '/epithelial-tissue-simple-cubic',
        name: 'epithelial-tissue-simple-cubic',
        component: EpithelialTissueSimpleCubic,
        meta: {
            search: {
                text: 'Tecido Epitelial Simples Cúbico', keys: ['tecido epitelial simples cubico']
            }
        }
    }, {
        path: '*', redirect: '/'
    }]
});

export default router;
