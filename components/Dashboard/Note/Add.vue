<template>
  <div class="px-4 mb-4">
    <div class="flex justify-between items-center mx-auto max-w-2xl">
      <h1 class="mb-2 text-xl font-bold">Add a new note</h1>
    </div>
    <div class="mb-12">
      <h1 class="flex items-center mx-auto max-w-2xl">
        <Icon name="solar:hashtag-outline" class="text-2xl opacity-30" />
        <input
          type="text"
          placeholder="Type here"
          class="w-full text-2xl focus:border-none focus-within:outline-none input"
        />
      </h1>
      <ClientOnly>
        <DashboardEditor/>
      </ClientOnly>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "dashboard",
});
</script>
