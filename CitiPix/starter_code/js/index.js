 //pseudo code:
$(document).ready(function() {

//click submit (update button) to get the background image
$('#submit-btn').click(function background(){

  //set variable to city, enter city name to receive image value
  var city = $('#city-type').val();
  console.log(city);

  var city = city.trim().toLowerCase();

  $('#city-type').val("");

  //display image when entering the city using if/else

  if ((city === 'new york') || (city === 'new york city') || (city === 'nyc')){
  $('body').attr('class','nyc');

  } else if ((city === 'san francisco') || (city === 'sf') || (city === 'bay area')){
  $('body').attr('class','sf');

  } else if ((city === 'los angeles') || (city === 'la') || (city === 'lax')){
  $('body').attr('class','la');

  } else if ((city === "austin") || (city === "atx" )){
  $('body').attr('class','austin');

  } else if ((city === "sydney") || (city === "syd" )){
  $('body').attr('class','sydney');

  }

  $('#city-type').change(cityPic);
//reset input so that the search bar automatically resets to "Enter a city name..."

});




  