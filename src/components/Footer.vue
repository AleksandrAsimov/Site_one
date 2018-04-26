<template>
  <v-footer height="auto" class="grey darken-4">
    <v-layout pt-5 row wrap justify-center>
      <v-flex pb-4  md12>
        <img width="150" src="/static/img/logo-normal.png"/>
      </v-flex md12>
      <v-flex pb-3 md12>
        <v-btn large  v-for="icon in icons" :key="icon" icon class=" white--text">
          <v-icon  size="25px">{{ icon }}</v-icon>
        </v-btn>
      </v-flex>
      <v-btn  color="white" flat v-for="link in links" :key="link">
      {{ link }}
          <!-- <table border="1px" width="1px" height="20px"></table> -->
      </v-btn>
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
    links: ['ABOUT US', 'OUR SERVICES', 'OUR WORKS', 'CONTACT US'],
    icons:  ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin']
  })
}
</script>
