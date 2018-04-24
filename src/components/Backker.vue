<template>
  <v-app light>
   <v-toolbar class="white">
     <v-toolbar-title v-text="title"></v-toolbar-title>
   </v-toolbar>
   <v-content>
     <section>
       <v-parallax src="assets/background-with-umbrella.jpg" height="600">
         <v-layout
           column
           align-center
           justify-center
           class="white--text"
         >
           <img src="assets/vuetify.png" alt="Vuetify.js" height="200">
           <h1 class="white--text mb-2 display-1 text-xs-center">TEXT1</h1>
           <div class="subheading mb-3 text-xs-center">MOOOOOOOOOORE TEXT2</div>
           <v-btn
             class="blue lighten-2 mt-5"
             dark
             large
             href="/pre-made-themes"
           >
             SOME BUTT1
           </v-btn>
         </v-layout>
       </v-parallax>
     </section>
   </v-content>
 </v-app>
<script>
  export default{
   name: 'backker',
   data () {
     return {
       title: 'Your Logo'
     }
   }
 })
</script>
</template>
