<template>

    <div class="HeroBlock hidden-md-only hidden-lg-only hidden-xl-only">
       <v-carousel hide-delimiters cycle>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      style="width:900px;height:auto; align:center;"
      justify="center"
    >
    <v-row class="fill-height title hidden-xs-only" align="center" justify="center">
      <div>{{ item.title }}</div>
    </v-row>
    </v-carousel-item>
  </v-carousel>
    </div>

</template>

<script>
  export default {
    name: 'Hero',

    data () {
      
      return {
        items: [
          {
            src: require("../assets/images/job1.jpeg"),
          },
          {
            src: require("../assets/images/job2.jpeg"),
          },
          {
            src: require("../assets/images/job3.jpeg"),
          },
          {
            src: require("../assets/images/job4.jpeg"),
          },
          {
            src: require("../assets/images/job5.jpeg"),
          },
          {
            src: require("../assets/images/job6.jpeg"),
          },
          {
            src: require("../assets/images/job7.jpeg"),
          },
        ],
      }
      
    }
  }
</script>

<style scoped>

 

</style>
