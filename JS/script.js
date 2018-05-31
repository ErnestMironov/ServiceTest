$(function(){
  //2. Получить элемент, к которому необходимо добавить маску
  $("#phone").mask("8(999) 999-9999");
  $("#phone_footer").mask("8(999) 999-9999");
});


$('.rewievs__slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: '<i class="fas fa-angle-right slick-next"></i>',
  prevArrow: '<i class="fas fa-angle-left slick-prev"></i>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    }
  ]
});