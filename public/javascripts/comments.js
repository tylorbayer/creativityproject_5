$(document).ready(function(){
  $("#postComment").click(function(){
      var myobj = {Name:$("#name").val()c};
      jobj = JSON.stringify(myobj);
      $("#json").text(jobj);

      var url = "comment";
      $.ajax({
      url:url,
      type: "POST",
      data: jobj,
      contentType: "application/json; charset=utf-8",
      success: function(data,textStatus) {
          $("#done").html(textStatus);
      }
    })
  });

  $("#getComments").click(function() {
    $.getJSON('comment', function(data) {
      console.log(data);
      var everything = '';
      for(var comment in data) {
        com = data[comment];
        everything += "<iframe src=" + com.Name + "></iframe><br>";
      }
      $("#our_comments").html(everything);
    })
  });

  $("#deleteComments").click(function() {
  console.log('delete buttom clicked');
  var url = "comment";
  $.ajax({
    url:url,
    type: "DELETE",
    success: function(data,textStatus) {
    }
  })
});
});
