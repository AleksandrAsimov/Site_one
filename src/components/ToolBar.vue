  <template>
  <v-toolbar height="60" color="black" app="true">
    <v-btn color="white" @click="$vuetify.goTo(0, linear)" flat ><v-icon color="white"  flat>fas fa-chevron-up</v-icon></v-btn>
    <v-toolbar-title class="white--text">Right Solution</v-toolbar-title>  <v-spacer></v-spacer>  <v-spacer></v-spacer>
    <v-btn color="white" @click="$vuetify.goTo(550, linear)" flat >ABOUT US</v-btn>
    <v-btn color="white" @click="$vuetify.goTo(1310, linear)" flat >OUR SERVICES</v-btn>
    <v-btn color="white" @click="$vuetify.goTo(3050, linear)" flat >OUR WORKS</v-btn>
    <v-btn color="white" @click="$vuetify.goTo(4050, linear)" flat >CONTACT US</v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">


      <v-btn small color="white" flat>LET`S WORK TOOGETHER?</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
  <!-- <v-toolbar extended="true" height="35" app="true" color="grey darken-4" >

<v-toolbar-title class="white--text"><img src="@/assets/logo-normal.png"  width="118" height="40"></v-toolbar-title>

      <v-btn color="white" flat>ABOUT US</v-btn>
      <v-btn color="white" flat>OUR SERVICES</v-btn>
      <v-btn color="white" flat>OUR WORKS</v-btn>
      <v-btn color="white" flat>CONTACT US</v-btn>


    <v-btn color="yellow">LET`S WORK TOOGETHER</v-btn>
  </v-toolbar>
</template> -->

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
