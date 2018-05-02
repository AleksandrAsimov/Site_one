<template>
  <div id="app">
  <ToolBar/>
  <Carousel/>
  <Backker/>
  <SomeWorks/>
  <ContactWithUs/>
  <Footer/>
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
  }
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
