<template>
  <dialog id="addNote" class="modal">
    <form method="dialog" class="modal-box" ref="form">
      <h3 class="text-lg font-bold">Add a note</h3>
      <div class="flex flex-col mt-6 space-y-3">
        <div class="relative">
          <input
            type="text"
            placeholder="Title"
            v-model="formData.title"
            class="w-full max-w-xs input input-bordered"
            @change="v$.title.$touch"
            :class="{
              'input-error': v$.title.$error,
              'input-success ': !v$.title.$invalid,
            }"
          />
          <span class="text-xs text-red-500" v-if="v$.title.$error">{{
            v$.title.$errors[0].$message
          }}</span>
        </div>
        <div class="relative">
          <textarea
            class="w-full textarea textarea-bordered"
            placeholder="Description"
            v-model="formData.content"
            @change="v$.content.$touch"
            :class="{
              'textarea-error': v$.content.$error,
              'textarea-success ': !v$.content.$invalid,
            }"
          ></textarea>
          <span class="text-xs text-red-500" v-if="v$.content.$error">{{
            v$.content.$errors[0].$message
          }}</span>
        </div>
        <div class="relative">
          <select
            v-model="formData.category"
            class="w-full max-w-xs select select-bordered"
            @change="v$.category.$touch"
            :class="{
              'select-error': v$.category.$error,
              'select-success ': !v$.category.$invalid,
            }"
          >
            <option disabled selected>Category</option>
            <option>Routine</option>
            <option>Work</option>
          </select>
          <span class="text-xs text-red-500" v-if="v$.category.$error">{{
            v$.category.$errors[0].$message
          }}</span>
        </div>
      </div>
      <div class="items-center modal-action">
        <button class="btn btn-ghost">Close</button>
        <button
          class="flex btn btn-primary min-w-[150px]"
          @click.prevent="submit"
        >
          <span v-if="loading" class="loading loading-spinner"></span>
          <span>{{ loading ? "Submitting" : "Submit" }}</span>
        </button>
      </div>
    </form>
  </dialog>
</template>
<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, helpers } from "@vuelidate/validators";

const loading = ref(false);
const form = ref();
const formData = ref({
  title: undefined,
  content: undefined,
  category: undefined,
});

const rules = computed(() => {
  return {
    title: {
      required: helpers.withMessage("Title is required", required),
    },
    content: {
      required: helpers.withMessage("Content is required", required),
      minLength: minLength(6),
    },
    category: {
      required: helpers.withMessage("Category is required", required),
    },
  };
});

const client = useSupabaseClient<any>();
const user = useSupabaseUser();

const v$ = useVuelidate(rules, formData);

async function submit() {
  v$.value.$validate();
  if (!v$.value.$error) {
    try {
      loading.value = true;
      await $fetch("/api/note", {
        method: "POST",
        headers: useRequestHeaders(['cookie']),
        body: formData.value,
      });
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  }
}
</script>
