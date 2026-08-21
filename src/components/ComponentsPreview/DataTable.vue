<script setup>
import { ref, computed } from "vue";

const columns = [
	{ key: "id", label: "Order" },
	{ key: "customer", label: "Customer" },
	{ key: "status", label: "Status" },
	{ key: "amount", label: "Amount" },
];

const orders = [
	{ id: "#1042", customer: "C. Chapman", status: "Completed", badge: "badge-success", amount: 249 },
	{ id: "#1043", customer: "H. Hudson", status: "Failed", badge: "badge-error", amount: 78 },
	{ id: "#1044", customer: "F. Fisher", status: "In progress", badge: "badge-warning", amount: 1320 },
	{ id: "#1045", customer: "N. Nelson", status: "Send", badge: "badge-info", amount: 512 },
	{ id: "#1046", customer: "A. Anderson", status: "Completed", badge: "badge-success", amount: 96 },
];

const sortKey = ref("id");
const sortAsc = ref(true);

function sortBy(key) {
	if (sortKey.value === key) {
		sortAsc.value = !sortAsc.value;
	} else {
		sortKey.value = key;
		sortAsc.value = true;
	}
}

const sortedOrders = computed(() => {
	const key = sortKey.value;
	const direction = sortAsc.value ? 1 : -1;
	return [...orders].sort((a, b) => {
		const left = a[key];
		const right = b[key];
		if (typeof left === "number" && typeof right === "number") return (left - right) * direction;
		return String(left).localeCompare(String(right)) * direction;
	});
});
</script>

<template>
	<div class="card card-border border-base-300 bg-base-100 card-sm w-full max-w-100">
		<div class="card-body gap-4">
			<h2 class="flex justify-between items-center">
				<span class="font-semibold flex items-center gap-2">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 opacity-40">
						<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
					</svg>
					Orders
				</span>
			</h2>
			<div class="overflow-x-auto">
				<table class="table table-xs">
					<thead>
						<tr>
							<th v-for="column in columns" :key="column.key" scope="col" class="whitespace-nowrap">
								<button type="button" class="inline-flex items-center gap-1 font-semibold hover:underline" :aria-label="`Sort by ${column.label}`" @click="sortBy(column.key)">
									{{ column.label }}
									<span v-if="sortKey === column.key" aria-hidden="true">{{ sortAsc ? "▲" : "▼" }}</span>
								</button>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="order in sortedOrders" :key="order.id">
							<td class="font-mono whitespace-nowrap" v-text="order.id"></td>
							<td class="whitespace-nowrap" v-text="order.customer"></td>
							<td><span class="badge badge-xs whitespace-nowrap" :class="order.badge" v-text="order.status"></span></td>
							<td class="text-right whitespace-nowrap">${{ order.amount }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>
