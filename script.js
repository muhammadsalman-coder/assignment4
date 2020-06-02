 var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
        // slideActiveClass:'swiper-slide-active',
        // slideNextClass:'swiper-slide-next',
        // slidePrevClass:'swiper-slide-prev',
        rotate: 20,
        stretch: 0,
        depth: 350,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },


    });
