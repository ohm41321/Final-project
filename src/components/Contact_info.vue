<template>
    <h1 align="center" style="text-transform: uppercase;">contact us</h1> <hr class="line">
    <div class="field" v-for="s in 5">
        <div class="left-side">
            left
        </div>
        <div class="right-side">
            right
        </div>
    </div>
</template>
<script setup>
import '../assets/font.css'
</script>
<style>
.field{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    justify-content: space-between;
}
.left-side{
    text-align: center;
    max-width: 30rem;
    background-color: rgb(218, 205, 189);
    margin: 20px 0;
}
.right-side{
    text-align: center;
    margin-left: -10rem; 
    background-color: rgb(201, 169, 101);
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>