<template>
  <div
    v-if="showDeleteModal"
    class="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] md:w-[350px] w-[250px] px-6 py-6 bg-white flex flex-col rounded dark:bg-[#1d1f22] z-[9999]"
  >
    <p
      class="m-0 p-0 pb-[10px] font-sans font-normal font-bold:text-bold text-lg leading-6 text-black dark:text-white text-center"
    >
      Delete this document?
    </p>
    <p class="font-normal text-[14px] leading-6 text-[#7C8187] text-center">
      Are you sure you want to delete ‘welcome.md’ document and its contents?
      This action cannot be reversed.
    </p>
    <Cbutton
      class="md:px-[80px] px-[20px] mt-5 py-[10px] text-center mx-auto justify-center"
      @click="$emit('deleteObject')"
      >Confirm & Delete</Cbutton
    >
  </div>
</template>

<script setup>
import Cbutton from "./button.vue";
import { ref } from "vue";
const props = defineProps(["showDeleteModal", "toggleDeleteModal", "fileID"]);

function deleteObject() {
  let array = JSON.parse(localStorage.getItem("array"));
  array = array.filter((file) => file.Id != props.fileID);
  localStorage.setItem("array", JSON.stringify(array));
}
</script>
