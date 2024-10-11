<template>
  <div class="flex justify-center bg-[#161616] bl w-full h-full p-3">
    <NuxtPage />
  </div>
</template>

<script>
import index from "./pages/index.vue";
export default {
  name: "App",
  components: { index },
};
</script>
