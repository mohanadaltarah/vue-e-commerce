<template>
  <div class="layout">
    <v-layout>
      <CardDrawer></CardDrawer>
      <AppNav></AppNav>
      <v-main>
        <slot></slot>
      </v-main>
      <AppFooter></AppFooter>
    </v-layout>
  </div>
</template>

<script setup>
import AppNav from "@/components/global/AppNav.vue";
import AppFooter from "@/components/global/AppFooter.vue";
import CardDrawer from "@/components/global/CardDrawer.vue";
</script>

<style lang="scss" scoped></style>
