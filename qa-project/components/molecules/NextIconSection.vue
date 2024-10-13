<!-- components/organisms/NextIconSection.vue -->
<template>
  <div
    class="next-icon flex h-8 scale-100 cursor-pointer items-center justify-center gap-2 pb-4 transition-all active:scale-95"
  >
    <IconWithText :text="text" class="text-white" />
  </div>
</template>

<script setup>
import IconWithText from "@/components/molecules/IconWithText.vue";

const props = defineProps({
  text: {
    type: String,
    default: "Back to Log in",
  },
});
</script>
