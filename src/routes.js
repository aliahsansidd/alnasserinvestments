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

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/home', component: HelloWorld },
    { path: '/aboutcompany', component: aboutcompany },
    { path: '/aboutchairman', component: aboutchairman },
    { path: '/ourstrategy', component: strategy },
    { path: '/philogy', component: philogy },
    { path: '/philogy', component: philogy },
    { path: '/carrier', component: carrier },
    { path: '/ourinvestment', component: ourinvestment },
    { path: '/petroleumsector', component: petroleumsector },
    { path: '/powersector', component: powersector },
    { path: '/realstatesector', component: realsector },
    { path: '/healthsector', component: healthsector },
    { path: '/itsector', component: itsector },
];

export default routes;