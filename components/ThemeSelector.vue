<template>
  <div class="dropdown dropdown-hover dropdown-bottom dropdown-end">
    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
      <Icon name="solar:palette-round-line-duotone" class="text-xl" />
    </label>
    <ul
      tabindex="0"
      class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
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
  { label: "acid", value: "acid" },
  { label: "bumblebee", value: "bumblebee"},
  { label: "lofi", value: "lofi"},
  { label: "forest", value: "forest" },
];
const selectTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  useStorage("theme", theme);
};
</script>
