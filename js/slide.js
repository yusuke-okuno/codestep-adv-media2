$(function(){

  $(".slick-area").slick({
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '100px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '50px',
          slidesToShow: 1
        }
      }
    ]
  });
  
});