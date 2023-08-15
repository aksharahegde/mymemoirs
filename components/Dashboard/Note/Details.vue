<template>
  <div class="px-8 py-12 max-w-5xl prose">
    <h1 class="flex items-center">
      <Icon name="solar:hashtag-outline" class="mr-1 opacity-30" />
      <span contenteditable>{{ note.title }}</span>
    </h1>
    <div class="flex items-center mb-4 space-x-8 text-sm">
      <div class="flex items-center">
        <Icon name="solar:user-outline" class="mr-1" />
        {{ note.user || "John Doe" }}
      </div>
      <div class="flex items-center">
        <Icon name="solar:user-outline" class="mr-1" />
        {{ new Date(note.created_at).toDateString() }}
      </div>
    </div>
    <p contenteditable>
      {{ note.content }}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>
</template>
<script setup>
const props = defineProps(["note"]);
</script>
