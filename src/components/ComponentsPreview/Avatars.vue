<script setup>
import avatar1 from '@/assets/images/avatars/avatar-1.svg';
import avatar2 from '@/assets/images/avatars/avatar-2.svg';
import avatar3 from '@/assets/images/avatars/avatar-3.svg';
import avatar4 from '@/assets/images/avatars/avatar-4.svg';
</script>

<template>
	<div class="flex flex-col gap-8 items-center justify-center">
		<div class="avatar">
			<div class="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
				<img :src="avatar1" alt="User avatar" />
			</div>
		</div>
		<div class="avatar-group -space-x-6">
			<div class="avatar">
				<div class="w-12">
					<img :src="avatar2" alt="User avatar" />
				</div>
			</div>
			<div class="avatar">
				<div class="w-12">
					<img :src="avatar3" alt="User avatar" />
				</div>
			</div>
			<div class="avatar">
				<div class="w-12">
					<img :src="avatar4" alt="User avatar" />
				</div>
			</div>
			<div class="avatar avatar-placeholder">
				<div class="bg-neutral text-neutral-content w-12">
					<span>+99</span>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
/* Add your SCSS code here. Project-wide styles live in src/assets/styles/main.scss. */
</style>
