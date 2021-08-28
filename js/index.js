
$(document).ready(function(){
        $('.about__slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: '.about__slider-nav',
        });
      
      $('.about__slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.about__slider-for',
        arrows: false,
        focusOnSelect: true,
      });

    $('.head__menu').click(function(){
      $('.header__menu').toggleClass('header__menu_open');
      $('.head__burger').toggleClass('header__burger_open');
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $(".header__menu"); // Элемент, клик по которому не должен приводить к закрытию. 
      if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) { // и не по его дочерним элементам
         $('.header__menu').removeClass('header__menu_open');
      }
    });

    $('.header__menu-close').click(function(e){
      e.preventDefault();

      $('.header__menu').removeClass('header__menu_open');
    });
});