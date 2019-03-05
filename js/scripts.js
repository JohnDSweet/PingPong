$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var num = parseInt($("input#number").val());
    var result = pingpong(num);

    $(".result").text(result);

    $("#result").show();

    event.preventDefault();
  });
});
