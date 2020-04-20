<template>
    <v-container>
      <h1>Book list</h1>
    </v-container> 
</template>

<script>
  import axios from 'axios';
  export default {
    data(){
      return {
        books : []
      }
    },
    mounted() {
      this.getBookList();
    },
    methods: {
      getBookList() {
            axios.get('/user/books')
                .then(response => {
                   console.log(response);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
  }
</script>

  