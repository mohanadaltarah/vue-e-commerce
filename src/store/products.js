import { defineStore } from "pinia";
import axios from "axios";

export const useProductsModule = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => (this.flashDeals = res.data.products.slice(0, 8)))
        .catch((err) => console.log(err));
    },
  },
});
