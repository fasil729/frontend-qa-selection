<template>
  <div
    class="relative mb-4 flex h-10 w-full justify-between text-xl text-black"
  >
    <InputField
      maxlength="1"
      placeholder=""
      custom-class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90"
    />
    <InputField
      custom-class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90"
      placeholder=""
    />
    <InputField
      custom-class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90"
      placeholder=""
    />
    <InputField
      custom-class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90"
      placeholder=""
    />
    <InputField
      custom-class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90"
      placeholder=""
    />
    <InputField
      custom-class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90"
      placeholder=""
    />
  </div>
</template>

<script setup lang="js">
import InputField from '../atoms/InputField.vue';
</script>
