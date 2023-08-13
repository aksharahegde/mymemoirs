<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-2 justify-between items-center font-semibold">
      <div>
        <Icon name="material-symbols:sticky-note-sharp" class="mr-2" />
        <span>Notes</span>
      </div>
      <nuxt-link to="/dashboard/todo" class="link"> View all </nuxt-link>
    </div>
    <div class="w-full carousel rounded-box">
      <div
        class="p-1 w-2/3 carousel-item"
        v-for="(note, index) in notes"
        :key="index"
      >
        <DashboardNoteCard :note="note" />
      </div>
    </div>
  </div>
</template>
<script setup>
let notes = ref([]);

onMounted(() => {
  fetchNotes();
});
const fetchNotes = async () => {
  const data = await $fetch("/api/note");
  notes.value = data;
};
</script>
