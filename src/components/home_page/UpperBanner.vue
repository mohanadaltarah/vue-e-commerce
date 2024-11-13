<template>
  <div class="upper-banner">
    <div class="parent">
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="content">
              <h3><span>Huge Saving</span> on UHD Televisions</h3>
              <p class="hint">Sale up to 70% off on selected items</p>
              <v-btn
                class="px-10 py-5"
                density="combact"
                style="border-radius: 30px; text-transform: none"
                variant="outlined"
                >Shop Now
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.upper-banner {
  .parent {
    margin: 0;
    height: 400px;
    background-image: url("../../assets/images/banner-bg.jpg");
    background-size: cover;
    background-position: left top;

    .content {
      color: white;
      padding: 40px 0 0 100px;
      max-width: 500px;

      h3 {
        font-size: 45px;
        font-weight: bold;

        span {
          color: aqua;
        }
      }

      .hint {
        margin: 20px 0;
        font-size: 16px;
      }
    }
  }
}
</style>
