<template>
    <div class="contain-preview" v-for="(preview, index) in preview_data" :key="index">
        <div class="column">
            <div class="text">
                <h2>{{preview.name}}</h2>
                <h4 style="text-align: left;">{{ preview.who_study }}</h4>
            </div>
            <img class="sizeimg" src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/b6aa4ee1-a741-4b96-7da5-8b66cd534200/width=450/06999-3483462136-masterpiece,%20best%20quality,%20absurdres,%20portrait,%20_,%20Shirakami%20fubuki,%201girl,%20solo,%20fox%20ears,%20fox%20girl,%20white%20hair,%20aqua%20eyes,%20_d,.jpeg" width="500" height="500">
        </div>

           
    </div>
</template>
<script setup>

import { dataStore } from '../stores/data';
const data_store = dataStore()
const preview_data = data_store.courseList

</script>
<style>

.column{
    background-color: rgb(179, 179, 179); 
    padding: 50px;
    border-radius: 20px;
    display: flex;
}
.sizeimg{
    margin-left: 2rem;
}
.contain-preview{
    display: flex;
    margin: 5rem 0;
    text-align: center;
}
</style>