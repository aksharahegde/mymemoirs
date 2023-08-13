<template>
  <div class="btm-nav lg:hidden">
    <nuxt-link :to="op.link" v-for="(op, index) in navOptions" :key="index">
      <Icon :name="op.icon" />
    </nuxt-link>
  </div>
</template>
<script setup>
const navOptions = [
  {
    label: "Overview",
    link: "/dashboard",
    icon: "material-symbols:home-rounded",
  },
  {
    label: "Todo",
    link: "/dashboard/todo",
    icon: "material-symbols:task-alt",
  },
  {
    label: "Challenge",
    link: "/dashboard/challenge",
    icon: "material-symbols:downhill-skiing-rounded",
  },
];
</script>
