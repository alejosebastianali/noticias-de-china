window.onload=function(){
  $('.slider').slick({
  autoplay:false,
  autoplaySpeed:1500,
  arrows:true,
  prevArrow:'<button type="button" class="slick-prev"></button>',
  nextArrow:'<button type="button" class="slick-next"></button>',
  centerMode:true,
  slidesToShow:5,
  slidesToScroll:1
  });
};