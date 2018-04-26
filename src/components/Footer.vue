<template>
  <v-footer height="auto" class="grey darken-3">

    <v-layout row wrap justify-center>
      <v-flex md12>
        <img width="150" src="/static/img/logo-normal.png"/>
      </v-flex md12>
      <v-flex md12>
        <v-btn v-for="icon in icons" :key="icon" icon class=" white--text"
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-flex>
      <v-btn color="white" flat v-for="link in links" :key="link">
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
  data: () => ({
    links: ['ABOUT US', 'OUR SERVICES', 'OUR WORKS', 'CONTACT US'],
    icons: ['brush', 'brush', 'brush', 'brush']
  })
}
</script>
