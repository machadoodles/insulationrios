<template>
   <v-main>
     <div class="staticHero">
       <v-img src="../assets/images/hero7.jpg" contain max-width="1200" max-height="800" class="pa-md-4 mx-lg-auto">
         <v-row align="end" class="lightbox white--text pa-2 fill-height">
           <v-col  class="hidden-xs-only">
             <div class="headline" ><h1>About Us</h1></div> 
           </v-col>
         </v-row>
       </v-img>
     </div>
     <div class="block">
       <v-container>

         <!-- <a href="tel:(619)%20600-6812" class="hvr-bounce-to-bottom"><i class="fa fa-phone"></i>(619) 600-6812</a> -->
                 
    <v-container id="hideThis">
      <div class="row">
        <div class="col">
                  <h3 class="text-center">About Insulation & Roofing Rios</h3>
            <p style="text-align: justify;">Here at Insulation & Roofing Rios, we proudly focus on providing an elite home management and attic refurbishment service to our customers by way of our award-winning customer service, attention to detail, and years of professional expertise.
              <br />
              <br />
    Insulation & Roofing Rios understands the challenges that your busy professional life may induce on the upkeep and maintenance of your home. Unfortunately, innocent negligence of your attic may lead to structural damage to your home, which may increase your risk of exposure to potentially serious health hazards and may pose a threat to your home’s structural integrity. It is recommended to get attic inspection of your home during the planning phase of updating your home. </p>
        </div>
          <div class="col">
            
              <v-img max-height="380" max-width="580" src="https://theatticheroes.com/wp-content/uploads/2018/09/ABOUT-ATTIC.jpeg"></v-img>
          </div>
      </div>
      <div class="row">
              <div class="col">
              <v-img max-height="380" max-width="580" src="https://theatticheroes.com/wp-content/uploads/2018/10/NosoAbou.jpg"></v-img>
          </div>
        <div class="col">
                  <h3 class="text-center">Why you should choose Insulation & Roofing Rios</h3>
            <p style="text-align: justify;">With a staff of well-seasoned, experienced, and friendly attic specialists, Attic Heroes focuses on providing our customers with an efficient, quick, and incredibly satisfying customer experience. We tailor to your attic’s needs in the most cost-effective and thorough manner, as we believe that attention to detail is essential to the perfect customer experience. Don’t believe us? We would love to offer you a free in-depth the photo evaluation of you attic.</p>
        </div>

      </div>
    </v-container> 

        <v-container id="hideThisTwo">
                  <v-row no-gutters flat>
                  <v-col
                    cols="12"
                    sm="6"
                    md="8"
                  >
                    <v-card
                      class="pa-2"
                    >
                      <p style="text-align: justify;">Here at Insulation & Roofing Rios, we proudly focus on providing an elite home management and attic refurbishment service to our customers by way of our award-winning customer service, attention to detail, and years of professional expertise.
                        <br />
                        <br />
                    Insulation & Roofing Rios understands the challenges that your busy professional life may induce on the upkeep and maintenance of your home. Unfortunately, innocent negligence of your attic may lead to structural damage to your home, which may increase your risk of exposure to potentially serious health hazards and may pose a threat to your home’s structural integrity. It is recommended to get attic inspection of your home during the planning phase of updating your home. </p>
                          </v-card>
                  </v-col>
                  <v-col
                    cols="6"
                    md="4"
                  >
                    <v-card

                    >
                      <v-img max-height="380" max-width="570" src="https://theatticheroes.com/wp-content/uploads/2018/09/ABOUT-ATTIC.jpeg"></v-img>
                    </v-card>
                  </v-col>
                </v-row>

                  <v-row no-gutters>
                  <v-col
                    cols="12"
                    sm="6"
                    md="8"
                  >
                  <v-card
                      class="pa-2"
                    >
                      <v-img max-height="380" max-width="580" src="https://theatticheroes.com/wp-content/uploads/2018/10/NosoAbou.jpg"></v-img>
                    </v-card>
                    
                  </v-col>
                  <v-col
                    cols="6"
                    md="4"
                  >
                    
                    <v-card
                      class="pa-2"
                    >
                     <h3 class="text-center">Why you should choose Insulation & Roofing Rios</h3>
            <p style="text-align: justify;">
              With a staff of well-seasoned, experienced, and friendly attic specialists, Attic Heroes focuses on providing our customers with an efficient, quick, and incredibly satisfying customer experience. We tailor to your attic’s needs in the most cost-effective and thorough manner, as we believe that attention to detail is essential to the perfect customer experience. Don’t believe us? We would love to offer you a free in-depth the photo evaluation of you attic.
              
              </p>
         

                          </v-card>
                  </v-col>
                </v-row>  



    </v-container>

    

  </v-container> 
  
  </div>
        <!-- <div class="block">
                <v-container>
                    <h2 class="text-center">Our Team</h2>
                        <v-row>
                             <v-col v-for="item in items" :key="item.id" cols="12" sm="4">
                          <v-card
                              class="mx-auto text-center"
                                flat
                                    >
                                      <v-img
                                        class="white--text align-end"
                                        height="200px"
                                        :src="item.src"
                                      >
                                      </v-img>
                                      <v-card-text class="text--primary">
                                <div class="title">{{ item.name }}</div>

                                <p>{{ item.title }}</p>
                              </v-card-text>

                        </v-card>
                </v-col>
             </v-row>
         </v-container>
      </div> -->




   </v-main>

   
</template>

<script>
  export default {
    name: 'About',

    data () {
      
      return {
        items: [
          {
            id: 1,
      src:"https://media.vanityfair.com/photos/5ef25d9d184617200a49bac5/4:3/w_2999,h_2249,c_limit/M8DBATM_WB002.jpg",
            name: "Hombre Trabajo",
            title: "EL bueno"
          },
                    {
            id: 2,
      src:"https://media.vanityfair.com/photos/5ef25d9d184617200a49bac5/4:3/w_2999,h_2249,c_limit/M8DBATM_WB002.jpg",
            name: "Hombre Trabajo",
            title: "EL bueno"
          },
                    {
            id: 3,
      src:"https://media.vanityfair.com/photos/5ef25d9d184617200a49bac5/4:3/w_2999,h_2249,c_limit/M8DBATM_WB002.jpg",
            name: "Hombre Trabajo",
            title: "EL bueno"
          },
        ],
      }
    }
  }
  
</script>

<style scoped>
h1 {
  font-size: 4rem;
  color: white;
  background-color: black;
  border-radius: 15px;
  padding: 20px; 
}

@media screen and (min-width: 758px) and (max-width: 900px) {
  #hideThis {
    display: none;
  }
}

@media screen and (min-width: 899px) {
  #hideThisTwo {
    display: none;
  }
}

@media screen and (max-width: 758px) {
  #hideThisTwo {
    display: none;
  }
}

</style>
