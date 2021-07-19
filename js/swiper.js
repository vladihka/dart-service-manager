new Swiper('.item-slider', {
   autoplay: {
      //пауза между прокруткой
      delay: 1000,
      //закончить на последнем слайде
      stopLastSlide: true,
      //отключить после ручного переключения
      disableOnInteraction: false
   },
   //скорость
   speed: 1200,
   loop: true,
   pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
   },
   grabCursor: true,
   slidesPerView: 4,
   breakpoints: {
      280: {
         slidesPerView: 1,
      },
      480: {
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 3,
      },
      1100: {
         slidesPerView: 4,
      }
   },
});

new Swiper('.what-slider', {
   direction: 'vertical',
   autoplay: {
      //пауза между прокруткой
      delay: 1000,
      //закончить на последнем слайде
      stopLastSlide: true,
      //отключить после ручного переключения
      disableOnInteraction: false
   },
   mousewheel: {
      //чуствительность колеса мыши
      sensitivity: 1000,
      //класс обьекта на котором будет срабатывать прокрутка мыштю
      eventsTarget: ".what-slider",
   },
   //скорость
   speed: 1200,
   loop: true,
   pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
   },
   grabCursor: true,
   slidesPerView: 2,
   breakpoints: {
      280: {
         slidesPerView: 2,
      },
      480: {
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 2,
      },
      1100: {
         slidesPerView: 2,
      }
   },
});


new Swiper('.img-slider', {
   autoplay: {
      //пауза между прокруткой
      delay: 1000,
      //закончить на последнем слайде
      stopLastSlide: true,
      //отключить после ручного переключения
      disableOnInteraction: false
   },
   //скорость
   speed: 1200,
   loop: true,
   pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
   },
   grabCursor: true,
   slidesPerView: 4,
   breakpoints: {
      280: {
         slidesPerView: 1,
      },
      480: {
         slidesPerView: 1,
      },
      992: {
         slidesPerView: 1,
      },
      1100: {
         slidesPerView: 1,
      }
   },
});

