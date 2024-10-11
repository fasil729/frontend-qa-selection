<template>
  <div
    class="fixed inset-0 z-50 h-[40rem] w-[26rem] flex items-center justify-center bg-black backdrop-blur-[5px] bg-opacity-50"
  >
    <div
      class="relative z-10 h-2/3 p-5 m-5 text-13 border rounded-lg popup-content bg-black"
    >
      <div class="flex flex-col items-center px-6 pt-8">
        <OtpHeader />
        <OtpBody />
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import OtpHeader from '~/components/organisms/OtpHeader.vue';
import OtpBody from '~/components/organisms/OtpBody.vue';
</script>
