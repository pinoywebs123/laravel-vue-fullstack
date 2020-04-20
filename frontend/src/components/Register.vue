<template>
    <v-container>
       
        <v-card
            class="mx-auto"
            max-width="600"
        >
            <v-card-text>
            
            <p class="display-1 text--primary">
               Register Form
            </p>
           
            <div class="text--primary">
                <v-text-field label="Name" :rules="rules" ></v-text-field>
                <v-text-field label="Email" :rules="rules" hide-details="auto"></v-text-field>
                <v-text-field label="Password" :rules="rules" type="password"></v-text-field>
                <v-text-field label="Confirm Password" :rules="rules" type="password"></v-text-field>

            </div>
            </v-card-text>
            <v-card-actions>
             <div class="my-2">
                <v-btn depressed color="primary">SUBMIT</v-btn>
            </div>
            </v-card-actions>
        </v-card>
       
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    }),
  }
</script>
  