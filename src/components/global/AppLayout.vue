<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CardDrawer></CardDrawer>
      <AppNav></AppNav>
      <FixedNav />
      <v-main style="padding-top: 150px">
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
import FixedNav from "@/components/global/FixedNav.vue";
</script>

<style lang="scss" scoped></style>
