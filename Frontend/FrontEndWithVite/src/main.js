import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import PostDetail from './components/PostDetail.vue';
import Search from './pages/Search.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';

import Home from './pages/Home.vue'
import ArticleEditor from './pages/ArticleEditor.vue'
import Dashboard from './pages/Dashboard.vue'
const routes = [
	{ path: '/', component: Home, name: 'Home' },
	{ path: '/articles/:id', component: PostDetail, name: 'Article', props: true },
	{ path: '/search', component: Search, name: 'Search', props:true },
	{ path:'/login', component: Login, name: 'Login' },
	{ path:'/register', component: Register, name: 'Register' },
	{ path:'/articleEditor', component: ArticleEditor, name: 'ArticleEditor'},
	{ path: '/dashboard', components: Dashboard, name: 'Dashboard'}
];

const router = createRouter({
	// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
	history: createWebHistory(),
	routes, // short for `routes: routes`
});
const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount('#app');
