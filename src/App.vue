<template>
  <div  id="app">
    <!-- <img src="./assets/logo.png"> -->
    <ToolBar/>
    <Carousel/>
    <Backker/>
    <Footer/>
    <!-- <HelloWorld/> -->
    <router-view/>
      </div>

</template>

<script>
import Backker from '@/components/Backker.vue'
import HelloWorld from '@/components/HelloWorld'
import ToolBar from '@/components/ToolBar'
import Carousel from '@/components/Carousel.vue'
import Footer from '@/components/Footer.vue'
export default {
  components:
  {
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
