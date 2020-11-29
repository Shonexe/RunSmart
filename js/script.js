
$(document).ready(function () {
   $('.slider__items').slick({
      speed: 1300,
      adaptiveHeight: false,
      prevArrow: '<button type="button" class="slick-prev"><img src="../arrow/chevron-left-solid.png" alt="logo"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../arrow/chevron-right-solid.png" alt="logo"></button>',
      responsive: [
         {
            breakpoint: 600,
            settings: {
               prevArrow: false,
               nextArrow: false,
            }
         },
      ]
   });

   $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
      $(this)
         .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
         .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
   });



   // $('.catalog__item-link').each(function (i) {
   //    $(this).on('click', function (e) {
   //       e.preventDefault();
   //       $('.catolog-item__content').eq(i).toggleClass('catolog-item__content_active');
   //       $('.catolog-item__list').eq(i).toggleClass('catolog-item__list_active');
   //    })
   // })

   // $('.behaind').each(function (i) {
   //    $(this).on('click', function (e) {
   //       e.preventDefault();
   //       $('.catolog-item__content').eq(i).toggleClass('catolog-item__content_active');
   //       $('.catolog-item__list').eq(i).toggleClass('catolog-item__list_active');
   //    })
   // })

   function toggleSlide(item) {
      $(item).each(function (i) {
         $(this).on('click', function (e) {
            e.preventDefault();
            $('.catolog-item__content').eq(i).toggleClass('catolog-item__content_active');
            $('.catolog-item__list').eq(i).toggleClass('catolog-item__list_active');
         })
      });
   };


   toggleSlide('.catalog__item-link');
   toggleSlide('.behaind');
});


