<!-- DividerWithText.vue -->
<template>
  <div>
    <div class="mb-6 flex w-full items-center justify-between gap-1">
      <!-- Left Decorative Line -->
      <DecorativeLine
        customClass="h-[1px] w-40 bg-gradient-to-r from-white/0 to-white"
      />

      <!-- Text in the middle -->
      <Text text="Or" customClass="text-white" />

      <!-- Right Decorative Line -->
      <DecorativeLine
        customClass="h-[1px] w-40 bg-gradient-to-r from-white to-white/0"
      />
    </div>
  </div>
</template>

<script setup>
import DecorativeLine from "~/components/atoms/DecorativeLine.vue";
import Text from "~/components/atoms/Text.vue";
</script>
