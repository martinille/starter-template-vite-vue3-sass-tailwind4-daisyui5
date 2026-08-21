<script setup>
import { ref } from 'vue'

const dialog = ref(null)
const result = ref('No decision yet.')

function openDialog() {
	if (typeof dialog.value?.showModal === 'function') dialog.value.showModal()
}

function closeDialog(message) {
	result.value = message
	if (typeof dialog.value?.close === 'function') dialog.value.close()
}
</script>

<template>
	<div class="card card-sm card-border border-base-300 bg-base-100 w-full max-w-80">
		<div class="card-body gap-4 items-center text-center">
			<h2 class="font-semibold">Archive project</h2>
			<p class="text-xs text-base-content/70">Opens a native dialog element styled by daisyUI.</p>
			<button type="button" class="btn btn-sm btn-primary" @click="openDialog">Open dialog</button>
			<p class="text-xs font-mono text-base-content/50" v-text="result"></p>

			<dialog ref="dialog" class="modal">
				<div class="modal-box text-left">
					<h3 class="text-lg font-bold">Archive this project?</h3>
					<p class="py-4 text-sm text-base-content/70">
						The project moves to your archive. Nothing is deleted and you can restore it at any time.
					</p>
					<div class="modal-action">
						<button type="button" class="btn btn-sm btn-ghost" @click="closeDialog('Cancelled.')">Cancel</button>
						<button type="button" class="btn btn-sm btn-primary" @click="closeDialog('Project archived.')">Confirm</button>
					</div>
				</div>
				<form method="dialog" class="modal-backdrop">
					<button type="submit">close</button>
				</form>
			</dialog>
		</div>
	</div>
</template>
