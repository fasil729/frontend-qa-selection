<template>
  <div>
    <OtpField />
    <Text text="You didn't receive any email?" />
    <ActionButton text="Enter" />
  </div>
</template>

<script setup lang="js">
import OtpField from '../molecules/OtpField.vue';
import Text from '../atoms/Text.vue';
import ActionButton from '../molecules/ActionButton.vue';
</script>
