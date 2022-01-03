<template>

    <div class="HeroBlock hidden-md-only hidden-lg-only hidden-xl-only">
       <v-carousel hide-delimiters cycle height="500px">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      style="max-width: 100%; height:auto; align:center;"
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
            src: require("../assets/images/hero1.jpg"),
          },
          {
            src: require("../assets/images/hero2.jpg"),
          },
          {
            src: require("../assets/images/hero3.jpg"),
          },
          {
            src: require("../assets/images/hero4.jpg"),
          },
          {
            src: require("../assets/images/hero5.jpg"),
          },
          {
            src: require("../assets/images/hero6.jpg"),
          },
          {
            src: require("../assets/images/hero7.jpg"),
          },
          {
            src: require("../assets/images/hero8.jpg"),
          },
          {
            src: require("../assets/images/hero9.jpg"),
          },
        ],
      }
      
    }
  }
</script>

<style scoped>

 

</style>
