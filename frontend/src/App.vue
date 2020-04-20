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
     
    >
      <v-tabs-slider ></v-tabs-slider>

      <v-tab>
       
        <router-link to="/login" >Login</router-link>
      </v-tab>
       <v-tab>
        
        <router-link to="/register" >Register</router-link>
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

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
