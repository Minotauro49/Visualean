// Logout

var mainApp = {}

function action(){
    var firebase = app_fireBase;
    var uid = null;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        uid = user.uid;
      }else{
        uid = null;
        window.location.replace("login.html");
      }
    });



    function Logout(){
      firebase.auth().signOut();
    }

    mainApp.Logout = Logout;
};action();
