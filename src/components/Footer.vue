<template>
  <v-footer height="auto" class="grey darken-3">
    <v-layout row wrap justify-center>
      <v-btn
        color="white"
        flat
        v-for="link in links"
        :key="link"
      >
      {{ link }}
          <!-- <table border="1px" width="1px" height="20px"></table> -->
      </v-btn>
      <v-flex xs12 py-3 text-xs-center white--text>
        &copy; 2018 — <strong>Vuetify</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: 'footer',
  data: () => ({
    links: ['ABOUT US', 'OUR SERVICES', 'OUR WORKS', 'CONTACT US'],
    icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin']
  })
}
</script>
