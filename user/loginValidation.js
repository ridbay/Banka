// var attempt = 3; // Set the number of log in attempts.

// //function to execute when submit button is clicked.

// function validate(){
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     if(username == "ridwan" && password == "ridwan123"){
//         alert('Login successfully');
//         window.location = 'http://www.google.com.ng'; //redirect to the user dashboard.
//     return false;
//     } else{
//         attempt--; //Decrement by one
//         alert('You have '+ attempt + " left");
//         //Disable all fields after the third failed attempt.
//         if(attempt == 0){
//             document.getElementById('username').disabled = true;
//             document.getElementById('password').disabled = true;
//             document.getElementById('submit').disabled = true;
//             return false;
//         }
//     }
// }

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "ridwan" && password == "ridwan"){
alert ("Login successfully");
window.location = "success.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}