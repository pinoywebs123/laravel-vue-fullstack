<template>
    <v-container>
       
        <v-card
            class="mx-auto"
            max-width="600"
        >
            <v-card-text>
            
            <p class="display-1 text--primary">
               Login Form {{this.$store.getters.isAuth}}
            </p>
           
            <div class="text--primary">
                <v-text-field label="Email" :rules="rules" hide-details="auto" v-model="userData.email"></v-text-field>
                <v-text-field label="Password" :rules="rules" type="password" v-model="userData.password"></v-text-field>
            </div>
            </v-card-text>
            <v-card-actions>
             <div class="my-2">
                <v-btn depressed color="primary" @click="getUserList()">SUBMIT</v-btn>
            </div>
            </v-card-actions>
        </v-card>
       
    </v-container> 
</template>

<script>
  import axios from 'axios';    
  export default {
    data: () => ({
      userData: {
           email: '',
           password: '',
      },
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    }),
    methods: {
        getUserList() {
            axios.post('/auth/login', this.userData)
                .then(response => {
                    console.log(response);
                    if(response.status == 200){
                      
                        this.$store.state.isAuth = true;
                        localStorage.setItem("token", JSON.stringify(response.data.access_token));
                        this.$router.push({path: '/'});
                    
                    }
                })
                .catch(error => {
                    console.log(error.response);
                })
        },
    }
  }
</script>
  