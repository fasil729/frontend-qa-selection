<!-- <template>
  <div class="h-full">
    <LandingTemplate />
    <EmailFormTemplate v-show="isPopUpVisible" />
  </div>
</template>

<script setup>
import LandingTemplate from "~/templates/LandingTemplate.vue";

import EmailFormTemplate from "~/templates/EmailFormTemplate.vue";

</script>

<style scoped>
.popup-content {
  width: auto;
  height: auto;
  padding: 20px;
}
</style> -->

<template>
  <div class="h-full">
    <LandingTemplate />
    <join-us-section :toggle-popup="togglePopUp" />
    <EmailFormTemplate v-show="isPopUpVisible" />
    <!-- <SignUpForm /> -->
    <!-- <OtpPage /> -->
    <SocialLoginPage />
  </div>
</template>

<script setup>
import { ref } from "vue"; // For reactive state management
import LandingTemplate from "~/templates/LandingTemplate.vue";
import EmailFormTemplate from "~/templates/EmailFormTemplate.vue";
import JoinUsSection from "~/components/organisms/JoinUsSection.vue";

import SignUpForm from "~/templates/SignUpForm.vue";
import OtpPage from "~/templates/OtpPage.vue";
import SocialLoginPage from "~/templates/SocialLoginPage.vue";

// Reactive state for controlling popup visibility
const isPopUpVisible = ref(false);

// Toggle function to change the popup visibility
const togglePopUp = () => {
  isPopUpVisible.value = !isPopUpVisible.value;
};
</script>

<style scoped>
.popup-content {
  width: auto;
  height: auto;
  padding: 20px;
}
</style>
