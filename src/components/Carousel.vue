<template>
  <v-carousel>
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
          src: '/static/img/car1.jpg'
        },
        {
          src: '/static/img/car2.jpg'
        },
        {
          src: '/static/img/car3.jpg'
        },
        {
          src: '/static/img/car4.jpg'
        }
      ]
    }
  }
}
</script>
