<template>
  <v-toolbar color="black" extended="true" extension-height=25>
     <!-- <v-toolbar-side-icon>  </v-toolbar-side-icon> -->
    <!-- <v-spacer></v-spacer> -->
    <v-toolbar-items class="hidden-sm-and-down">
      <img src="@/assets/logo-normal.png"  width="120" height="43">
      <v-btn flat>ABOUT US</v-btn>
      <v-btn flat>OUR SERVICES</v-btn>
      <v-btn flat>OUR WORKS</v-btn>
      <v-btn flat>CONTACT US</v-btn>
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
