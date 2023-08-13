<template>
  <div class="p-2 space-y-2 w-full h-40 rounded-md border shadow bg-base-100 border-primary-content">
    <div class="flex justify-between items-center mb-2">
      <h2 class="font-semibold">{{ note.title }}</h2>
      <Icon name="material-symbols:more-horiz" />
    </div>
    <p class="text-sm line-clamp-4">{{ note.content }}</p>
    <div class="text-xs badge badge-neutral">{{ note.category }}</div>
    <div class="flex flex-none justify-between items-end text-xs">
      <span class="w-1/2 overflow-clip">{{ note.user }}</span>
      <span class="w-1/2 whitespace-nowrap">{{ useDateFormat(new Date(note.created_at), 'ddd, DD MMM YYYY') }}</span>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  note: {
    type: Object,
    default: {},
  },
});
const note = props.note;
console.log(note);
</script>
