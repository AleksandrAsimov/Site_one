<template app="true">
  <v-carousel >
    <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'carousel',
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
