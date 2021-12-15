import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Presentation from '@/views/Presentation';
import HistologyBasicTissues from '@/views/HistologyBasicTissues';
import EpithelialTissue from '@/views/EpithelialTissue';
import EpithelialTissueSimple from '@/views/EpithelialTissueSimple';
import EpithelialTissueSimpleCubic from '@/views/EpithelialTissueSimpleCubic';
import EpithelialTissueSimplePavement from '@/views/EpithelialTissueSimplePavement';
import EpithelialTissueSimplePrismatic from '@/views/EpithelialTissueSimplePrismatic';
import EpithelialTissueSimplePseudostratified from '@/views/EpithelialTissueSimplePseudostratified';
import EpithelialTissueStratified from '@/views/EpithelialTissueStratified';
import EpithelialTissueStratifiedCubic from '@/views/EpithelialTissueStratifiedCubic';
import EpithelialTissueStratifiedNonKeratinized from '@/views/EpithelialTissueStratifiedNonKeratinized';
import EpithelialTissueStratifiedKeratinized from '@/views/EpithelialTissueStratifiedKeratinized';
import EpithelialTissueStratifiedTransitional from '@/views/EpithelialTissueStratifiedTransitional';
import ConnectiveTissue from '@/views/ConnectiveTissue';
import ConnectiveTissueProperlySaid from '@/views/ConnectiveTissueProperlySaid';
import ConnectiveTissueProperlySaidLoose from '@/views/ConnectiveTissueProperlySaidLoose';
import ConnectiveTissueProperlySaidDensePatterned from "@/views/ConnectiveTissueProperlySaidDensePatterned";

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
        path: '/epithelial-tissue-simple-pavement',
        name: 'epithelial-tissue-simple-pavement',
        component: EpithelialTissueSimplePavement,
        meta: {
            search: {
                text: 'Tecido Epitelial Simples Pavimentoso', keys: ['tecido epitelial simples pavimentoso']
            }
        }
    }, {
        path: '/epithelial-tissue-simple-prismatic',
        name: 'epithelial-tissue-simple-prismatic',
        component: EpithelialTissueSimplePrismatic,
        meta: {
            search: {
                text: 'Tecido Epitelial Simples Prismático', keys: ['tecido epitelial simples prismatico']
            }
        }
    }, {
        path: '/epithelial-tissue-simple-pseudostratified',
        name: 'epithelial-tissue-simple-pseudostratified',
        component: EpithelialTissueSimplePseudostratified,
        meta: {
            search: {
                text: 'Tecido Epitelial Pseudoestratificado', keys: ['tecido epitelial simples pseudoestratificado']
            }
        }
    }, {
        path: '/epithelial-tissue-stratified',
        name: 'epithelial-tissue-stratified',
        component: EpithelialTissueStratified,
        meta: {
            search: {
                text: 'Tecido Epitelial Estratificado', keys: ['tecido epitelial estratificado']
            }
        }
    }, {
        path: '/epithelial-tissue-stratified-cubic',
        name: 'epithelial-tissue-stratified-cubic',
        component: EpithelialTissueStratifiedCubic,
        meta: {
            search: {
                text: 'Tecido Epitelial Estratificado Cúbico', keys: ['tecido epitelial estratificado cubico']
            }
        }
    }, {
        path: '/epithelial-tissue-stratified-non-keratinized',
        name: 'epithelial-tissue-stratified-non-keratinized',
        component: EpithelialTissueStratifiedNonKeratinized,
        meta: {
            search: {
                text: 'Tecido Epitelial Estratificado Não Queratinizado',
                keys: ['tecido epitelial estratificado nao queratinizado']
            }
        }
    }, {
        path: '/epithelial-tissue-stratified-keratinized',
        name: 'epithelial-tissue-stratified-keratinized',
        component: EpithelialTissueStratifiedKeratinized,
        meta: {
            search: {
                text: 'Tecido Epitelial Estratificado Queratinizado',
                keys: ['tecido epitelial estratificado queratinizado']
            }
        }
    }, {
        path: '/epithelial-tissue-stratified-transitional',
        name: 'epithelial-tissue-stratified-transitional',
        component: EpithelialTissueStratifiedTransitional,
        meta: {
            search: {
                text: 'Tecido Epitelial Estratificado de Transição',
                keys: ['tecido epitelial estratificado de transicao']
            }
        }
    }, {
        path: '/connective-tissue', name: 'connective-tissue', component: ConnectiveTissue, meta: {
            search: {
                text: 'Tecido Conjuntivo', keys: ['tecido conjuntivo']
            }
        }
    }, {
        path: '/connective-tissue-properly-said',
        name: 'connective-tissue-properly-said',
        component: ConnectiveTissueProperlySaid,
        meta: {
            search: {
                text: 'Tecido Conjuntivo Propriamente Dito', keys: ['tecido conjuntivo propriamente dito']
            }
        }
    }, {
        path: '/connective-tissue-properly-said-loose',
        name: 'connective-tissue-properly-said-loose',
        component: ConnectiveTissueProperlySaidLoose,
        meta: {
            search: {
                text: 'Tecido Conjuntivo Propriamente Dito Frouxo', keys: ['tecido conjuntivo propriamente dito frouxo']
            }
        }
    }, {
        path: '/connective-tissue-properly-said-dense-patterned',
        name: 'connective-tissue-properly-said-dense-patterned',
        component: ConnectiveTissueProperlySaidDensePatterned,
        meta: {
            search: {
                text: 'Tecido Conjuntivo Propriamente Dito Denso Modelado', keys: ['tecido conjuntivo propriamente dito denso modelado']
            }
        }
    }, {
        path: '*', redirect: '/'
    }]
});

export default router;
