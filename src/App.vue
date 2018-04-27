<template>
  <div  id="app" >
    <!-- <img src="./assets/logo.png"> -->
    <ToolBar/>
    <Carousel/>
    <Backker/>
    <SomeWorks/>
    <ContactWithUs/>
    <Footer/>
    <!-- <HelloWorld/> -->
    <router-view/>
      </div>

</template>

<script>
import ContactWithUs from '@/components/ContactWithUs'
import SomeWorks from '@/components/SomeWorks'
import Backker from '@/components/Backker.vue'
import HelloWorld from '@/components/HelloWorld'
import ToolBar from '@/components/ToolBar'
import Carousel from '@/components/Carousel'
import Footer from '@/components/Footer'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faSpinner } from '@fortawesome/fontawesome-free-solid'
export default {
  components:
  {
    ContactWithUs,
    SomeWorks,
    Backker,
    HelloWorld,
    ToolBar,
    Carousel,
    Footer
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
