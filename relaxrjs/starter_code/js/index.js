$(document).ready(function() {
	$(".readmore").hide();
	$("#show-this-on-click").click(slideDown);
	$(".readless hide").show();
	$("readless hide").hide();
	$("#show-this-on-click").click(slideUp);
	$(".readmore").show();
	$('.learnmore').hide();
	$("#learnmoretext").click(slideDown);


function readmore() {
  $('.readmore').hide();
  $('#show-this-on-click').slideDown();
  $('.readless hide').show();
}
function readless hide() {
  $('.readless hide').hide();
  $('#show-this-on-click').slideUp();
  $('.readmore').show();
}

function sidebarLearnMore() {
  $('.learnmore').hide();
  $('#learnmoretext').slideDown();
}
});

