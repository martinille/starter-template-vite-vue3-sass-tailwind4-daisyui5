import { createApp } from 'vue';
import router from '@/router/index.js';
import { initTheme } from '@/utils/theme.js';
import App from '@/App.vue';
import '@/assets/styles/main.scss';

initTheme();

createApp(App)
	.use(router)
	.mount('#app');
