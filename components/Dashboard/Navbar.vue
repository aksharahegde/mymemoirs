<template>
  <div class="shadow navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><NuxtLink to="/dashboard">Overview</NuxtLink></li>
          <li>
            <a>Todo</a>
          </li>
          <li><a>Challenge</a></li>
        </ul>
      </div>
      <Logo class="text-lg" />
    </div>
    <div class="hidden navbar-center lg:flex">
      <ul class="px-1 menu menu-horizontal">
        <li><NuxtLink to="/dashboard">Overview</NuxtLink></li>
        <li>
          <a>Todo</a>
        </li>
        <li><a>Challenge</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      <ThemeSelector />
      <DashboardUserMenu />
    </div>
  </div>
</template>
<style>
.router-link-exact-active {
    @apply font-bold text-red-400 bg-red-50;
}
</style>
