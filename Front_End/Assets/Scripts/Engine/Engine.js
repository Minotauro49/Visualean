
$(document).ready(function () {
  //https://www.quora.com/What-are-some-good-20-word-stories
  $("textarea").val("Finally reached 1000 friends on Facebook. As he closed his laptop at 2 am midnight, he felt the silence of the night echo the loneliness within him.");
    $("#search").click(function() {
      getdata();
    });
});

//https://stackoverflow.com/questions/48463807/sending-a-post-request-to-my-restful-apipython-flask-but-receiving-a-get-requ
function getdata(){
    $.ajax({
      type: "POST",
      url: "http://127.0.0.1:5000/visualiser",
      data: JSON.stringify({VisualiseData:$("textarea").val()}),
      contentType: "application/json;charset=UTF-8",
      success: function(result) {
        console.log("Successful Send!");
      }
    });
}