
<template>
    <div>
      <RouterLink to="/">
      <button class="ui-btn">
  <span style="text-decoration: none;">
    Back
  </span>
  </button>
    </RouterLink>
        <h1 class="title-name-courseview">COURSE {{ course.name }}</h1>
    </div>
    <div class="contain">
      <h4>{{ course.detail }}</h4>
    </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

import { computed } from "vue";

import { useRoute } from "vue-router";
import { dataStore } from '../stores/data.js'

const route = useRoute();
const id = parseInt(route.params.id);

const course_store = dataStore()
const course_list = computed(() => course_store.courseList)

const course = computed(() => {
  return course_list.value.find(course_store => course_store.id === id);
});


</script>

<style>
.contain{
  margin: 30px 100px;
}
.title-name-courseview{
  text-align: center;
}
</style>