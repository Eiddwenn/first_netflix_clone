// SLIDER SINGOLO

$('.lazy').slick({
    dots: false,
    infinite: true,
    speed: 300,
    draggable: false,
    variableWidth: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10%',
    appendArrows: $('.lazy')
  });
  
  // SLIDER MULTI
  
  $(document).ready(function(){
    $('.carousel').slick({
      dots: false,
      infinite: true,
      speed: 300,
      draggable: false,
      variableWidth: true,
      slickCurrentSlide: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1450,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            dots: false
          },

          breakpoint: 890,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        }
      ]
    });
  });
