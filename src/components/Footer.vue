<template>
  <v-footer height="auto" class="grey darken-4">
    <v-layout pt-5 row wrap justify-center>
      <v-flex pb-4  md12>
        <img width="150" src="/static/img/logo-normal.png"/>
      </v-flex >
      <v-flex pb-3 md12>
        <v-btn large  v-for="icon in icons" :key="icon" icon class=" white--text">
          <v-icon  size="25px">{{ icon }}</v-icon>
        </v-btn>
      </v-flex >
      <v-btn class="white--text"  flat  @click="$vuetify.goTo(550, linear)"  >ABOUT US</v-btn>
      <v-btn class="white--text"  flat  @click="$vuetify.goTo(1310, linear)" to="/" flat >OUR SERVICES</v-btn>
      <v-btn class="white--text"  flat  @click="$vuetify.goTo(3050, linear)" to="/" flat >OUR WORKS</v-btn>
      <v-btn class="white--text"  flat to="/"  flat >CONTACT US</v-btn>
      <v-flex pt-5  xs12 py-3 text-xs-center white--text>
        &copy; 2018 COPYRIGHT RIGHT SOLUTIONS
      </v-flex>
      <v-flex >
        <img  height="400" src="/static/img/CPP.png"/>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin']
  })
}
</script>
