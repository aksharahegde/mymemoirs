<template>
  <div class="mb-4">
    <div class="flex justify-between items-center">
      <h1 class="mb-2 text-2xl font-bold">Notes</h1>
      <ThemeSelector />
    </div>
    <div class="flex justify-between items-center py-2 h-16">
      <div class="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search notes"
          class="w-full max-w-xs input min-w-[360px] input-bordered"
        />
        <button
          class="btn btn-circle btn-primary tooltip tooltip-right"
          data-tip="Add note"
          @click="showAddNote"
        >
          <Icon name="ic:outline-add" class="text-2xl" />
        </button>
      </div>
      <div v-if="!isAddNote" class="flex items-center space-x-2">
        <button class="btn btn-ghost">
          <Icon name="solar:download-minimalistic-outline" />
          Download
        </button>
        <button class="btn btn-ghost">
          <Icon name="solar:share-outline" />
          Share
        </button>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-12 gap-4 h-[calc(100vh-182px)]">
    <div
      class="overflow-y-auto col-span-3 space-y-2 max-h-[calc(100vh-154px)] card bg-base-100 custom-scroll pr-2"
    >
      <DashboardNoteCard
        v-for="note in notes"
        :key="note.id"
        :note="note"
        :class="{ 'bg-base-300': note.id === selectedNote && selectedNote.id }"
        @click="selectNote(note)"
      />
    </div>
    <div class="col-span-9">
      <DashboardNoteEmpty v-if="!selectedNote && !isAddNote" />
      <DashboardNoteAdd v-else-if="isAddNote"/>
      <DashboardNoteDetails v-else :note="selectedNote" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "dashboard",
});

let notes = ref([]);
let selectedNote = ref(null);
let isAddNote = ref(false);

onMounted(() => {
  fetchNotes();
});
const fetchNotes = async () => {
  notes.value = await $fetch("/api/note");
  if (notes.value.length > 0) {
    selectedNote.value = notes?.value[0];
  }
};

const selectNote = (note) => {
  selectedNote.value = note;
  isAddNote.value = false;
};
const showAddNote = () => {
  isAddNote.value = true;
  selectedNote.value = null;
};
</script>
