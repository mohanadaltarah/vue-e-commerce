<template>
  <v-navigation-drawer v-model="drawer" location="right" temporary
    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque
    expedita labore molestiae omnis. Aliquid et ipsum modi natus nobis.
    Accusamus alias dolor inventore ipsam, iure nemo possimus voluptate
    voluptates.
  </v-navigation-drawer>
</template>

<script setup>
import { inject, onMounted, ref } from "vue";

const Emitter = inject("Emitter");

let drawer = ref(false);

onMounted(() => {
  Emitter.on("openCart", () => {
    drawer.value = true;
    console.log("event called");
  });
});
</script>

<style lang="scss" scoped></style>
