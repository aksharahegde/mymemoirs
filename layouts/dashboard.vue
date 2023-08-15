<template>
  <main>
    <div class="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="p-2 mx-auto w-full drawer-content md:p-6">
        <NuxtPage />
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay" />
        <DashboardSidebar />
        <DashboardUserMenu/>
      </div>
    </div>
  </main>
</template>
