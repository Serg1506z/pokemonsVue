<script setup>
const emit = defineEmits(["click"]);

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
</script>

<template>
  <button class="btn" @click="handler">{{ title }}</button>
</template>

<style scoped>
.btn {
  margin: 0 auto;
  background-color: #30a7d7;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.75em 1.25em 0.675em;
  max-width: 300px;
}
</style>
