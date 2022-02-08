import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Presentation from '@/views/Presentation';
import HistologyBasicTissues from '@/views/HistologyBasicTissues';
import EpithelialTissue from '@/views/epithelial/EpithelialTissue';
import EpithelialTissueSimple from '@/views/epithelial/simple/EpithelialTissueSimple';
import EpithelialTissueSimpleCubic from '@/views/epithelial/simple/EpithelialTissueSimpleCubic';
import EpithelialTissueSimplePavement from '@/views/epithelial/simple/EpithelialTissueSimplePavement';
import EpithelialTissueSimplePrismatic from '@/views/epithelial/simple/EpithelialTissueSimplePrismatic';
import EpithelialTissueSimplePseudostratified from '@/views/epithelial/simple/EpithelialTissueSimplePseudostratified';
import EpithelialTissueStratified from '@/views/epithelial/stratified/EpithelialTissueStratified';
import EpithelialTissueStratifiedCubic from '@/views/epithelial/stratified/EpithelialTissueStratifiedCubic';
import EpithelialTissueStratifiedNonKeratinized from '@/views/epithelial/stratified/EpithelialTissueStratifiedNonKeratinized';
import EpithelialTissueStratifiedKeratinized from '@/views/epithelial/stratified/EpithelialTissueStratifiedKeratinized';
import EpithelialTissueStratifiedTransitional from '@/views/epithelial/stratified/EpithelialTissueStratifiedTransitional';
import ConnectiveTissue from '@/views/connective/ConnectiveTissue';
import ConnectiveTissueProperlySaid from '@/views/connective/properly_said/ConnectiveTissueProperlySaid';
import ConnectiveTissueProperlySaidLoose from '@/views/connective/properly_said/ConnectiveTissueProperlySaidLoose';
import ConnectiveTissueProperlySaidDensePatterned from '@/views/connective/properly_said/ConnectiveTissueProperlySaidDensePatterned';
import ConnectiveTissueProperlySaidDenseUnpatterned from '@/views/connective/properly_said/ConnectiveTissueProperlySaidDenseUnpatterned';
import ConnectiveTissueProperlySaidElastic from '@/views/connective/properly_said/ConnectiveTissueProperlySaidElastic';
import ConnectiveTissueProperlySaidMucous from '@/views/connective/properly_said/ConnectiveTissueProperlySaidMucous';
import ConnectiveTissueAdipose from '@/views/connective/adipose/ConnectiveTissueAdipose';
import ConnectiveTissueAdiposeUnilocular from '@/views/connective/adipose/ConnectiveTissueAdiposeUnilocular';
import ConnectiveTissueAdiposeMultilocular from '@/views/connective/adipose/ConnectiveTissueAdiposeMultilocular';
import ConnectiveTissueCartilaginous from '@/views/connective/cartilaginous/ConnectiveTissueCartilaginous';
import ConnectiveTissueCartilaginousElastic from '@/views/connective/cartilaginous/ConnectiveTissueCartilaginousElastic';
import ConnectiveTissueCartilaginousFibrocartilage from '@/views/connective/cartilaginous/ConnectiveTissueCartilaginousFibrocartilage';
import ConnectiveTissueCartilaginousHyaline from '@/views/connective/cartilaginous/ConnectiveTissueCartilaginousHyaline';
import ConnectiveTissueOsseous from '@/views/connective/osseous/ConnectiveTissueOsseous';
import ConnectiveTissueOsseousCompactBone from '@/views/connective/osseous/ConnectiveTissueOsseousCompactBone';
import ConnectiveTIssueOsseousCancellousBone from '@/views/connective/osseous/ConnectiveTIssueOsseousCancellousBone';
import MuscleTissue from '@/views/muscle/MuscleTissue';
import MuscleTissueSkeletalStriated from '@/views/muscle/MuscleTissueSkeletalStriated';
import MuscleTissueCardiacStriated from '@/views/muscle/MuscleTissueCardiacStriated';
import MuscleTissueSmooth from '@/views/muscle/MuscleTissueSmooth';
import NervousTissue from '@/views/nervous/NervousTissue';
import NervousTissueMedulla from '@/views/nervous/NervousTissueMedulla';
import NervousTissueCerebellar from '@/views/nervous/NervousTissueCerebellar';
import NervousTissueBrain from '@/views/nervous/NervousTissueBrain';
import NervousTissueNerveFibers from "@/views/nervous/NervousTissueNerveFibers";

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
                text: 'Tecido Conjuntivo Propriamente Dito Denso Modelado',
                keys: ['tecido conjuntivo propriamente dito denso modelado']
            }
        }
    }, {
        path: '/connective-tissue-properly-said-dense-unpatterned',
        name: 'connective-tissue-properly-said-dense-unpatterned',
        component: ConnectiveTissueProperlySaidDenseUnpatterned,
        meta: {
            search: {
                text: 'Tecido Conjuntivo Propriamente Dito Denso Não Modelado',
                keys: ['tecido conjuntivo propriamente dito denso nao modelado']
            }
        }
    }, {
        path: '/connective-tissue-properly-said-elastic',
        name: 'connective-tissue-properly-said-elastic',
        component: ConnectiveTissueProperlySaidElastic,
        meta: {
            search: {
                text: 'Tecido Conjuntivo Propriamente Dito Elástico',
                keys: ['tecido conjuntivo propriamente dito elastico']
            }
        }
    }, {
        path: '/connective-tissue-properly-said-mucous',
        name: 'connective-tissue-properly-said-mucous',
        component: ConnectiveTissueProperlySaidMucous,
        meta: {
            search: {
                text: 'Tecido Conjuntivo Propriamente Dito Mucoso', keys: ['tecido conjuntivo propriamente dito mucoso']
            }
        }
    }, {
        path: '/connective-tissue-adipose',
        name: 'connective-tissue-adipose',
        component: ConnectiveTissueAdipose,
        meta: {
            search: {
                text: 'Tecido Conjuntivo Adiposo', keys: ['tecido conjuntivo adiposo']
            }
        }
    }, {
        path: '/connective-tissue-adipose-unilocular',
        name: 'connective-tissue-adipose-unilocular',
        component: ConnectiveTissueAdiposeUnilocular,
        meta: {
            search: {
                text: 'Tecido Conjuntivo Adiposo Unilocular', keys: ['tecido conjuntivo adiposo unilocular']
            }
        }
    }, {
        path: '/connective-tissue-adipose-multilocular',
        name: 'connective-tissue-adipose-multilocular',
        component: ConnectiveTissueAdiposeMultilocular,
        meta: {
            search: {
                text: 'Tecido Conjuntivo Adiposo Multilocular', keys: ['tecido conjuntivo adiposo multilocular']
            }
        }
    }, {
        path: '/connective-tissue-cartilaginous',
        name: 'connective-tissue-cartilaginous',
        component: ConnectiveTissueCartilaginous,
        meta: {
            search: {
                text: 'Tecido Conjuntivo Cartilaginoso', keys: ['tecido conjuntivo cartilaginoso']
            }
        }
    }, {
        path: '/connective-tissue-cartilaginous-elastic',
        name: 'connective-tissue-cartilaginous-elastic',
        component: ConnectiveTissueCartilaginousElastic,
        meta: {
            search: {
                text: 'Tecido Conjuntivo Cartilaginoso Elástico', keys: ['tecido conjuntivo cartilaginoso elastico']
            }
        }
    }, {
        path: '/connective-tissue-cartilaginous-fibrocartilage',
        name: 'connective-tissue-cartilaginous-fibrocartilage',
        component: ConnectiveTissueCartilaginousFibrocartilage,
        meta: {
            search: {
                text: 'Tecido Conjuntivo Cartilaginoso Fibrocartilagem',
                keys: ['tecido conjuntivo cartilaginoso fibrocartilagem']
            }
        }
    }, {
        path: '/connective-tissue-cartilaginous-hyaline',
        name: 'connective-tissue-cartilaginous-hyaline',
        component: ConnectiveTissueCartilaginousHyaline,
        meta: {
            search: {
                text: 'Tecido Conjuntivo Cartilaginoso Hialina', keys: ['tecido conjuntivo cartilaginoso hialina']
            }
        }
    }, {
        path: '/connective-tissue-osseous',
        name: 'connective-tissue-osseous',
        component: ConnectiveTissueOsseous,
        meta: {
            search: {
                text: 'Tecido Conjuntivo Ósseo', keys: ['tecido conjuntivo osseo']
            }
        }
    }, {
        path: '/connective-tissue-osseous-compact-bone',
        name: 'connective-tissue-osseous-compact-bone',
        component: ConnectiveTissueOsseousCompactBone,
        meta: {
            search: {
                text: 'Tecido Conjuntivo Ósseo - Osso Compacto', keys: ['tecido conjuntivo osseo osso compacto']
            }
        }
    }, {
        path: '/connective-tissue-osseous-cancellous-bone',
        name: 'connective-tissue-osseous-cancellous-bone',
        component: ConnectiveTIssueOsseousCancellousBone,
        meta: {
            search: {
                text: 'Tecido Conjuntivo Ósseo - Osso Esponjoso', keys: ['tecido conjuntivo osseo osso esponjoso']
            }
        }
    }, {
        path: '/muscle-tissue', name: 'muscle-tissue', component: MuscleTissue, meta: {
            search: {
                text: 'Tecido Muscular', keys: ['tecido muscular']
            }
        }
    }, {
        path: '/muscle-tissue-skeletal-striated',
        name: 'muscle-tissue-skeletal-striated',
        component: MuscleTissueSkeletalStriated,
        meta: {
            search: {
                text: 'Tecido Muscular Estriado Esquelético', keys: ['tecido muscular estriado esqueletico']
            }
        }
    }, {
        path: '/muscle-tissue-cardiac-striated',
        name: 'muscle-tissue-cardiac-striated',
        component: MuscleTissueCardiacStriated,
        meta: {
            search: {
                text: 'Tecido Muscular Estriado Cardíaco', keys: ['tecido muscular estriado cardiaco']
            }
        }
    }, {
        path: '/muscle-tissue-smooth', name: 'muscle-tissue-smooth', component: MuscleTissueSmooth, meta: {
            search: {
                text: 'Tecido Muscular Liso', keys: ['tecido muscular liso']
            }
        }
    }, {
        path: '/nervous-tissue', name: 'nervous-tissue', component: NervousTissue, meta: {
            search: {
                text: 'Tecido Nervoso', keys: ['tecido nervoso']
            }
        }
    }, {
        path: '/nervous-tissue-medulla', name: 'nervous-tissue-medulla', component: NervousTissueMedulla, meta: {
            search: {
                text: 'Tecido Nervoso Medula', keys: ['tecido nervoso medula']
            }
        }
    }, {
        path: '/nervous-tissue-cerebellar',
        name: 'nervous-tissue-cerebellar',
        component: NervousTissueCerebellar,
        meta: {
            search: {
                text: 'Tecido Nervoso Cerebelo', keys: ['tecido nervoso cerebelo']
            }
        }
    }, {
        path: '/nervous-tissue-brain', name: 'nervous-tissue-brain', component: NervousTissueBrain, meta: {
            search: {
                text: 'Tecido Nervoso Cérebro', keys: ['tecido nervoso cerebro']
            }
        }
    }, {
        path: '/nervous-tissue-nerve-fibers',
        name: 'nervous-tissue-nerve-fibers',
        component: NervousTissueNerveFibers,
        meta: {
            search: {
                text: 'Tecido Nervoso Fibras Nervosas', keys: ['tecido nervoso fibras nervosas']
            }
        }
    }, {
        path: '*', redirect: '/'
    }]
});

export default router;
