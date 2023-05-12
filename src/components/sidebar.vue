<template :clasa="rootClasses">
  <div
    v-if="hamburgerOn"
    class="min-h-[850px] w-[250px] bg-[#1D1F22] py-[28px] px-[24px] relative dark:"
  >
    <img
      src="@/assets/images/MARKDOWN.svg"
      alt="logo of MArkdown"
      class="block md:hidden"
      width="130"
      height="18"
    />

    <h2
      class="text-[#7C8187] leading-4 text-[14px] font-medium font-roboto not-italic"
    >
      MY DOCUMENTS
    </h2>

    <Cbutton class="px-11 py-3 mt-8" @click="$emit('createNewFile')"
      >+ New Document</Cbutton
    >

    <ul v-for="(file, i) in filess" :key="i">
      <li class="mt-[10px] p-2 pl-2 flex">
        <img
          src="@/assets/images/File_logo.svg"
          alt=""
          width="13"
          height="16"
        />
        <button
          @click="$emit('display', file.Id)"
          class="bg-none border-none text-[#FFFFFF] font-[15px] pl-[15px]"
        >
          {{ file.name }}
        </button>
      </li>
    </ul>

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
    <div class="flex absolute bottom-[200px] w-[100px] justify-between">
      <img
        src="@/assets/images/Sun1.svg"
        alt=""
        class="w-[18px] h-[18px] mt-1"
      />
      <button @click="toggleDark">
        <img src="@/assets/images/darkmood.svg " alt="" class="h-6 w-12" />
      </button>
      <img
        src="@/assets/images/moon1.svg"
        alt=""
        class="w-[16px] h-[16px] mt-1"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from "vue";
// import func from "../../vue-temp/vue-editor-bridge";
import Cbutton from "./button.vue";
const darkon = ref(false);
const textareaValue = ref("");
const newDoc = ref("");
const props = defineProps(["hamburgerOn", "fileContent", "filess"]);
// const filess = [];
// filess.value = JSON.parse(localStorage.getItem("array"));

// watch: {
//   // filess.value = JSON.parse(localStorage.getItem("array"));
//   if (filess.value) {
//     window.location.reload();
//   }
// }

// defineEmits(["update:modelValue"]);

if (localStorage.getItem("darkmode")) {
  const darkonvalue = localStorage.getItem("darkmode");
  if (darkonvalue === "true") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

function toggleDark() {
  darkon.value = !darkon.value;
  localStorage.setItem("darkmode", darkon.value);
  const darkonvalue = localStorage.getItem("darkmode");
  console.log(typeof darkonvalue, "darkonvalue");

  if (darkonvalue === "true") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

// function display(id) {
//   filess.forEach((file) => {
//     if (file.Id == id) {
//       props.fileContent = file.content;
//       console.log("yaho");
//     }
//   });
//   // console.log(file.name);
// }
</script>
