<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
<div style="margin: 0px 0px; background-color:#212121;">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom" style="margin: 0px 25px;">
      <!--The Logo, Name on Header-->
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <img src="https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.15752-9/384199760_1015394396518496_1693242854705544577_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=0q9p23KnDwoAX-lGRxc&_nc_ht=scontent.fbkk13-1.fna&oh=03_AdROFy1M1RptMMbdctgWC12ndTLoeqVJU3jQAaUltZ4KMA&oe=653B4CE1" alt="" width="70" height="70"> &nbsp; &nbsp;
        <span class="fs-4" style="color: white;">Many Course</span>
      </a>
<!-- Button On Header Right Hand-->
<RouterLink to="/purchase">
    <button class="c-button c-button--gooey" > Buy Key 
      <div class="c-button__blobs">
      <div></div>
      <div></div>
      <div></div>
      </div>
    </button>
</RouterLink> 


<RouterLink to="/dev">
    <button class="c-button c-button--gooey" > Who Is Dev
      <div class="c-button__blobs">
      <div></div>
      <div></div>
      <div></div>
      </div>
    </button>
</RouterLink>     
    </header>
</div>
</template>

<!--Style of Header, Button-->
<style>
@media screen and (max-width: 550px) {
  .fs-4{
    margin-right: 200px;
  }
}
@media screen and (max-width: 445px) {
  .fs-4{
    margin-right: 100px;
  }
}

/*  */
.c-button {
  background-color: #212121;
  margin: 10px;
  color: #000;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  padding: 0.5em 1em;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  z-index: 1;
}

.c-button--gooey {
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 4px solid #ffae00;
  border-radius: 0;
  position: relative;
  transition: all 500ms ease;
}

.c-button--gooey .c-button__blobs {
  height: 100%;
  filter: url(#goo);
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  bottom: -3px;
  right: -1px;
  z-index: -1;
}

.c-button--gooey .c-button__blobs div {
  background-color: #ffae00;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  position: absolute;
  transform: scale(1.4) translateY(125%) translateZ(0);
  transition: all 600ms ease;
}

.c-button--gooey .c-button__blobs div:nth-child(1) {
  left: -5%;
}

.c-button--gooey .c-button__blobs div:nth-child(2) {
  left: 30%;
  transition-delay: 60ms;
}

.c-button--gooey .c-button__blobs div:nth-child(3) {
  left: 66%;
  transition-delay: 25ms;
}

.c-button--gooey:hover {
  color: #212121;
}

.c-button--gooey:hover .c-button__blobs div {
  transform: scale(1.4) translateY(0) translateZ(0);
}
/* */
.form-control-dark {
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  border-color: #000000;
  box-shadow: 0 0 0 .25rem rgba(255, 255, 255, .25);
}
.text-small {
  font-size: 85%;
}

.dropdown-toggle:not(:focus) {
  outline: 0;
}
</style>