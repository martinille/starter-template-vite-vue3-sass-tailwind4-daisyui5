import HomeView from "@/views/HomeView.vue";
import PreviewView from "@/views/PreviewView.vue";

export default [
	{
		path: '/',
		name: 'Home',
		component: HomeView,
	},
	{
		path: '/preview',
		name: 'Component Preview',
		component: PreviewView
	},
];
