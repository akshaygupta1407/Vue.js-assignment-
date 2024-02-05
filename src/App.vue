<template>
  <RouterView />
</template>
<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { RouterLink, RouterView } from "vue-router";
// const token = ref(localStorage.getItem("token"));
// const name = ref(localStorage.getItem("user"));

// const updateTokenFromStorage = () => {
//   token.value = localStorage.getItem("token");
//   name.value = localStorage.getItem("user");
//   console.log(token.value);
// };

// watch(token, (newtoken, oldtoken) => {
//   token.value = newtoken;
// });

// watchEffect();

// console.log("token:" + token.value);

// onMounted(() => {
//   window.addEventListener("storage", updateTokenFromStorage);
// });

// onUnmounted(() => {
//   window.removeEventListener("storage", updateTokenFromStorage);
// });

// const logout = () => {
//   localStorage.removeItem("token");
//   localStorage.removeItem("user");
//   token.value = null;
//   name.value = null;
// };
</script>
