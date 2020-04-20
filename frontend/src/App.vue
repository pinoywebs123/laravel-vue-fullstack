<template>
  <v-app>
    <v-app-bar
      app
     
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

       
      </div>

      <v-spacer></v-spacer>

     <v-card>
    <v-tabs
     v-if="this.$store.state.isAuth == false"
    >
      <v-tabs-slider ></v-tabs-slider>

      <v-tab>
       
        <router-link to="/login" >Login</router-link>
      </v-tab>
       <v-tab>
        
        <router-link to="/register" >Register</router-link>
      </v-tab>
    </v-tabs>

    <v-tabs v-if="this.$store.state.isAuth == true">
       <v-tab>
        <div class="my-2">
          <v-btn text small @click="postLogout()">Logout</v-btn>
        </div>
      </v-tab>
    </v-tabs>
  </v-card>
    </v-app-bar>

    <v-content>
     <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data: () => ({
    //
  }),
  methods: {
    postLogout(){
      axios.get('/auth/logout')
        .then(response => {
          console.log(response);
          if(response.status == 200){
            localStorage.removeItem("token");
            this.$router.push('/login');
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
