<template>
  <div id="vue-editor-js"></div>
</template>
<script lang="ts" setup>
import EditorJS from "@editorjs/editorjs";
// @ts-ignore
import Header from "@editorjs/header";

let editor: EditorJS | null = null;
onMounted(() => {
  editor = new EditorJS({
    holder: "vue-editor-js",
    autofocus: true,
    tools: {
      header: {
        class: Header,
        config: {
          placeholder: "Enter a header",
          levels: [1, 2, 3, 4, 5, 6],
          defaultLevel: 3,
        },
      },
    },
  });
});

tryOnBeforeUnmount(() => {
  editor?.destroy()
})
</script>

<style lang="scss">
html[data-theme="forest"] {
  .ce-block--selected .ce-block__content,
  .ce-inline-toolbar,
  .codex-editor--narrow .ce-toolbox,
  .ce-conversion-toolbar,
  .ce-settings,
  .ce-settings__button,
  .ce-toolbar__settings-btn,
  .cdx-button,
  .ce-popover,
  .ce-toolbar__plus:hover {
    background: #071113;
    color: #fff;
  }

  .cdx-search-field {
    @apply bg-transparent;
  }

  .ce-conversion-tool__icon {
    @apply text-gray-300 bg-gray-800;
  }
  .ce-popover-item {
    .ce-popover-item__icon {
      @apply text-gray-300 bg-gray-800;
    }
    &:hover {
      @apply bg-gray-800;
      .ce-popover-item__title {
        @apply text-gray-300;
      }
    }
    .ce-popover-item__title {
      @apply text-white;
    }
  }

  .ce-inline-tool,
  .ce-conversion-toolbar__label,
  .ce-toolbox__button,
  .cdx-settings-button,
  .ce-toolbar__plus {
    color: inherit;
  }

  ::selection {
    @apply bg-slate-600;
  }

  .cdx-settings-button:hover,
  .ce-settings__button:hover,
  .ce-toolbox__button--active,
  .ce-toolbox__button:hover,
  .cdx-button:hover,
  .ce-inline-toolbar__dropdown:hover,
  .ce-inline-tool:hover,
  // .ce-popover__item:hover,
  .ce-toolbar__settings-btn:hover {
    @apply bg-base-300;
    color: #fff;
  }

  .cdx-notify--error {
    background: #fb5d5d !important;
  }

  .cdx-notify__cross::after,
  .cdx-notify__cross::before {
    background: white;
  }
}
</style>
