<template>
  <div class="flash-deals">
    <v-container fluid>
      <v-row>
        <v-col v-for="item in products" :key="item.id" cols="4">
          {{ item.title }}
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { inject, onMounted } from "vue";

const products = inject("products");

onMounted(() => {
  console.log(products);
});
</script>

<style lang="scss" scoped></style>
