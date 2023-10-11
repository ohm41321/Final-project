<template>
<div class="contain-keys">
        <h1 align="center">Verify Keys</h1>
        <h6 align="center">please Buy Keys before Verify</h6>
    <div class="content-items" v-for="(keyss, index) in keys_data" :key="index">
        <h4> 
        price: {{ keyss.name.price }} Baht.
        Expire in {{ keyss.name.day }} Days </h4>
        <h3>
        Your Keys is -  {{ keyss.name.keys_code }}
        </h3>
    </div> <br>
    <h1 align="center">
        Assess The Keys <input> &nbsp;
        <Button @click=" alert_store.submit_alert()">Submit</Button>
    </h1>
</div>
</template>
<script setup>
import '../assets/font.css'
import { alertStore } from '../stores/alert';
const alert_store = alertStore()
const keys_data = alert_store.keys_pages
</script>

<style>
*{
  font-family: 'IBM Plex Sans Thai', sans-serif;
}
.contain-keys{
    margin: 0 15rem;
    justify-content: center;
}
.content-items{
    text-align: center; 
    justify-content: center; 
    margin-top: 5rem;
}
</style>