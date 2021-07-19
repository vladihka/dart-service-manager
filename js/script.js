$(document).ready(function () {
   $(".header__burger").click(function (event) {
      $(".header__burger, .header__menu").toggleClass('active');
      $("body").toggleClass('lock');
   });
});

$(document).ready(function () {
   $('.services__title').click(function (event) {
      if ($('.services').hasClass('one')) {
         $('.services__title').not($(this)).removeClass('active');
         $('.services__content').not($(this).next()).slideUp(300);
         $('.services__content').toggleClass('active');
         $('.services__item').toggleClass('active');
         $('.services__arrow').toggleClass('active');
      }
      $(this).toggleClass('active').next().slideToggle(300);
   });
});