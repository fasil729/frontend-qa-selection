<template>
  <div
    class="fixed inset-0 z-50 w-full flex items-center justify-center bg-black backdrop-blur-[5px] bg-opacity-50"
  >
    <div
      class="relative z-10 h-2/3 p-5 m-5 text-13 border rounded-lg popup-content bg-black"
    >
      <SocialLoginHeader />
      <SocialLoginBody />
      <TransitionState />
      <ActionButton text="Send Link" />
    </div>
  </div>
</template>

<script setup lang="js">
import SocialLoginHeader from '~/components/organisms/SocialLoginHeader.vue';
import SocialLoginBody from '~/components/organisms/SocialLoginBody.vue';
import TransitionState from '~/components/organisms/TransitionState.vue';
import ActionButton from '~/components/molecules/ActionButton.vue';
</script>
