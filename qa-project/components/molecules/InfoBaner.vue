<!-- WelcomeMessage.vue (organism) -->
<template>
  <div
    class="relative flex h-32 justify-between overflow-hidden rounded border border-white/20 bg-black px-8 py-6 opacity-80 transition-all duration-300 mt-0 mb-6"
  >
    <div class="gradient absolute inset-0 opacity-[0.15]"></div>

    <!-- Main Content -->
    <div
      class="relative flex w-full justify-between transition-all duration-300 opacity-100"
    >
      <Image :src="imgSrc" customClass="h-20 w-20 object-cover" />

      <div>
        <!-- Welcome Text -->
        <Text
          :text="title"
          customClass="mb-2 text-base font-semibold text-white"
        />

        <!-- Sub Text -->
        <Text
          :text="contentText"
          customClass="text-white/70 whitespace-pre-wrap"
        />
      </div>
    </div>

    <!-- Spinner Icon (hidden initially) -->
    <div
      class="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0"
    ></div>
  </div>
</template>

<script setup>
import Image from "../atoms/Image.vue";
import Text from "../atoms/Text.vue";
const props = defineProps({
  title: { type: String, required: true },
  imgSrc: { type: String, default: "../../image.png" },
  contentText: { type: String, required: true },
  customClass: { type: String, default: "text-xl" },
});
</script>
