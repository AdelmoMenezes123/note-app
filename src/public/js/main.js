//Animação menu responsivo
$('.btn-menu, .btn-close').on('click', function () {
    $('.menu').slideToggle('slow');
  });
  
  $('nav ul li').click(function () {
    $('.menu').hide();
  });
  
  //Scroll menu
  $('nav a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
  
    $('html, body').animate(
        {
            scrollTop: targetOffset,
        },
        1000
    );
  });
  