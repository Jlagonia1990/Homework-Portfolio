
$(document).ready(function() {
  $('.read-more').click(function(){
    $('#show-this-on-click').slideDown();
    $('.read-more').hide();
    $('.read-less').show();
    event.preventDefault();
  });
  $('.read-less').click(function(){
    $('#show-this-on-click').slideUp();
    $('.read-less').hide();
    $('.read-more').show();
    event.preventDefault();
  });
  $('.learn-more').click(function(){
    $('#learn-more-text').slideDown();
    $('.learn-more').hide();
    event.preventDefault();
  });
});