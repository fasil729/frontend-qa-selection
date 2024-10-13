<template>
  <div
    class="fixed inset-0 z-50 h-full w-full flex items-center justify-center bg-black backdrop-blur-[5px] bg-opacity-50"
  >
    <div
      class="relative z-10 p-5 m-5 text-13 border flex flex-col gap-9 rounded-lg popup-content bg-black"
    >
      <div class="relative z-10 h-full p-5 text-13">
        <NextIconSection text="Password recovery" />
        <InfoBaner
          img-src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg"
          title="Add New Password"
          content-text="Your account uses
FaceBook sign-in add a new 
password"
          custom-class="border border-blue-700 p-5 m-5"
        />

        <Text
          text=" A recovery mail will be sent to this address. Be sure
that it is correct before submitting 
         "
          class="mb-8 text-center text-sm text-white/50 whitespace-pre-wrap"
        />
        <Text text="test@facebook.org" class="text-white text-center" />
        <TransitionState class="m-15" />

        <ActionButton
          @pointerup="navigateToResetPassword"
          text="Reset Password"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import InfoBaner from "~/components/molecules/InfoBaner.vue";
import Text from "~/components/atoms/Text.vue";
import TransitionState from "~/components/organisms/TransitionState.vue";
import ActionButton from "~/components/molecules/ActionButton.vue";
import NextIconSection from "~/components/molecules/NextIconSection.vue";
import { store } from "~/store/store";

const navigateToResetPassword = async () => {
  store.isUserLoggedIn = true;
  store.isRecoveryPage = false;
  store.isPasswordResetPage = true;
};
</script>
