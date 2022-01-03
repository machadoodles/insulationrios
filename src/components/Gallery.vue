<template>
    <div class="block galleryBlock">
                <v-parallax class="hidden-xs-only hidden-sm-only"
                                height="600"
                                src="../assets/images/hero333.jpg"
                              >
                              <v-row
                                    align="center"
                                    justify="center"
                                  >
                                  
                                    <v-col
                                      class="text-center"
                                      cols="14"
                                    >
                                      <h1 class="text-h2 font-weight-thick mb-10">
                                        Welcome to Insulation & Roofing Rios
                                      </h1>
                                      <h4 class="text-h5 subheading">
                                        We'll help you with any insulation or roof work you may have
                                      </h4>
                                    </v-col>
                                  </v-row>
                              </v-parallax>
                            <v-container>
                            <h2 class="text-center">
                              Previous Work
                            </h2>
                            <v-row>
                                  <v-col
                                    v-for="picture in pictures"
                                    :key="picture"
                                    class="d-flex child-flex"
                                    cols="6"
                                    md="4"
                                    
                                  >
                            <v-img
                              :src="picture.src"
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

    data () {
      return {
        pictures: [
          {
            id: 1,
            src: require("../assets/images/job1.jpeg"),
          },
          {
            id: 2,
            src: require("../assets/images/job2.jpeg"),
          },
          {
            id: 3,
            src: require("../assets/images/job3.jpeg"),
          },
          {
            id: 4,
            src: require("../assets/images/job4.jpeg"),
          },
          {
            id: 5,
            src: require("../assets/images/job5.jpeg"),
          },
          {
            id: 6,
            src: require("../assets/images/job6.jpeg"),
          },
          {
            id: 7,
            src: require("../assets/images/job7.jpeg"),
          },
        ],
      }
    }
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
