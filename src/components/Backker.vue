<template app="true">
   <v-content >
<!-- --------------------------------  GIRL WITH TEXT---------------------------- -->
     <section >
       <!-- <v-container  class="white" grid-list-xl text-xs-center> -->
           <v-layout justify-center align-end pl-5 text-xs-center class="white" row>
             <v-flex class="black--text" xs4 >
                 <v-card-text   class="text-sm-left">
                   <h1 id="gwt">About Us</h1><br>
                   <hr color="#FFD740" width="175" size="7" /><br /> <br />
                   <p>
                     We are seasoned and talented team of IT consultants, infrastructure engineers, designers and developers who have helped our clients to grow their business and profits by adopting the right IT strategy and solutions.<br /> <br /><br> Our methods are simple and easy to work with.<br /> <br /><br>
                     <b>OUR VISION</b><br><br><br>
                     Our Vision is to empower small and medium business owners to take right technology decisions to grow their business.<br /> <br /><br>
                     <b>OUR MISSION</b><br><br><br>
                     Our Mission is to help 100 clients by end of 2018 to adopt the right technology to survive any market change. We like to partner with them to own their technology problems and innovate solutions for their business.
                     <br><br>
                   </p>
                 </v-card-text>
             </v-flex>
             <v-flex   xs6>
               <v-card  flat="true">
                 <v-card-media  src="/static/img/about.jpg" width="520px" height="750"></v-card-media>
               </v-card>
             </v-flex>
           </v-layout>
         <!-- </v-container> -->
  </section>
<!-- --------------------------------  OUR SERVICES  ---------------------------- -->
<section >
  <v-parallax  src="/static/img/parallax.jpg" height="950">
  <v-card-text  class="text-lg-left">
    <h1>OUR SERVICES</h1>
    <hr color="#FFD740" width="370" size="7" /><br /> <br />
  </v-card-text>
  <v-layout row wrap   justify-space-center >
<v-flex  md4 pa-5 v-for="card in cards" :key="card">
<v-card  class="black">
  <v-card-text >
    <v-icon size="40" color="amber accent-2">{{card.icon}}</v-icon>
<p>
  <br><b>{{card.title}}</b><br><br>{{card.text}}
    </p>
    </v-card-text>
    </v-card>
    </v-flex>
    </v-layout>
</v-parallax>
</section>
<!-- --------------------------------  DRIVE YOUR BUSINESS EFFICIENTLY  ---------------------------- -->
<section>
      <v-layout align-center justify-center class="white" row>
        <v-flex class="black--text" xs6 >
            <v-card-text  class="text-sm-left"><br><br><br>
              <h1 >DRIVE YOUR BUSINESS EFFICIENTLY</h1><br>
              <hr color="#FFD740" width="500" size="7" /><br /> <br />
              <p>
                Our ERP solution is an outcome of the efforts that has been put for the past 5 years. The first implementation of this solution was in Wellflow Gulf Trading WLL in Middle east and it proved its stable and robust version in 2015. Since then we are striving for more. We are a team with profound experience in the field of IT solutions and ERP implementations. Our technical and functional expertise made it possible to position a competitive product in market focusing on the shorter ERP implementation cycles.<br><br> DRIVE YOUR BUSINESS EFFICIENTLY<br><br>
                <b>COMPREHENSIVE</b><br><br>
                Integrated modules covering necessary business processes CRM, Sales, Manufacturing, Costing, Inventory, Quality, Purchase, Finance & Tax, HR & Payroll
                <br><br><b>ROBUST</b><br><br>
                Robust and Stable SASS based solution built on Microsoft .NET and Oracle MySQl
                <br><br><b>ON CLOUD</b><br><br>
                Scalable Cloud Solution with named user licenses.<br><br><br>
              </p>
            </v-card-text>
        </v-flex>
        <v-flex xs6  align-center>
          <v-card  flat="true">
            <v-card-media  src="/static/img/apton_erp.png" width="520px" height="520"></v-card-media>
          </v-card>
        </v-flex>
      </v-layout>
</section>
<!-- -------------------------------- OUR WORKS  ---------------------------- -->
<!-- <section> -->
  <!-- <v-container  grid-list-md text-xs-center>
    <v-layout class="white" row wrap >
<v-flex class="black--text" xs6>
      <v-card-text  class="text-sm-left">
        <h1>OUR WORKS</h1><br>
        <hr color="#FFD740" width="260" size="7" />
      </v-card-text>
    </v-flex>
      <v-flex xs6  align-center ><br>
        <v-btn flat >ALL</v-btn>
        <v-btn flat >CORPORATE</v-btn>
        <v-btn flat >RESTAURANT</v-btn>
        <v-btn flat >OTHERS</v-btn>
  </v-flex>
</v-layout>
</v-container> -->
<!-- </section> -->
</v-content >

</template>

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vuetify/dist/vuetify.js"></script>
<script>
export default{
   data () {
     return {
       cards:  [
         {
           icon:'fas fa-paint-brush',
           title: 'WEB DESIGNING',
           text:'Let your website not only look good but also bring you the business you need. We will help you to stand out.'
         },
         {
           icon:'fas fa-globe',
           title: 'ERP',
           text:'Do you have different softwares for your different processes? Consolidate everything and avoid delay in day-to-day activities.'
         },
         {
           icon:'fas fa-shopping-cart',
           title: 'WEB DESIGNING',
             text:'Go Online! Sell more to customers. Eighty percent of the web population has made a purchase online.'
         },
         {
           icon:'fas fa-code',
           title: 'WEB DESIGNING',
           text:'Custom business software is more scalable than off-the-shelf software packages. Wear a shirt which suits you.'
         },
         {
           icon:'fab fa-apple',
           title: 'WEB DESIGNING',
           text:'iOS users tend to stay with Apple and are more loyal. Start building your iOS app and discover loyal customers.'
         },
         {
           icon:'fab fa-android',
           title: 'WEB DESIGNING',
           text:'Android currently dominates market share at over 80%. Build your android app now and reach out to the millions.'
         }
       ]

     }
   }
 }
 </script>

<style>
p{
  font-size: 14pt;
}
h1 {
   font-size: 30pt;
  }
</style>
