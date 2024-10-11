<template>
  <div>
    <div class="mb-8 flex w-full flex-col gap-4">
      <SocialButton
        iconSrc="../../google.png"
        altText="Google Icon"
        buttonText="Continue with Google"
      />
      <SocialButton
        iconSrc="../../facebook.png"
        altText="Facebook Icon"
        buttonText="Continue with Facebook"
      />
      <SocialButton
        iconSrc="../../appl.png"
        altText="Apple Icon"
        buttonText="Continue with Apple"
      />
    </div>
    <Text
      text=" Terms &amp; Conditions "
      class="cursor-pointer text-center text-white/40"
    />
  </div>
</template>

<script setup>
import Text from "../atoms/Text.vue";
import SocialButton from "../molecules/SocialButton.vue";
</script>
