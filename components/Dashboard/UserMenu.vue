<template>
  <div class="dropdown dropdown-hover dropdown-top dropdown-end">
    <label tabindex="0" class="flex items-center space-x-4">
      <!-- <Icon name="ic:twotone-account-circle" class="text-4xl"/> -->
      <div class="w-10 rounded-full">
        <img
          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        />
      </div>
      <span class="prose">Akshara Hegde</span>
    </label>
    <ul
      tabindex="0"
      class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36"
    >
      <li>
        <span class="justify-between" onclick="profileModel.showModal()">
          Profile
        </span>
      </li>
      <li>
        <span @click="signOut">Logout</span>
      </li>
    </ul>
    <!-- <DashboardProfile /> -->
  </div>
</template>
<script setup>
const supabase = useSupabaseClient();
const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) console.log(error);
};
</script>
