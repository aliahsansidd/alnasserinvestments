// routes.js

import aboutcompany from './components/aboutcompany.vue';
import aboutchairman from './components/aboutchairman.vue';
import strategy from './components/strategy.vue';
import philogy from './components/philogy.vue';
import carrier from './components/carrier.vue';
import ourinvestment from './components/ourinvestment.vue';
import petroleumsector from './components/petroleumsector.vue';
import powersector from './components/powersector.vue';
import realsector from './components/realsector.vue';
import healthsector from './components/healthsector.vue';
import itsector from './components/itsector.vue';
import HelloWorld from './components/HelloWorld.vue';
// routes.js

import aboutcompanyArb from './components/aboutcompany-Arb.vue';
import aboutchairmanArb from './components/aboutchairman-Arb.vue';
import strategyArb from './components/strategy-Arb.vue';
import philogyArb from './components/philogy-Arb.vue';
import carrierArb from './components/carrier-Arb.vue';
import ourinvestmentArb from './components/ourinvestment-Arb.vue';
import petroleumsectorArb from './components/petroleumsector-Arb.vue';
import powersectorArb from './components/powersector-Arb.vue';
import realsectorArb from './components/realsector-Arb.vue';
import healthsectorArb from './components/healthsector-Arb.vue';
import itsectorArb from './components/itsector-Arb.vue';
import HelloWorldArb from './components/HelloWorld-Arb.vue';

import  arb  from "./app/arb.vue";
import  en  from "./app/en.vue";

const routes = [
    {
        path: '/en', component: en, children: [
            { path: '', component: HelloWorld },
            { path: 'home', component: HelloWorld },
            { path: 'aboutcompany', component: aboutcompany },
            { path: 'aboutchairman', component: aboutchairman },
            { path: 'ourstrategy', component: strategy },
            { path: 'philogy', component: philogy },
            { path: 'carrier', component: carrier },
            { path: 'ourinvestment', component: ourinvestment },
            { path: 'petroleumsector', component: petroleumsector },
            { path: 'powersector', component: powersector },
            { path: 'realstatesector', component: realsector },
            { path: 'healthsector', component: healthsector },
            { path: 'itsector', component: itsector },
        ]
    },
    {
        path: '/ar', component: arb, children: [
            { path: 'home', component: HelloWorldArb },
            { path: '',  component: HelloWorldArb},
            { path: 'aboutcompany', component: aboutcompanyArb },
            { path: 'aboutchairman', component: aboutchairmanArb },
            { path: 'ourstrategy', component: strategyArb },
            { path: 'philogy', component: philogyArb },
            { path: 'carrier', component: carrierArb },
            { path: 'ourinvestment', component: ourinvestmentArb },
            { path: 'petroleumsector', component: petroleumsectorArb },
            { path: 'powersector', component: powersectorArb },
            { path: 'realstatesector', component: realsectorArb },
            { path: 'healthsector', component: healthsectorArb },
            { path: 'itsector', component: itsectorArb },
        ]
    },

    {
        path: '/',
        redirect: '/ar/home'
      }

];

export default routes;