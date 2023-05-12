<template>
  <div class="h-[72px]">
    <div class="bg-[#2b2d31] flex justify-between flex-auto">
      <div class="flex relative">
        <button
          class="bg-[#35393F] py-[26px] px-[20px] hover:bg-[#E46643] ease-out duration-300"
          @click="toggleHamburger"
        >
          <img src="/images/hamburger.svg" alt="" />
        </button>
        <img
          src="/images/MARKDOWN.svg"
          alt="logo of MArkdown"
          class="md:my-7 md:ml-[24px] md:block hidden"
        />
        <span
          class="h-[1px] w-[40px] md:block bg-[#5A6069] text-[#5A6069] origin-center rotate-90 mt-9 ml-[30px] hidden"
        ></span>
      </div>

      <div class="flex">
        <img
          src="/images/Trash.svg"
          alt="logo of trash"
          class="w-5 h-5 my-[30px] mr-[20px] cursor-pointer"
          @click="$emit('toggleDeleteModal')"
        />
        <Cbutton
          class="relative rounded h-10 pl-[40px] pr-[10px] my-[20px] mr-[15px] text-[#fff] font-normal text-sm leading-4 not-italic font-roboto"
          @click="$emit('showSavedMessage')"
        >
          <img
            src="/images/save.svg"
            alt=""
            class="absolute w-[20px] h-[20px] left-[12px] right-0 top-[10px]"
          />

          Save Changes
        </Cbutton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";
import Cbutton from "./button.vue";

// import { useDark, useToggle } from "@vueuse/core";

// const isDark = useDark();
// const isToggle = useToggle(isDark);

const emits = defineEmits(["toggle-hamburger"]);
const props = defineProps(["hamburgerOn", "showDeleteModal"]);

function toggleHamburger() {
  emits("toggle-hamburger");
}
</script>
