<!-- <template>
  <section class="join-us-section" v-on:click="togglePopUp">
    <ButtonWithIcon
      iconClass="fa-solid fa-user-plus"
      iconColor="white"
      buttonText="Join Us"
      textClass="text-white"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      isPopUpVisible: false,
    };
  },
  methods: {
    togglePopUp: () => {
      this.isPopUpVisible.value = !this.isPopUpVisible.value;
    },
  },
};
</script> -->

<template>
  <section class="join-us-section" v-on:click="togglePopup">
    <ButtonWithIcon
      iconClass="fa-solid fa-user-plus"
      iconColor="white"
      buttonText="Join Us"
      textClass="text-white"
    />
  </section>
</template>

<script setup>
defineProps({
  togglePopup: Function, // Receiving the toggle function as a prop from parent
});
</script>
