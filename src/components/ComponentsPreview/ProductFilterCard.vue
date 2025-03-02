<script setup>

</script>

<template>
  <div class="card card-sm card-border border-base-300 bg-base-100 w-full max-w-80">
    <div class="card-body gap-4">
      <h2 class="flex justify-between items-center">
        <span class="font-semibold flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 opacity-40">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"></path>
          </svg>
          Preview
        </span>
        <span class="text-xs link">more</span>
      </h2>
      <div class="flex gap-2">
        <span class="badge badge-soft">
          Shoes
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3">
            <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"></path>
          </svg>
        </span>
        <span class="badge badge-soft">
          Bags
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3">
            <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"></path>
          </svg>
        </span>
      </div>
      <div class="flex flex-col">
        <div class="flex justify-between items-center gap-2 border-b border-dashed border-b-base-content/5 py-2">
          <label class="flex items-center gap-2 select-none cursor-pointer">
            <input type="checkbox" class="checkbox checkbox-sm" checked="">
            <span>Hoodies</span>
          </label>
          <span class="badge badge-xs font-mono badge-neutral">25</span>
        </div>
        <div class="flex justify-between items-center gap-2 border-b border-dashed border-b-base-content/5 py-2">
          <label class="flex items-center gap-2 select-none cursor-pointer">
            <input type="checkbox" class="checkbox checkbox-sm" checked="">
            <span>Bags</span>
          </label>
          <span class="badge badge-xs font-mono badge-neutral">3</span>
        </div>
        <div class="flex justify-between items-center gap-2 border-b border-dashed border-b-base-content/5 py-2">
          <label class="flex items-center gap-2 select-none cursor-pointer">
            <input type="checkbox" class="checkbox checkbox-sm">
            <span>Shoes</span>
          </label>
          <span class="badge badge-xs font-mono badge-warning">0</span>
        </div>
        <div class="flex justify-between items-center gap-2 border-b border-dashed border-b-base-content/5 py-2">
          <label class="flex items-center gap-2 select-none cursor-pointer">
            <input type="checkbox" class="checkbox checkbox-sm">
            <span>Accessories</span>
          </label>
          <span class="badge badge-xs font-mono badge-neutral">4</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>