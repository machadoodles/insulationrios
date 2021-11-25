<template>

    <div class="block galleryBlock">
        <v-container>
            <h2 class="text-center">
              Latest Jobs
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

                <!-- <v-card-actions>
                  <v-btn
                    color="primary"
                    text
                  >
                    More
                  </v-btn>

                </v-card-actions> -->
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
            title: "Insulation",
            subtitle: "Professional Work",
            src: require("../assets/images/job1.jpeg")
          },
          {
            id: 2,
            title: "Insulation",
            subtitle: "Professional Work",
            src: require("../assets/images/job2.jpeg"),
          },
          {
            id: 3,
            title: "Insulation",
            subtitle: "Professional Work",
            src: require("../assets/images/job5.jpeg")
          }          
        ]
      }
    }
  }
</script>


