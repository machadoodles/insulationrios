<template>

    <div class="block galleryBlock">
        <v-container>
            <h2 class="text-center">
              Latest Post
            </h2>
            <v-row>
                <v-col cols="12" md="4" v-for="item in items" :key="item.id">
                  <v-card outlined
                class="mx-auto"
              >
                <v-img
                  class="white--text align-end"
                  height="200px"
                  :src="item.src"
                >
                  <v-card-title> 
                    {{ item.title }}
                    </v-card-title>
                </v-img>

                <v-card-subtitle class="pb-0">
                  {{ item.subtitle }} 
                </v-card-subtitle>

                <v-card-text class="text--primary">
                  <div></div>
                </v-card-text>

                <v-card-actions>
                  <v-btn
                    color="primary"
                    text
                  >
                    More
                  </v-btn>

                </v-card-actions>
                  </v-card>
                </v-col>
            </v-row>
      </v-container>
    </div>

</template>

<script>
  export default {
    name: 'LatestPost',

    data() {
      return {
        items: [
          {
            id: 1,
            title: "Hong Kong",
            subtitle: "NOT CHINA",
            description: "View from Victoria Peak looking west",
            src: require("../assets/images/HongKong.jpg")
          },
          {
            id: 2,
            title: "CDMX Pyramids",
            subtitle: "Piramides de CDMX",
            description: "Son piramides",
            src: require("../assets/images/CDMXpyramidd.jpg")
          },
          {
            id: 3,
            title: "SD Drone Shot",
            subtitle: "Taken from 150 ft",
            description: "DJI drone shot from Golden Hill Park",
            src: require("../assets/images/SanDiegoDrone.jpg")
          }          
        ]
      }
    }
  }
</script>


