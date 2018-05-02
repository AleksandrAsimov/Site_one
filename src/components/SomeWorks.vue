  <template>
  <v-container id="someworks" grid-list-md text-xs-center>
    <v-layout class="white" row wrap >
<v-flex class="black--text" xs6>
      <v-card-text  class="text-sm-left">
        <h1>OUR WORKS</h1><br>
        <hr color="#FFD740" width="260" size="7" />
      </v-card-text>
    </v-flex>
      <v-flex xs6  align-center ><br>
        <v-btn flat @click="show1 = true; show2 = false; show3 = false; show4 = false" >ALL</v-btn>
        <v-btn flat @click="show1 = false; show2 = true; show3 = false; show4 = false" >CORPORATE</v-btn>
        <v-btn flat @click="show1 = false; show2 = false; show3 = true; show4 = false" >RESTAURANT</v-btn>
        <v-btn flat @click="show1 = false; show2 = false; show3 = false; show4 = true" >OTHERS</v-btn>
  </v-flex>
</v-layout>
    <v-layout row wrap>
      <v-flex v-show="show1" xs12 md3 v-for="(item,i) in items1" :key="i">
        <v-card flat>
          <img :src="item.src">
        </v-card>
      </v-flex>
    </v-layout>
     <v-layout row wrap>
      <v-flex v-show="show2" xs12 md3 v-for="(item,i) in items2" :key="i">
        <v-card flat>
          <img :src="item.src">
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex v-show="show3" xs12 md3 v-for="(item,i) in items3" :key="i">
        <v-card flat>
          <img :src="item.src">
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex v-show="show4" xs12 md3 v-for="(item,i) in items4" :key="i">
        <v-card flat>
          <img :src="item.src">
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default{
  data () {
    return {
      show1: true,show2: false,show3: false,show4: false,
      items1: [
        {
          src: '/static/img/works/orange.png'
        },
        {
          src: '/static/img/works/new_east.png'
        },
        {
          src: '/static/img/works/victory.png'
        },
        {
          src: '/static/img/works/phytoscience.png'
        },
        {
          src: '/static/img/works/nomnom.png'
        },
        {
          src: '/static/img/works/santacruzj.png'
        },
        {
          src: '/static/img/works/800thali.png'
        },
        {
          src: '/static/img/works/fruitmonsters.png'
        },
        {
          src: '/static/img/works/homemade.png'
        },
        {
          src: '/static/img/works/dongiovannis.png'
        },
        {
          src: '/static/img/works/first_source.png'
        },
        {
          src: '/static/img/works/royal_presentations.png'
        },
        {
          src: '/static/img/works/zaiyna.png'
        },
        {
          src: '/static/img/works/goldenviewproperties.png'
        }
      ],
        items2: [
          {
            src: '/static/img/works/orange.png'
          },
          {
            src: '/static/img/works/new_east.png'
          },
          {
            src: '/static/img/works/victory.png'
          },
          {
            src: '/static/img/works/phytoscience.png'
          }
        ],
          items3: [
          {
            src: '/static/img/works/nomnom.png'
          },
          {
            src: '/static/img/works/santacruzj.png'
          },
          {
            src: '/static/img/works/800thali.png'
          },
          {
            src: '/static/img/works/fruitmonsters.png'
          },
          {
            src: '/static/img/works/homemade.png'
          },
          {
            src: '/static/img/works/dongiovannis.png'
          }
        ],
        items4: [
          {
            src: '/static/img/works/first_source.png'
          },
          {
            src: '/static/img/works/royal_presentations.png'
          },
          {
            src: '/static/img/works/zaiyna.png'
          },
          {
            src: '/static/img/works/goldenviewproperties.png'
          }
        ]
    }
  }
  }
  </script>

  <style>
  </style>
