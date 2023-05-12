<!-- <template>
  <div class="bg-black">
    <button @click="createNewFile" class="text-white">
      Create New Markdown File
    </button>
    <div v-if="editing" class="min-w-[100vw]">
      <Content />
      <textarea v-model="fileContent" rows="10" cols="50"></textarea>
      <button @click="saveFile" class="text-white">Save File</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Content from "./content.vue";

export default {
  components: {
    Content,
  },
  setup() {
    const fileName = ref("");
    const fileContent = ref("");
    const editing = ref(false);

    const createNewFile = () => {
      fileName.value = `new_file_${Date.now()}.md`;
      fileContent.value = "";
      editing.value = true;
    };

    const saveFile = () => {
      const fileBlob = new Blob([fileContent.value], { type: "text/markdown" });
      const fileUrl = URL.createObjectURL(fileBlob);
      const downloadLink = document.createElement("a");
      downloadLink.href = fileUrl;
      downloadLink.download = fileName.value;
      downloadLink.click();

      //   editing.value = false;
    };

    return {
      fileName,
      fileContent,
      editing,
      createNewFile,
      saveFile,
    };
  },
};
</script> -->

<template>
  <input
    class="border-[red]"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
  ok
</template>

<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>
