<template>
  <ul class="p-4 w-80 h-[calc(100vh-60px)] bg-base-100 menu text-base-content">
    <li class="mb-2">
      <div class="flex justify-between">
        <Logo link="/dashboard" />
      </div>
    </li>
    <li v-for="(op, index) in navOptions" :key="index">
      <nuxt-link :to="op.link" class="text-base">
        <Icon :name="op.icon" class="text-xl" />
        <span>{{ op.label }}</span>
      </nuxt-link>
    </li>
  </ul>
</template>
<script setup>
const navOptions = [
  {
    label: "Overview",
    link: "/dashboard",
    icon: "solar:home-2-outline",
  },
  {
    label: "Notes",
    link: "/dashboard/notes",
    icon: "solar:pen-new-square-outline",
  },
  {
    label: "Challenge",
    link: "/dashboard/challenge",
    icon: "solar:target-outline",
  },
];
</script>
<style>
.router-link-exact-active {
  &:not(.logo) {
    @apply font-bold text-base bg-base-100;
  }
}
</style>
