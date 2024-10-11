<!-- components/molecules/ButtonWithIcon.vue -->
<template>
  <Button
    class="relative flex items-center justify-center gap-1.5 pr-4 group shrink-0 cursor-pointer overflow-hidden rounded border px-3 py-2 text-sm leading-none transition-all hover:border-transparent active:scale-95"
  >
    <!-- Gradient background animation -->
    <div
      class="absolute inset-0 z-0 flex h-full w-full items-center justify-center"
    >
      <div
        class="gradient h-0 w-0 rounded-full transition-all duration-200 group-hover:h-full group-hover:w-full group-hover:rounded bg-gradient-to-r from-[#f97316] to-[#f59e0b]"
      ></div>
    </div>

    <!-- Icon and Text Content -->
    <div
      class="relative z-10 flex items-center justify-center gap-2 group-hover:text-black text-white"
    >
      <Icon :iconClass="iconClass" />
      <span>{{ text }}</span>
    </div>
  </Button>
</template>

<script setup>
import Button from "~/components/atoms/Button.vue";
import Icon from "~/components/atoms/Icon.vue";

const props = defineProps({
  iconClass: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    default: "Join Us",
  },
});
</script>

<style scoped>
/* Apply color transitions for hover states */
.group-hover\:text-black:hover {
  color: black;
}

/* Gradient background animation */
.gradient {
  background: linear-gradient(to right, #f97316, #f59e0b);
}
</style>
