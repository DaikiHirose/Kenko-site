'use strict';

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('header__menuButton').addEventListener('click', function() {
        this.classList.toggle('active');
        document.getElementById('nav').classList.toggle('active');
        document.getElementById('header__mask').classList.toggle('active');
    });
    document.getElementById('header__mask').addEventListener('click', function(){
        this.classList.remove('active');
        document.getElementById('nav').classList.remove('active');
        document.getElementById('header__menuButton').classList.remove('active');
    });
});


// if (document.querySelector(".swiper-container")) {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true, //ループさせる
      effect: "fade", //フェードのエフェクト
      autoplay: {
        delay: 4000, //４秒後に次の画像へ
        disableOnInteraction: false //ユーザー操作後に自動再生を再開する
      },
      speed: 2000, //２秒かけながら次の画像へ移動
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
//   }