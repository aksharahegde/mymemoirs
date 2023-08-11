<template>
  <div
    class="flex flex-col justify-between px-4 py-5 mb-6 w-full max-w-xs h-64 bg-yellow-200 rounded-lg border border-gray-400 dark:bg-gray-800 dark:border-gray-700"
  >
    <div>
      <h3
        class="w-11/12 font-semibold leading-7 text-gray-800 dark:text-gray-100"
      >
        "It is better to live your own destiny imperfectly than to live an
        imitation of somebody else's life with perfection."
      </h3>
    </div>
    <div>
      <div class="flex items-center mb-3">
        <div
          class="p-1 text-yellow-500 bg-gray-800 rounded-full dark:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-star"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <path
              d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
            ></path>
          </svg>
        </div>
      </div>
      <div
        class="flex justify-between items-center text-gray-800 dark:text-gray-100"
      >
        <p class="text-sm">{{ formattedDate }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
const currentDate = new Date();
const threeDaysLater = new Date(currentDate);
threeDaysLater.setDate(currentDate.getDate() + 3);
const formattedDate = threeDaysLater.toDateString();
</script>
