
$(document).ready(function () {
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