import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/home-page.vue'
import ContactIndex from '../pages/contact-index.vue'
import Statistics from '../pages/statistics.vue'
const routerOptions = {
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: HomePage,
		},
		{
			path: '/contact',
			component: ContactIndex,
		},
		{
			path: '/statistics',
			component: Statistics,
		},

	]
}
const router = createRouter(routerOptions)

export default router