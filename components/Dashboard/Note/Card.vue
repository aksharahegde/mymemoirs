<template>
  <div
    class="p-4 space-y-2 w-full h-auto rounded-xl transition-all duration-500 bg-base-100 hover:bg-base-300 hover:cursor-pointer"
  >
    <div class="flex justify-between items-center mb-2">
      <h2 class="font-semibold">{{ note.title }}</h2>
      <Icon name="material-symbols:more-horiz" />
    </div>
    <p class="text-sm line-clamp-4">{{ note.content }}</p>
    <div class="text-xs text-red-400 lowercase">{{ note.category }}</div>
    <div class="flex flex-none justify-between items-end text-xs">
      <!-- <span class="w-1/2 overflow-clip">{{ note.user }}</span> -->
      <span class="w-1/2 whitespace-nowrap">{{
        getTime(note.created_at)
      }}</span>
    </div>
  </div>
</template>
<script setup>
import { formatTimeAgo } from "@vueuse/core";

const props = defineProps({
  note: {
    type: Object,
    default: {},
  },
});
const note = props.note;

const getTime = (val) => {
  const timeAgo = formatTimeAgo(new Date(val));
  return timeAgo;
  // new Date(note.created_at).toDateString();
};

const hexToRGBA = (hex, alpha) => {
  hex = hex.replace("#", "");

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const background = hexToRGBA(note.background || "#fff", 0.5);
</script>
