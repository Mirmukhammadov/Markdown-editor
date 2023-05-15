<template>
  <div class="flex">
    <div
      class="sm:w-[50%] w-[100%] relative bg-[#fff] dark:bg-[#151619]"
      v-if="!eyeon"
      :class="{ hidden: props.eyeon }"
    >
      <div class="bg-[#f5f5f5] dark:bg-[#1f1f22]">
        <p
          class="p-[15px] text-[#7C8187] leading-4 text-[14px] font-medium font-roboto dark:text-[#C1C4CB]"
        >
          MARKDOWN
        </p>

        <button
          class="absolute right-[30px] top-[15px] cursor-pointer sm:hidden"
          @click="handleClick"
        >
          <img src="/images/eyeon.svg" alt="" />
        </button>
      </div>
      <!-- <div
        contenteditable="true"
        class="outline-none p-5 text-[#35393F] leading-6 text-[14px] font-normal max-h[calc(100vh - 80px)] overflow-y-auto dark:text-[#C1C4CB]"
        style="font-family: 'Arial', sans-serif; font-size: 16px"
        @input="getData"
      >
        <textarea
          class="outline-none focus:outline-none resize-none h-screen w-[100%] bg-[#fff] dark:bg-[#151619]"
          name=""
          id=""
          v-model="content"
        ></textarea>
      </div> -->

      <div
        v-if="editing"
        contenteditable="true"
        class="outline-none p-5 text-[#35393F] leading-6 text-[14px] font-normal max-h[calc(100vh - 80px)] overflow-y-auto dark:text-[#C1C4CB]"
        style="font-family: 'Arial', sans-serif; font-size: 16px"
        @input="getData"
      >
        <textarea
          class="outline-none focus:outline-none resize-none h-screen w-[100%] bg-[#fff] dark:bg-[#151619] dark:text-[#fff] text-[#35393F] font-weight: font-normal size-[14px] leading-6"
          name=""
          id=""
          :value="modelValue"
          @input="updateModelValue"
        ></textarea>
      </div>

      <div v-if="!editing">
        <span class="text-[12px] pl-[10px] text-[#fff]"
          >create document or select created one)) go</span
        >
      </div>

      <!-- <div v-if="editing">
      {{ newDoc }}
      <textarea
        name=""
        id=""
        cols="30"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        rows="10"
      ></textarea>
      <button class="text-white" @click="saveFile"></button>
    </div> -->

      <span
        class="absolute bg-[#E4E4E4] w-[1px] min-h-[100%] top-0 right-[0%] dark:bg-[#5A6069]"
      ></span>
    </div>
    <Preview @eyeToggle="handleClick" :eyeon="eyeon" :hamburgerOn="hamburgerOn">
      <template v-slot:markdown-content>
        <span
          class="markdown-content"
          :class="{ 'left-[80%]': hamburgerOn }"
          v-html="previewContent"
        ></span>
      </template>
    </Preview>
  </div>
</template>

<script setup>
import Preview from "./preview.vue";
import { ref, computed, defineProps, defineEmits } from "vue";
import { marked } from "marked";

const eyeon = ref(false);
const previewContent = ref("");
const props = defineProps(["hamburgerOn", "modelValue", "editing"]);

const handleClick = () => {
  eyeon.value = !eyeon.value;
};

const emits = defineEmits(["update:modelValue"]);
function updateModelValue(event) {
  previewContent.value = marked.parse(event.target.value);
  emits("update:modelValue", event.target.value);
}
</script>
