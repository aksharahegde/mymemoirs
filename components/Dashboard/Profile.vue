<template>
  <dialog id="profileModel" class="modal">
    <form method="dialog" class="modal-box">
      <button class="absolute top-2 right-2 btn btn-sm btn-circle btn-ghost">
        ✕
      </button>
      <h3 class="text-lg font-bold">My Profile</h3>
      <div class="mt-6">
        <input
          type="text"
          placeholder="Email"
          v-model="user.email"
          disabled
          class="w-full max-w-xs input input-bordered"
        />
      </div>
      <input
        type="submit"
        value="Submit"
        class="mt-4 btn btn-primary w-[120px]"
      />
    </form>
  </dialog>
</template>
<script setup>
const user = useSupabaseUser();
</script>
