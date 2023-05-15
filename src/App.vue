<template>
  <div class="flex w-screen">
    <Sidebar
      :hamburgerOn="hamburgerOn"
      @createNewFile="createNewFile"
      :fileContent="fileContent"
      @display="display"
      :filess="filess"
    />

    <div
      class="main flex-1"
      :class="{
        'ml-auto': hamburgerOn,
        'md:mr-[-400px]': hamburgerOn,
        'mr-[-200px]': hamburgerOn,
      }"
    >
      <Header
        @toggle-hamburger="toggleHamburger"
        @toggleDeleteModal="toggleDeleteModal"
        @showSavedMessage="showSavedMessage"
        :hamburgerOn="hamburgerOn"
        :showDeleteModal="showDeleteModal"
      />
      <Content
        :hamburgerOn="hamburgerOn"
        :editing="editing"
        v-model="fileContent"
      />
    </div>

    <div
      :class="{ 'bg-[rgb(0,0,0,0.7)]': showDeleteModal }"
      v-if="showDeleteModal"
      @click="toggleDeleteModal"
      class="overlay fixed z-[9000] top-0 left-0 w-[100%] h-[100%]"
    ></div>
    <deleteModal
      :showDeleteModal="showDeleteModal"
      :fileID="fileID"
      @deleteObject="deleteObject"
    />
    <savedMessageModal
      :showSavedMessageValue="showSavedMessageValue"
      @downloadFile="downloadFile"
    />
  </div>
</template>

<script setup>
import Header from "./components/header.vue";
import Sidebar from "./components/sidebar.vue";
import Content from "./components/content.vue";
import deleteModal from "./components/deleteModal.vue";
import savedMessageModal from "./components/savedMessageModal.vue";

import { ref, computed } from "vue";
import * as Vue from "vue";

const hamburgerOn = ref(false);
const showDeleteModal = ref(false);
const showSavedMessageValue = ref(false);
const fileId = ref(0);
const fileContent = ref("");
const editing = ref(false);
const fileName = ref("");
const files = JSON.parse(localStorage.getItem("array")) || [];
const filess = ref(JSON.parse(localStorage.getItem("array"))) || [];
const fileID = ref(0);

function display(id) {
  JSON.parse(localStorage.getItem("array")).forEach((file) => {
    if (file.Id == id) {
      fileID.value = id;
      fileContent.value = file.content;
      editing.value = true;
    }
  });
}

function toggleHamburger() {
  hamburgerOn.value = !hamburgerOn.value;
}

function toggleDeleteModal() {
  showDeleteModal.value = !showDeleteModal.value;
}

const createNewFile = () => {
  fileName.value = `${Date.now()}.md`;
  fileContent.value = "";
  fileId.value = Date.now();
  const newFile = {
    name: fileName.value,
    content: fileContent.value,
    Id: fileId.value,
  };

  files.push(newFile);
  localStorage.setItem("array", JSON.stringify(files));
  filess.value = JSON.parse(localStorage.getItem("array"));

  Vue.set(filess.value, filess.value.length, newFile);

  return { fileName, fileContent };
};

function showSavedMessage() {
  showSavedMessageValue.value = true;

  setTimeout(() => {
    showSavedMessageValue.value = false;
  }, 3000);
  let indeX = 0;
  let matchingFile = {};
  const arr = JSON.parse(localStorage.getItem("array"));
  arr.find((file, index) => {
    if (file.Id === fileID.value) {
      matchingFile = file;
      indeX = index;
    }
  });

  if (matchingFile) {
    matchingFile.content = fileContent.value;
    arr.splice(indeX, 1, matchingFile);
    editing.value = true;
    localStorage.setItem("array", JSON.stringify(arr));
  }
}

const downloadFile = () => {
  const fileBlob = new Blob([fileContent.value], { type: "text/markdown" });
  const fileUrl = URL.createObjectURL(fileBlob);
  const downloadLink = document.createElement("a");
  downloadLink.href = fileUrl;
  downloadLink.download = fileName.value;
  downloadLink.click();
  editing.value = false;
};

function deleteObject() {
  let array = JSON.parse(localStorage.getItem("array"));
  array = array.filter((file) => file.Id != fileID.value);
  localStorage.setItem("array", JSON.stringify(array));
  showDeleteModal.value = false;
}
</script>
