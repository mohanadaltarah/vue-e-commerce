<template>
  <div class="layout">
    <v-layout>
      <v-navigation-drawer v-model="drawer" location="right" temporary
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque
        expedita labore molestiae omnis. Aliquid et ipsum modi natus nobis.
        Accusamus alias dolor inventore ipsam, iure nemo possimus voluptate
        voluptates.
      </v-navigation-drawer>
      <v-app-bar>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>
      <v-main>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          beatae consequatur cupiditate dolores exercitationem expedita hic
          itaque, maiores mollitia natus nemo, odit quae quia quibusdam repellat
          sed sint, voluptate voluptates.
        </p>
      </v-main>

      <v-footer :app="true">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
          aspernatur atque earum eligendi explicabo in laudantium magnam
          nesciunt placeat quo! Aspernatur eaque facilis, harum inventore
          perferendis soluta temporibus! Repellat, saepe.
        </p>
      </v-footer>
    </v-layout>
  </div>
</template>

<script setup>
import { ref } from "vue";

let drawer = ref(true);
</script>

<style lang="scss" scoped></style>
