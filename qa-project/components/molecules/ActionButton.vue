<template>
  <div
    class="relative flex h-10 w-full items-center justify-center overflow-hidden rounded-md border-white/100 bg-black text-center text-sm pointer-events-none opacity-70 mb-6 border"
  >
    <div class="gradient absolute inset-0 opacity-50"></div>
    <!-- Using the Text atom and passing text as a prop -->
    <Text :text="text" class="text-white" />
  </div>
</template>

<script setup>
// Import the Text atom
import Text from "~/components/atoms/Text.vue";

// Accept the text as a prop
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.gradient {
  /* Example gradient styling */
  background: linear-gradient(
    90deg,
    rgba(255, 0, 150, 0.3),
    rgba(0, 150, 255, 0.3)
  );
}
</style>
