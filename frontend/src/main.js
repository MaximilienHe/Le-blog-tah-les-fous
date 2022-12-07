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
import Category from './pages/Category.vue'

const routes = [
	{ path: '/', component: Home, name: 'Home' },
	// { path: '/category/actualites', component: Category, name: 'Actualite' },
	// { path: '/category/dossier', component: Category, name: 'Dossier' },
	// { path: '/category/guide', component: Category, name: 'Guide' },
	// { path: '/category/test', component: Category, name: 'Test' },
	{ path: '/articles/:id', component: PostDetail, name: 'Article', props: true },
	{ path: '/search/:id', component: Search },
	{ path: '/category/:id', component: Category, name : 'Category', },
	{ path: '/search', component: Search, name: 'Search', props:true },
	{ path:'/login', component: Login, name: 'Login' },
	{ path:'/register', component: Register, name: 'Register' },
	{ path:'/articleEditor', component: ArticleEditor, name: 'ArticleEditor'},
	{ path:'/dashboard', component: Dashboard, name: 'Dashboard'},


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
