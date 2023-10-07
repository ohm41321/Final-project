<script setup>
import cardCourse from '@/views/cardCourse.vue'
import ShowCase from '@/components/ShowCase.vue'
import Carousel from '@/components/Carousel.vue'
</script>
<template>
    <Carousel/>
    <div class="container">
      <h1 align="center">Welcome</h1> <br>
      <h3 align="center" style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">sample text</h3>
      <ShowCase/>
      <div class="box">
      <cardCourse/> <br>
      </div>
      <!--<RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>-->
    </div>
    </template>
<style>
.bo{
  padding: 20px;
  justify-content: space-between;
}
</style>