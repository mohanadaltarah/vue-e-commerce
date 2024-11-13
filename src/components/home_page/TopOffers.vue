<script setup></script>

<template>
  <div class="offers bg-gray-lighten-4 pt-5">
    <v-container fluid>
      <v-row>
        <v-col class="pr-4" cols="4">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              style="overflow: hidden; height: 100%"
              v-bind="props"
            >
              <img
                :style="`width: 100%; height: 100%; cursor: pointer; transition: 0.5s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                } `"
                alt=""
                src="@/assets/images/playstations.webp"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col class="pr-4" cols="4">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              style="overflow: hidden; height: 100%"
              v-bind="props"
            >
              <img
                :style="`width: 100%; height: 100%; cursor: pointer; transition: 0.5s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                } `"
                alt=""
                src="@/assets/images/headset.webp"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col class="pr-4" cols="4">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              style="overflow: hidden; height: 100%"
              v-bind="props"
            >
              <img
                :style="`width: 100%; height: 100%; cursor: pointer; transition: 0.5s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                } `"
                alt=""
                src="@/assets/images/chairs.webp"
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
      <v-row class="mt-5">
        <v-col class="" cols="6">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent pr-2"
              style="overflow: hidden; height: 100%"
              v-bind="props"
            >
              <img
                :style="`width: 100%; height: 100%; cursor: pointer; transition: 0.5s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                } `"
                alt=""
                src="@/assets/images/iphones.webp"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col class="" cols="6">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent pl-2"
              style="overflow: hidden; height: 100%"
              v-bind="props"
            >
              <img
                :style="`width: 100%; height: 100%; cursor: pointer; transition: 0.5s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                } `"
                alt=""
                src="@/assets/images/laptops.webp"
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped></style>
