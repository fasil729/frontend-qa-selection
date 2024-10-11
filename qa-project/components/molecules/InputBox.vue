<!-- EmailInput.vue -->
<template>
  <div
    class="group relative mb-8 flex h-10 w-full rounded transition-all bg-white justify-center"
  >
    <div class="flex w-10 items-center justify-center text-xl">
      <Icon :icon-class="iconClass" />
    </div>

    <InputField
      maxlength="100"
      :placeholder="placeholder"
      customClass="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all"
      :type="inputType"
    />

    <!-- <div
      class="pointer-events-none absolute left-10 top-[0.65rem] origin-left text-sm text-black/50 transition-all scale-100"
    >
     {{ placeholder}}
    </div> -->
  </div>
</template>

<script setup>
import Icon from "~/components/atoms/Icon.vue";
import InputField from "~/components/atoms/InputField.vue";

const props = defineProps({
  iconType: { type: String, required: true },
  placeholder: { type: String, required: true },
  iconClass: { type: String, required: true },
  inputType: { type: String },
});
</script>
