<template>
    <div class="block galleryBlock">
        <v-container>
      <h2 class="text-center">
        Gallery
      </h2>
      <v-row>
    <v-col
      v-for="n in 9"
      :key="n"
      class="d-flex child-flex"
      cols="6"
      md="4"
    >
      <v-img
        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        aspect-ratio="1"
        class="grey lighten-2"
        contain
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
    </v-container>
    </div>
</template>

<script>
  export default {
    name: 'Gallery',

    data: () => ({
    
    }),
  }
</script>

<style scoped>
.block {
  padding: 60px 0;
  border-bottom: 1px solid darken($white, 10%);

  @media only screen and (max-width: 599px) {
    padding: 20px 0;
  }

  h2 {
    font-size: 30px;
    padding: 0 0 10px;
    margin: 0 0 40px;
    position: relative;

    @media only screen and (max-width: 599px) {
      font-size: 24px;
      padding: 0 0 5px;
      margin: 0 0 25px;
    }

    &:after {
      content: '';
      background: $black;
      width: 60px;
      height: 1px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);

      @media only screen and (max-width: 599px) {
        width: 30px;
      }
    }
  }
}

</style>
