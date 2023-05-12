<template>
  <div
    :class="{
      'sm:w-[100%]': props.eyeon,
      'dark:bg-[#151619]': props.eyeon,
      'sm:w-[50%]': !props.eyeon,
      hidden: !props.eyeon,
    }"
    class="relative bg-[#fff] dark:bg-[#151619] sm:block w-[100%]"
  >
    <div class="bg-[#f5f5f5] flex relative dark:bg-[#1f1f22] z-10">
      <p
        class="p-[15px] text-[#7C8187] leading-4 text-[14px] font-medium font-roboto dark:text-[#C1C4CB]"
      >
        PREVIEW
      </p>

      <button
        class="absolute right-[30px] top-[15px] cursor-pointer"
        @click="$emit('eyeToggle')"
      >
        <img src="images/eyeon.svg" alt="" />
      </button>
    </div>
    <div
      class="p-5 pt-0 display h-screen w-[100%] scrollbar-hidden"
      :class="{ 'sm:ml-[200px]': props.eyeon }"
    >
      <slot name="markdown-content" :preview-content="previewContent"> </slot>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
const props = defineProps(["eyeon", "hamburgerOn"]);

function getData(e) {
  previewContent.value = e.target.innerHTML;
}
</script>
