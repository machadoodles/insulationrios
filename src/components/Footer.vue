<template>
    <v-container>
    <v-footer
    padless
    
  >
    <v-card
      flat
      tile
      class="lighten-1 white--text text-center"
    >
<v-spacer></v-spacer>

      <v-card-text class="pt-0">
Here at Insulation & Roofing Rios, we proudly focus on providing an elite home management and attic refurbishment service to our customers by way of our great customer service, attention to detail, and years of professional expertise.      </v-card-text>

      <v-divider></v-divider>

      <v-card-text>
        {{ new Date().getFullYear() }} — <strong>© Copyright - All Right Reserved ®<p>Website by Edgar Machado</p> </strong>
      </v-card-text>
      
    </v-card>
    
  </v-footer>
      </v-container>
  

</template>

<script>
  export default {
    name: 'Footer',

    data() {
      return {
        items: [         
        ]
      }
    }
  }
</script>


