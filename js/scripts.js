var pingpong = function(num) {

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
    $("ul#result").append("<li>" + result + "</li>");
  };
};

$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var num = parseInt($("input#number").val());
    pingpong(num);

    $("#result").show();

    event.preventDefault();
  });
});
