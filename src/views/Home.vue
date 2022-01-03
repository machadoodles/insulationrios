<template>
  <v-main>
    <Hero />
      <Gallery />
      <!-- <LatestPost /> -->
      <!-- <Contact /> -->
        <div class="googlemaps">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d846582.0562560628!2d-118.97216157601562!3d34.019207978493746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1637269777247!5m2!1sen!2sus" width="100%" height="450" ></iframe>
        </div>
  </v-main>
</template>

<script>
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
// import LatestPost from '../components/LatestPost'
// import Contact from '../views/Contact'

  export default {
    name: 'Home',
    
    components: {
    Hero,
    Gallery,
    // Contact
    // LatestPost,
    },
    data () {
      return {
        items: [
        ],
      }
    }
  }
</script>
