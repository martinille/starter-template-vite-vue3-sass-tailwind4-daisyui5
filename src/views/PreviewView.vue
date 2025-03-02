<script setup>

import ProductFilterCard from "@/components/ComponentsPreview/ProductFilterCard.vue";
import EventScheduleCard from "@/components/ComponentsPreview/EventScheduleCard.vue";
import Tabs from "@/components/ComponentsPreview/Tabs.vue";
import PriceRange from "@/components/ComponentsPreview/PriceRange.vue";
import ProductCard from "@/components/ComponentsPreview/ProductCard.vue";
import SearchBox from "@/components/ComponentsPreview/SearchBox.vue";
import AccountRegistrationForm from "@/components/ComponentsPreview/AccountRegistrationForm.vue";
import Chart from "@/components/ComponentsPreview/Chart.vue";
import Score from "@/components/ComponentsPreview/Score.vue";
import OrderList from "@/components/ComponentsPreview/OrderList.vue";
import Revenue from "@/components/ComponentsPreview/Revenue.vue";
import WritePostForm from "@/components/ComponentsPreview/WritePostForm.vue";
import ChatBubbles from "@/components/ComponentsPreview/ChatBubbles.vue";
import AdminPanelNav from "@/components/ComponentsPreview/AdminPanelNav.vue";
import MusicPlayer from "@/components/ComponentsPreview/MusicPlayer.vue";
import MockupCode from "@/components/ComponentsPreview/MockupCode.vue";
import Notifications from "@/components/ComponentsPreview/Notifications.vue";
import Timeline from "@/components/ComponentsPreview/Timeline.vue";
import SubscriptionPlanCard from "@/components/ComponentsPreview/SubscriptionPlanCard.vue";
import Countdown from "@/components/ComponentsPreview/Countdown.vue";
import Accordion from "@/components/ComponentsPreview/Accordion.vue";
import Avatars from "@/components/ComponentsPreview/Avatars.vue";

const components = [
	{title: "Product Filter Card", component: ProductFilterCard},
	{title: "Event Schedule Card", component: EventScheduleCard},
	{title: "Tabs", component: Tabs},
	{title: "Price Range", component: PriceRange},
	{title: "Product Card", component: ProductCard},
	{title: "Search Box", component: SearchBox},
	{title: "Account Registration Form", component: AccountRegistrationForm},
	{title: "Chart", component: Chart},
	{title: "Score", component: Score},
	{title: "Order List", component: OrderList},
	{title: "Revenue", component: Revenue},
	{title: "Write Post Form", component: WritePostForm},
	{title: "Chat Bubbles", component: ChatBubbles},
	{title: "Admin Panel Nav", component: AdminPanelNav},
	{title: "Music Player", component: MusicPlayer},
	{title: "Mockup Code", component: MockupCode},
	{title: "Notifications", component: Notifications},
	{title: "Timeline", component: Timeline},
	{title: "Subscription Plan Card", component: SubscriptionPlanCard},
	{title: "Countdown", component: Countdown},
	{title: "Accordion", component: Accordion},
	{title: "Avatars", component: Avatars},
]

</script>

<template>
	<div class="container-center">
		<h1 class="text-center">Components Preview</h1>
		<p class="text-center text-base text-base-content/70">Preview of the some components built with DaisyUI and Tailwind CSS.</p>
		<p class="text-center text-base text-base-content/70 mb-16">You can find the source code in the <code><span class="icon">📁</span>src/components/ComponentsPreview</code> directory.</p>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			<div class="card card-border border-base-300 bg-base-300 p-4 shadow-sm" v-for="c in components" :key="c.title">
				<h3 class="text-center mb-4" v-text="c.title"></h3>
				<div class="flex place-content-center" v-if="c.component">
					<component :is="c.component"/>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">

</style>