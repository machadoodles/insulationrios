<template>
   <v-content>
     <div class="staticHero">
       <v-img src="../assets/images/job1.jpeg" contain>
         <v-row align="end" class="lightbox white--text pa-2 fill-height">
           <v-col  class="hidden-xs-only">
             <div class="headline">About Us</div> 
           </v-col>
         </v-row>
       </v-img>
     </div>
     <div class="block">
       <v-container>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien eget mi proin sed. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Arcu non sodales neque sodales ut etiam sit amet nisl. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Aliquet bibendum enim facilisis gravida. Quisque egestas diam in arcu. Massa tincidunt dui ut ornare lectus sit amet est placerat. Sed odio morbi quis commodo odio aenean sed adipiscing. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Fames ac turpis egestas integer eget aliquet. Enim ut tellus elementum sagittis vitae et. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Enim tortor at auctor urna. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Porttitor rhoncus dolor purus non enim praesent.
                  <br/>

                            <br/>

                            Ac turpis egestas sed tempus urna et pharetra pharetra massa. Dolor purus non enim praesent elementum facilisis leo vel fringilla. Vulputate dignissim suspendisse in est ante in nibh. Quam quisque id diam vel quam elementum. A diam maecenas sed enim ut sem viverra aliquet eget. Lorem sed risus ultricies tristique nulla aliquet enim. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Sem fringilla ut morbi tincidunt augue interdum velit. Pellentesque habitant morbi tristique senectus et netus et malesuada. Mauris commodo quis imperdiet massa tincidunt. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Vulputate enim nulla aliquet porttitor lacus luctus. Non pulvinar neque laoreet suspendisse. At in tellus integer feugiat scelerisque varius morbi enim.
                            <br />
                            <br/>

                  Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Nunc aliquet bibendum enim facilisis gravida neque. Commodo sed egestas egestas fringilla phasellus. Lacus viverra vitae congue eu. Nisl tincidunt eget nullam non nisi est sit. Pellentesque habitant morbi tristique senectus et netus et. Enim nulla aliquet porttitor lacus luctus accumsan. Interdum varius sit amet mattis vulputate enim nulla aliquet. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Et netus et malesuada fames ac turpis egestas sed. Mollis nunc sed id semper risus. Elementum nisi quis eleifend quam adipiscing vitae proin. Ridiculus mus mauris vitae ultricies. Lacus viverra vitae congue eu. Diam quis enim lobortis scelerisque fermentum dui faucibus in.</p>         
                        </v-container>
     </div>
        <div class="block">
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
      </div>
   </v-content>
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
