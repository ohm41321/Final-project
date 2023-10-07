<template>
<div>
    <div class="grid-preview">
        <div class="text-preview">
            <h1 class="title-name-preview">Music Class</h1>
            <h4 class="datail-text-preview">"Unlock your musical potential with our Music Courses!"</h4>
        </div>
        <div class="pic-preview">
            <img class="pic-res" src="https://www.absoluteanime.com/k-on/yui.gif" width="500" height="600" style="object-fit: cover;" >
        </div>
    </div> 
    <hr>
    <div class="grid-preview">
        <div class="pic-preview">
            <img class="pic-res"  src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.15752-9/387573591_281091184886986_5366825815596742878_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEvDsw_CxUOw19m5DsxvMLu8hnZWqDbSo3yGdlaoNtKjdiriwaL8Pw4Qyj2KLcnrhjst0Ki9hoaiMao6SqPD7r5&_nc_ohc=QFjGFmCDGhcAX_KyRee&_nc_ht=scontent.fbkk12-1.fna&_nc_e2o=s&oh=03_AdSrbUnNpFadf41oZpptoLkW7O1cjv8FNdSbP4h9hW5cug&oe=65491AA9" width="550" height="500" style="object-fit: cover;">
        </div>
        <div class="text-preview">
            <h1 class="title-name-preview">Cooking Class</h1>
            <h4 class="datail-text-preview">"Discover the art of culinary delights with our Cooking Courses!"</h4>
        </div>
    </div>
    <hr>
    <div class="grid-preview">
        <div class="text-preview">
            <h1 class="title-name-preview">Drawing Class</h1>
            <h4 class="datail-text-preview">"Unleash your creativity with our Drawing Courses!"</h4>
        </div>
        <div class="pic-preview">
            <img class="pic-res"  src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.15752-9/385495616_874722520668934_8226374868961863044_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEwn67pszOyHwh4AfT2xDvp0aqJJYZvseTRqoklhm-x5OLFS7Hge0OctC-sWssKez44NMEHARCI2IyXN-6UgzUs&_nc_ohc=0XOqFfqx50YAX9Apsor&_nc_ht=scontent.fbkk12-1.fna&_nc_e2o=s&oh=03_AdTSFDmOeStJ_sy0ft5wnCKIiolKQ6-hc4_8bpgTJrJ6Mw&oe=6548FCBA" width="450" height="600" style="object-fit: cover;">
        </div>
    </div> <!-- https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4832572f-99af-4762-8892-010000fd8707/de1v51g-2ebeb7e7-0055-4972-9c31-c071d768b520.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ4MzI1NzJmLTk5YWYtNDc2Mi04ODkyLTAxMDAwMGZkODcwN1wvZGUxdjUxZy0yZWJlYjdlNy0wMDU1LTQ5NzItOWMzMS1jMDcxZDc2OGI1MjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IzPCeRvKlcxfHpizYEvkOyUZaZuygjYILizCm-9mLAw -->
    <hr>
    <div class="grid-preview">
        <div class="pic-preview">
            <img class="pic-res" src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.15752-9/387329606_708111248009036_3920970528619625927_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeElvxbui2J3fkzMKhDC6J1FWX-brOYqPuFZf5us5io-4ch2Z12atigcwUUSstWDVeL0LMBEAcMD1UrjUwKJiqZc&_nc_ohc=qjzi4IaH1GYAX8c5-wc&_nc_ht=scontent.fbkk12-1.fna&_nc_e2o=s&oh=03_AdQRUDfAXK0RQ_MSSaUDRyOhgy1KBbYryxqvvPPW6zyheg&oe=654914EE" width="500" height="500" style="object-fit: cover;">
        </div>
        <div class="text-preview">
            <h1 class="title-name-preview">Exercise Class</h1>
            <h4 class="datail-text-preview">"Get active and stay healthy with our Exercise Courses!"</h4>
        </div>
    </div>
    <hr>
</div> <br> <br>
</template>
<script setup>

</script>
<style>
.pic-res{
    transition: 1s;
}
.grid-preview{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    background-color: 0;
    transition: 1.5s;
    transform-origin: center;
}
.grid-preview:hover{
    transform: scale(1.15);
}
.text-preview{
    text-align: center;
    margin: auto;
}

@media screen and (max-width: 1300px) {
.column{
    grid-template-columns: repeat(1, 1fr);
  }
  .grid-preview:hover{
    transform: scale(1.1);
    }
}
@media screen and (max-width: 1000px) {
    .pic-res{
   object-fit: cover;
   width: 80%;
   height: 100%;
    }
    .title-name-preview{
    font-size: 1.5rem;
    }
    .datail-text-preview{
    font-size: 1rem;
    }
    .grid-preview:hover{
    transform: scale(1.05);
    }
}

@keyframes grid-anime{
    0%{
        transform: scale(1);
        animation: ease-out;
    }
    50%{
        transform: scale(1.15);
        animation: ease-in;
    }
    100%{
        transform: scale(1);
    }
}
</style>