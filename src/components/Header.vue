<template>
  <v-container>
    <v-toolbar flat dense>
      
      <router-link to="/"><v-toolbar-title class="heroBlock">Insulation & Roofing</v-toolbar-title></router-link>

      <v-spacer>  </v-spacer>
      <router-link to="/"><img src="../assets/logos/riosRoofManSliced.svg" height="60px" width="150px" padding-top="10px"  class="hidden-xs-only img" /></router-link>
      
       <v-spacer>  </v-spacer>


<v-toolbar-items class="hidden-xs-only">

  
      <v-btn text>
        <router-link to="/">Home </router-link>
      </v-btn>

      <v-btn text>
        <router-link to="/about">About </router-link>
      </v-btn>

      <!-- <v-btn text>
          <router-link to="/contact">Contact </router-link>
      </v-btn> -->
      <v-btn text >

     <a onclick="window.location.href='tel:6264899924';"><span class="mdi mdi-phone"></span> 626.489.9924</a> 

      </v-btn>
      </v-toolbar-items>


      <div class="hidden-sm-and-up"><v-menu offset-y>
      <template v-slot:activator="{ on }">
          <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
      </template>

      <v-list class="responsiveMenu">
        <v-list-item>
            <v-list-item-title><router-link to="/">Home </router-link></v-list-item-title>
            </v-list-item>
                    <v-list-item>
                    <v-list-item-title><router-link to="/about">About </router-link></v-list-item-title>
                    </v-list-item>
            <!-- <v-list-item>
            <v-list-item-title><router-link to="/contact">Contact </router-link></v-list-item-title>
          </v-list-item> -->

          <v-list-item>
            <v-list-item-title><a href="tel:6264899924" type="call"><span class="mdi mdi-phone"></span> 626.489.9924 </a></v-list-item-title>
          </v-list-item>


      </v-list>
    </v-menu></div>
    </v-toolbar>

  </v-container>

</template>

<script>



  export default {
    name: 'Header',

    data: () => ({
    
    }),
    methods: {
      
    }
  }
</script>

<style scoped>





</style>
