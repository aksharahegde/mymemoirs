<template>
  <div class="dropdown dropdown-hover dropdown-bottom dropdown-end">
    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <Icon name="ic:twotone-account-circle" class="text-4xl"/>
    </label>
    <ul
      tabindex="0"
      class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
    >
    <li>
        <span class="justify-between" onclick="profileModel.showModal()"> Profile </span>
      </li>
      <li>
        <span @click="signOut">Logout</span>
      </li>
    </ul>
    <DashboardProfile/>
  </div>
</template>
<script setup>
const supabase = useSupabaseClient();
const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) console.log(error);
};
</script>
