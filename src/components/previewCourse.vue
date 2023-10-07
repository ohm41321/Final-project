<template>
    <div class="grid-preview">
        <div class="text-preview">
            <h1 class="title-name">Music Class</h1>
            <h4 class="datail-text">sample text</h4>
        </div>
        <div class="pic-preview">
            <img class="pic-res" src="https://www.absoluteanime.com/k-on/yui.gif" width="500" height="600" style="object-fit: cover;" >
        </div>
    </div>
    <div class="grid-preview">
        <div class="pic-preview">
            <img class="pic-res"  src="https://www.animegeek.com/wp-content/uploads/2019/06/Food-Wars-Season-4-to-be-the-final-season-based-on-announcement-from-Shokugeki-no-Soma-manga.jpg" width="600" height="500" style="object-fit: cover;">
        </div>
        <div class="text-preview">
            <h1>Cooking Class</h1>
            <h4>sample text</h4>
        </div>
    </div>
    <div class="grid-preview">
        <div class="text-preview">
            <h1>Drawing Class</h1>
            <h4>sample text</h4>
        </div>
        <div class="pic-preview">
            <img class="pic-res"  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4832572f-99af-4762-8892-010000fd8707/de1v51g-2ebeb7e7-0055-4972-9c31-c071d768b520.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ4MzI1NzJmLTk5YWYtNDc2Mi04ODkyLTAxMDAwMGZkODcwN1wvZGUxdjUxZy0yZWJlYjdlNy0wMDU1LTQ5NzItOWMzMS1jMDcxZDc2OGI1MjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IzPCeRvKlcxfHpizYEvkOyUZaZuygjYILizCm-9mLAw" width="500" height="500" style="object-fit: cover;">
        </div>
    </div>
    <div class="grid-preview">
        <div class="pic-preview">
            <img class="pic-res" src="https://i.pinimg.com/736x/5f/b6/d9/5fb6d9d3ec4417ac88ac1c84881f0af9.jpg" width="500" height="500" style="object-fit: cover;">
        </div>
        <div class="text-preview">
            <h1>Exercise Class</h1>
            <h4>sample text</h4>
        </div>
    </div>
</template>
<script setup>


</script>
<style>
.tital-name{

}
.detail-text{

}

.grid-preview{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    margin-bottom: 5rem;
}
.text-preview{
    text-align: center;
    margin: auto 0px;
}

@media screen and (max-width: 1300px) {
.column{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
}
@media screen and (max-width: 900px) {
.pic-res{
    object-fit: cover;
   width: 80%;
   height: 80%;
  }
 .tital-name{
    font-size: 1rem;
}
.detail-text{
    font-size: 1rem;
}
}
</style>