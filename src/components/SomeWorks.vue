  <template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 md3 v-for="(item,i) in items" :key="i">
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
      items: [
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
     ]
   }
 }
 }
 </script>
