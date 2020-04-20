<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
          <h2 class="text-center">User List</h2>
          {{selected}}
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="desserts"
            :single-select="singleSelect"
            item-key="name"
            show-select
            class="elevation-1"
        >
            <template v-slot:top>
               
                <v-switch v-model="singleSelect" label="Single select" class="pa-3"></v-switch>
                <div class="my-2">
                    <v-btn depressed small color="error" @click="removeUser()">Delete</v-btn>
            </div>
            </template>
             
            </v-data-table>
                            
      </v-col>
     
    </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'HelloWorld',
data () {
      return {
        singleSelect: false,
        selected: [],
        headers: [
          {
            text: 'Name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Email', value: 'email' }
          
        ],
        desserts: [
          
        ],
      }
    },
    mounted() {
        this.getUserList();
    },
    methods: {
        getUserList() {
            axios.get('/user')
                .then(response => {
                    
                    this.desserts = response.data;
                })
                .catch(error => {
                    console.log(error);
                })
        },
        removeUser() {
           
            axios.post('/user/delete/',this.selected)
                .then(response => {
                    console.log(response.data);
                    if(response.status == 200) {
                        response.data.forEach((selectRemove) => {
                            const found = this.desserts.find(userListJson => userListJson.id = selectRemove.id);
                            this.desserts.splice(found, 1);
                        });
                        this.selected = [];
                    }
                    this.getUserList();
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
  }
</script>
