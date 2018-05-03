<template>
  <v-container   justify-center align-center><v-btn id="btn"  flat to="/" depressed>
    <v-dialog  flat v-model="dialog"   max-width="550">
             <v-layout  justify-center align-center class="white">
         <v-card flat  >
           <img src="/static/img/confirmp.png" height="400">
           <v-card-title  class="black--text"><h2>Your Message successfully sent</h2></v-card-title>
         </v-card>
         </v-layout>
       </v-dialog></v-btn>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      dialog: true
    }
  }
}
</script>

<style>
#btn{
  margin-left: 500px;
  margin-top: 400px;
}
</style>
