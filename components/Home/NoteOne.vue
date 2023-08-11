<template>
  <div
    class="flex flex-col justify-between px-4 py-5 mb-6 w-full max-w-xs h-64 bg-red-300 rounded-lg border border-gray-300"
  >
    <div>
      <h3 class="w-11/12 font-semibold leading-7 text-gray-800">
        Grocery shopping <Icon name="fluent-emoji-flat:basket" />
      </h3>
      <ul class="list-disc">
        <li
          class="flex items-center mb-1"
          v-for="(item, index) in groceries"
          :key="index"
        >
          <span class="mr-2 w-4 h-4 border-2 border-gray-500"></span>
          <label class="text-gray-800">{{ item }}</label>
        </li>
      </ul>
    </div>
    <div>
      <div class="flex justify-between items-center text-gray-800">
        <p class="text-sm">{{ formattedDate }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
let groceries = ["Carrot", "Beans", "Brinjal"];
const formattedDate = new Date().toLocaleString(undefined, {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
});
</script>
