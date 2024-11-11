<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click="openCart"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<style lang="scss" scoped></style>
<script setup>
import { inject } from "vue";

const Emitter = inject("Emitter");

const openCart = () => {
  Emitter.emit("openCart");
};
</script>
