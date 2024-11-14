<template>
  <div class="home"></div>
  <upper-banner></upper-banner>
  <top-features></top-features>
  <top-offers></top-offers>
  <flash-deals></flash-deals>
</template>

<script setup>
import UpperBanner from "@/components/home_page/UpperBanner.vue";
import TopFeatures from "@/components/home_page/TopFeatures.vue";
import TopOffers from "@/components/home_page/TopOffers.vue";
import { onMounted, provide, ref } from "vue";
import { useProductsModule } from "@/store/products";
import FlashDeals from "@/components/home_page/FlashDeals.vue";

const productsModule = useProductsModule();
const products = ref(productsModule.flashDeals);
console.log(products.value);
provide("products", products.value);

onMounted(async () => {
  await productsModule.getProducts();
});
</script>
