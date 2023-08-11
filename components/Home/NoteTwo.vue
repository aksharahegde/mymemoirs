<template>
  <div
    class="flex flex-col justify-between px-4 py-5 mb-6 w-full max-w-xs h-64 bg-white rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-700"
  >
    <div>
      <h3
        class="w-11/12 font-semibold leading-7 text-gray-800 dark:text-gray-100"
      >
        Catchup with school friends to share my wedding news <Icon name="fluent-emoji-flat:loudspeaker"/>
      </h3>
    </div>
    <div>
      <div class="flex items-center mb-3 flex-no-wrap">
        <div class="w-6 h-6 bg-center bg-cover rounded-md">
          <img
            src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png"
            alt=""
            class="object-cover overflow-hidden w-full h-full rounded-full border-2 border-white shadow dark:border-gray-700"
          />
        </div>
        <div class="-ml-2 w-6 h-6 bg-cover rounded-md">
          <img
            src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png"
            alt=""
            class="object-cover overflow-hidden w-full h-full rounded-full border-2 border-white shadow dark:border-gray-700"
          />
        </div>
        <div class="-ml-2 w-6 h-6 bg-center bg-cover rounded-md">
          <img
            src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png"
            alt=""
            class="object-cover overflow-hidden w-full h-full rounded-full border-2 border-white shadow dark:border-gray-700"
          />
        </div>
      </div>
      <div
        class="flex justify-between items-center text-gray-800 dark:text-gray-100"
      >
        <p class="text-sm">{{ new Date().toDateString() }} 14:20</p>
      </div>
    </div>
  </div>
</template>
