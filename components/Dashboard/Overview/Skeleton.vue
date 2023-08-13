<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-2 items-center font-semibold">
        <slot name="title"/>
    </div>
    <div class="overflow-x-auto max-w-sm">
        <slot name="body"/>
    </div>
  </div>
</template>
