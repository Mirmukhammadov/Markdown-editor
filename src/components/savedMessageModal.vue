<template>
  <div
    v-if="showSavedMessageValue"
    class="fixed right-[2%] bottom-[3%] md:w-[350px] w-[250px] px-6 py-6 bg-[#95989d] flex flex-col rounded dark:bg-[#1d1f22] z-[9999]"
  >
    <p
      class="m-0 p-0 pb-[10px] font-sans font-normal font-bold:text-bold md:text-lg text-4 text-center leading-6 :text-black dark:text-white"
    >
      Your changes have been saved. You can download the file by clicking the
      link below.
    </p>

    <Cbutton
      class="md:px-[80px] px-[20px] md:mt-5 mt-2 md:py-[10px] py-[5px] text-center mx-auto justify-center bg-[#E46643] text-white"
      @click="$emit('downloadFile')"
      >Download the file</Cbutton
    >
  </div>
</template>

<script setup>
const props = defineProps(["showSavedMessageValue"]);
</script>
