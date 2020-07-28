// routes.js

import About from './components/About.vue';
import HelloWorld from './components/HelloWorld.vue';

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/home', component: HelloWorld },
    { path: '/about', component: About },
];

export default routes;