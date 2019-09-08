//slick slider 
const slider = $(".full-slide");
slider
  .slick({
    centerMode: true,
  centerPadding: '0',
  slidesToShow: 3,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    },
  ]
});

//slider scroll
slider.on('wheel', (function(e) {

  e.preventDefault();

  if (e.originalEvent.deltaY < 0) {
    $(this).slick('slickPrev');
  } else {
    $(this).slick('slickNext');
  }
  
}));