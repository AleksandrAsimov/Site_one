<template>
  <div id="cnt">
    <v-toolbar height="60" color="black" app="true">
      <v-btn to="/" color="white" @click="$vuetify.goTo(0, linear)" flat ><v-icon color="white"  flat>fas fa-chevron-left</v-icon></v-btn>
      <v-toolbar-title class="white--text">Right Solution</v-toolbar-title>  <v-spacer></v-spacer>  <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-layout justify-center align-start pl-5 text-xs-center class="white" row wrap>
      <v-flex class="black--text" xs12 >
          <v-card-text   class="text-sm-left">
            <h1 >LET'S GET TOGETHER</h1><br>
            <hr color="#FFD740" width="450" size="7" /><br /> <br />
          </v-card-text>
      </v-flex>
      <v-flex  md6>
        <v-card-text class="text-sm-left" id="firstpar">
        We are good people and are easy to work with. <br>Share your requirements with us and get a free consultation.
        </v-card-text>
        <v-card-text class="text-sm-left" id="secondpar">
          ADDRESS<br>
          #1402, Level 14, Lathifa Tower, Sheikh Zayed Road<br>
          <br>
          PO BOX. 40375, Dubai, U.A.E<br>
          <br><br>
          GENERAL ENQUIRIES<br>
          info@rightsolutions.ae<br>
          <br><br>
          CALL US<br>
          Mobile: +971 55 282 5474<br>
        </v-card-text>
      </v-flex>
      <v-flex  md6>
        <v-card-text  id="thirdpar">
          +971 55 282 5474   |    info@rightsolutions.io
        </v-card-text>
        <v-form v-model="valid" ref="form" lazy-validation>
   <v-text-field  label="Name" v-model="name" :rules="nameRules" :counter="10" required></v-text-field>
   <v-text-field label="E-mail" v-model="email" :rules="emailRules" required></v-text-field>
   <v-select label="Item" v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" required></v-select>
   <v-checkbox label="Do you agree?" v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" required></v-checkbox>
   <v-btn   @click="submit" :disabled="!valid" > submit </v-btn>
   <v-btn @click="clear">clear</v-btn>
 </v-form>
      </v-flex>
    </v-layout>
      <v-footer height="auto" class="grey darken-4">
        <v-layout pt-5 row wrap justify-center>
          <v-flex pb-4  md12>
            <img width="150" src="/static/img/logo-normal.png"/>
          </v-flex >
          <v-flex pb-3 md12>
            <v-btn lrge  v-for="icon in icons" :key="icon" icon class=" white--text">
              <v-icon  size="25px">{{ icon }}</v-icon>
            </v-btn>
          </v-flex >
          <v-flex pt-5  xs12 py-3 text-xs-center white--text>
            &copy; 2018 COPYRIGHT RIGHT SOLUTIONS
          </v-flex>
          <v-flex >
            <img  height="400" src="/static/img/CPP.png"/>
          </v-flex>
        </v-layout>
      </v-footer>
  </div>
</template>

<script>
import axios from 'axios'
export default{
  data () {
    return {
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      select: null,
      items: ['Item 1', 'Item 2','Item 3','Item 4'],
      checkbox: false,
      icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin']
    }
  }
}
</script>

<style>
#cnt {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#firstpar{
  font-size: 25px;
  color: grey;
}
#secondpar{
  font-size: 14px;
  color: grey;
  padding-top: 100px;
  padding-bottom: 200px;
}
</style>
