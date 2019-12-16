var attempt = 5; // Variable to count number of attempts.

// Below function Executes on click of login button.
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "ridwan" && password == "ridwan123"){
        document.getElementById("error").innerHTML = "Login successfully";
// alert ("Login successfully");
        window.location = "..\user\dashboard.html"; // Redirecting to other page.
        return false;
}
else{
    attempt --;// Decrementing by one.
    document.getElementById("error").innerHTML = "You have left "+ attempt +" attempt";
        // alert("You have left "+attempt+" attempt;");


// Disabling fields after 3 attempts.
if( attempt == 0){
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("submit").disabled = true;
    return false;
        }
    }
}