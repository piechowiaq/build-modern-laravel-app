import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import {createInertiaApp, Head, Link} from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import Layout from "@/Shared/Layout.vue";

const appName = import.meta.env.VITE_APP_NAME || 'My App';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    // resolve: async (name) =>
    // {
    //     const page = await resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue'));
    //     page.default.layout = Layout
    //     return page
    // },

    resolve: (name) => {
        const page = resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        );
        page.then((module) => {
            module.default.layout = module.default.layout || Layout;
        });
        return page;
    },
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .component('Link', Link)
            .component('Head', Head)
            .mount(el);
    },
    progress: {
        color: '#4B5563'
    },
});
