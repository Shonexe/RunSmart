
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

   //

   $('[data-modal=consultation]').on('click', function () {
      $('.overlay, #consultation').fadeIn('fast');
   });

   $('.modal__close').on('click', function () {
      $('.overlay , #consultation, #buy, #order').fadeOut('fast')
   });

   $('.button_small').on('click', function () {
      $('.overlay , #order').fadeIn('fast')
   });


   $('.button_small').each(function (i) {
      $(this).on('click', function () {
         $('#order  .modal__description').text($('.catalog__item-subtitle').eq(i).text());
         $('.overlay , #order').fadeIn('fast')
      })
   })


   function validateForms(form) {
      $(form).validate({
         rules: {
            name: {
               required: true,
               minlength: 2
            },
            phone: {
               required: true,
               minlength: 11
            },
            email: {
               required: true,
               minlength: 8,
               email: true
            }
         }
      });
   }

   validateForms('#consultation-form form');
   validateForms('#consultation form');
   validateForms('#order form');


   $('input[name=phone]').mask("+7 (999) 999-99-99");

   $('form').submit(function (e) {
      e.preventDefault();
      $.ajax({
         type: "POST",
         url: "mailer/smart.php",
         data: $(this).serialize()
      }).done(function () {
         $(this).find('input').val('');


         $('form').trigger('reset');
      })
      return false;
   });

   $(window).scroll(function () {
      if ($(this).scrollTop() > 1600) {
         $('.pageup').fadeIn();
      } else {
         $('.pageup').fadeOut();
      }
   });
   $("a[href^='#']").click(function () {
      const _href = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
      return false;
   });
});


