$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 300) {
      $('.header_head').slideDown(100);
    } else {
      $('.header_head').slideUp(100);
    }
  
  });
  