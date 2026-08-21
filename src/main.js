import { createApp } from 'vue';
import router from '@/router/index.js';
import { watchSystemTheme } from '@/utils/theme.js';
import App from '@/App.vue';
import '@/assets/styles/main.scss';

watchSystemTheme();

createApp(App)
	.use(router)
	.mount('#app');
