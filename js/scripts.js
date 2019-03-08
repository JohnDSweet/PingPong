var pingpong = function(num) {
  $("#start").text("Here we go:");
  $("#start").fadeIn(1000);

  for (index = 1; index <= num; index++) {
    if (index % 15 === 0){
      result = "pingpong";
    } else if (index % 3 === 0){
      result = "ping";
    } else if (index % 5 === 0){
      result = "pong";
    } else {
      result = index;
    }
    $("ul#result").append("<li id=\"" + index + "\">" + result + "</li>");
  };
};

$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    $('#result').empty();

    var num = parseInt($("input#number").val());
    pingpong(num);

    $("#result").fadeIn(1000);

    event.preventDefault();
  });
});
