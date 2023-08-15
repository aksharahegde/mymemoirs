<template>
  <div class="dropdown dropdown-hover dropdown-bottom dropdown-end">
    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
      <Icon name="solar:palette-round-line-duotone" class="text-xl" />
    </label>
    <ul
      tabindex="0"
      class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36"
    >
      <li
        v-for="(theme, index) in themes"
        @click="selectTheme(theme.value)"
        :key="index"
      >
        <span class="capitalize">{{ theme.label }}</span>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { useStorage } from "@vueuse/core";

const themes = [
  { label: "lofi", value: "lofi" },
  { label: "forest", value: "forest" },
];


const selectTheme = (theme) => {
  const val = ['dark', 'forest'].includes(theme) ? 'forest' : 'lofi'
  document.documentElement.setAttribute("data-theme", val);
  useStorage("theme", theme);
};

onMounted(() => {
  const currentTheme = useStorage('theme')
  selectTheme(currentTheme?.value)
})
</script>
