$(document).ready(function() {
  $("#flipy").click(function() {
    $(".jumbotron").toggle();
  });
});
// Business logic
function pingpong(startPoint) {
  if ((startPoint % 3 === 0 && startPoint % 5 === 0)) {
    return ('pingpong');
  } else if (startPoint % 5 === 0) {
    return ('pong');
  } else if (startPoint % 3 === 0) {
    return ('ping');
  } else {
    return startPoint;
  }
}
//User Interface
$(document).ready(function() {
  $('#submit').click(function(event) {
    var userNumber = parseInt($('input#digit').val());
    event.preventDefault();
    $('ul.List').empty();
    for (var startPoint = 1; startPoint <= userNumber; startPoint += 1) {
      $('ul.List').append('<li>' + pingpong(startPoint) + '</li>');
    }
  });
});
