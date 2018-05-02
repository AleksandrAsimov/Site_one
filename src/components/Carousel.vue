<template>
<div id="carousel">
  <v-carousel  hide-controls hide-delimiters>
    <v-carousel-item  v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
  </v-carousel>
</div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: '/static/img/carousel1.jpeg'
        },
        {
          src: '/static/img/carousel2.jpg'
        },
        {
          src: '/static/img/carousel3.jpeg'
        }
      ]
    }
  }
}
</script>
<style>

</style>
