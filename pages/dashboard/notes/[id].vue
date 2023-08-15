<template>
  <div class="rounded-lg text-base-content">
    <h1 class="text-2xl font-bold">{{ note.title }}</h1>
    <div class="flex justify-between items-center text-xs">
      <span>{{ new Date(note.created_at).toDateString() }}</span>
      <span class="badge badge-primary">{{ note.category }}</span>
    </div>
    <p class="mt-2">{{ note.content }}</p>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "dashboard",
});
const route = useRoute();
const note = ref({});

onMounted(() => {
  fetchNote();
});
const fetchNote = async () => {
  const data = await $fetch(`/api/note/${route.params.id}`);
  console.log(data);
  note.value = data;
};
</script>
