var app = angular.module("visualearnEngine", []);
app.controller('myCtrl', function ($scope, $http) {
    $http.get("http://127.0.0.1:5000/").then(function(response) {

        // $("#UserField").click(function () {
        $scope.visualearnEngineData = response.data;
    });
});




$(document).ready(function () {
    $("#UserField").click(function() {
        getdata();
    });
});




// var update = setInterval(function () {
//     // posts Email
//     if (connection == true && checked == true) {
//         $.post("http://localhost:8080/mailsender", jsonUser);
//         checked = false;
//         console.log("Posted")
//     }


function getdata(){
    // $.ajax({
    //   xhrFields: { withCredentials: true },
    //   type: "GET",
    //   url: "http://127.0.0.1:5000/",
    //   dataType: "jsonp",
    //   success: function (data) {
    //       console.log(data);
    //   },
    //   error: function (error) {
    //       console.log("FAIL....=================");

    //   }}).done(function(data) {
    //   // data = JSON.parse(data);
    //   console.log("data");
    // });
}
