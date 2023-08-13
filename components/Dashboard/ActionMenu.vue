<template>
  <div class="dropdown dropdown-top dropdown-end">
    <label tabindex="0" class="m-1 btn btn-circle">
      <Icon name="mdi:plus-thick" />
    </label>
    <ul
      tabindex="0"
      class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36"
    >
      <li>
        <div class="flex" onclick="addNote.showModal()">
          <Icon name="mdi:checkbox-marked-circle-plus-outline" />
          <span>Task</span>
        </div>
      </li>
      <li>
        <div class="flex" onclick="addNote.showModal()">
          <Icon name="mdi:shield-plus-outline" />
          <span>Challenge</span>
        </div>
      </li>
    </ul>
  </div>
</template>
