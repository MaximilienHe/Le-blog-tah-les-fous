import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import PostDetail from './components/PostDetail.vue';
import ListPost from './components/ListPost.vue';

const routes = [
	{ path: '/', component: ListPost, name: 'Home' },
	{ path: '/articles/:id', component: PostDetail, name: 'Article', props: true },
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