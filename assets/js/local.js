
$(window).scroll(function(){
    if ($(this).scrollTop() > 110) {
       $('.tab-fixed').addClass('sticky');
    } else {
       $('.tab-fixed').removeClass('sticky');
    }
});
$(document).ready(function(){
    $('#resetButton').click(function(){
      $('.star').removeClass("selected");
      $('.message').css('display', 'none');
  });
  });