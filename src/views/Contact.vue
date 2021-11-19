<template>
<v-content>
   <div class="staticHero">
       <v-img src="../assets/images/job1.jpeg" contain>
         <v-row align="end" class="lightbox white--text pa-2 fill-height">
           <v-col>
             <div class="headline">About Us</div>
           </v-col>
         </v-row>
       </v-img>
     </div>
            <v-container>
                  <div class="block">
                      <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                >
                        <v-text-field
                          v-model="name"
                          :counter="10"
                          :rules="nameRules"
                          label="Name"
                          required
                        ></v-text-field>

                          <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                          ></v-text-field>

                          <v-textarea
                            v-model="message"
                            :rules="messageRules"
                            label="Messages"
                            required
                              ></v-textarea>



                            <v-btn
                              :disabled="!valid"
                              color="success"
                              class="mr-4"
                              @click="validate"
                            >
                              Submit
                            </v-btn>

                            <v-btn
                              color="error"
                              class="mr-4"
                              @click="reset"
                            >
                              Reset
                            </v-btn>

                  </v-form>
              </div>
          </v-container>
 
     <div class="googlemaps">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d846582.0562560628!2d-118.97216157601562!3d34.019207978493746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1637269777247!5m2!1sen!2sus" width="100%" height="450" ></iframe>
     </div>
</v-content>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      message: '',
      messageRules: [
        v => !!v || 'Message is required',
        v => (v && v.length > 20) || 'Message must be less than 20 characters',
      ],
      select: null,
      
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>
