<script setup>
import { onMounted } from "vue";

const emit = defineEmits(["click", "customMounted"]);

defineProps({
  title: {
    type: String,
    default: "button",
    required: true,
  },
});

const handler = () => {
  emit("click");
};

onMounted(() => {
  setTimeout(() => {
    emit("customMounted", {
      id: 1,
    });
  }, 2000);
});
</script>

<template>
  <button class="btn" @click="handler">{{ title }}</button>
</template>

<style scoped>
.btn {
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  background-color: #30a7d7;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.75em 1.25em 0.675em;
  max-width: 300px;
  cursor: pointer;
}
</style>
