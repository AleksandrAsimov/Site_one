<template>
  <v-toolbar extended="true" extension-height="15" app="true" color="grey darken-4" >
     <!-- <v-toolbar-side-icon>  </v-toolbar-side-icon> -->
    <!-- <v-spacer></v-spacer> -->
    <v-toolbar-items>
      <img src="@/assets/logo-normal.png"  width="118" height="40">
    </v-toolbar-items>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn color="white" flat>ABOUT US</v-btn>
      <v-btn color="white" flat>OUR SERVICES</v-btn>
      <v-btn color="white" flat>OUR WORKS</v-btn>
      <v-btn color="white" flat>CONTACT US</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn color="yellow">LET`S WORK TOOGETHER</v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'toolbar',
  data () {
    return {

    }
  }
}
</script>
