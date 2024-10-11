<template>
  <div>
    <InfoBaner
      title="WellCome to Aladial"
      content-text="Create or access your
      account from here"
    />
    <Text text="Enter your email" class="mb-6 text-center text-white" />
    <InputBox
      icon-class="fa-envelope text-base text-black/70"
      placeholder="Email Address"
    />
    <ActionButton text="Enter" />
    <DividedWithText />
  </div>
</template>

<script setup>
import InputBox from "~/components/molecules/InputBox.vue";
import InfoBaner from "~/components/molecules/InfoBaner.vue";
import DividedWithText from "~/components/molecules/DividedWithText.vue";
import Text from "~/components/atoms/Text.vue";
import ActionButton from "../molecules/ActionButton.vue";
</script>
