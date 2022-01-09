function validate() {
  var uname = document.getElementById("uname").value;

  var password = document.getElementById("password").value;

  if (uname === "") {
    document.getElementById("div1").innerHTML = "Enter a value";
    document.getElementById("div1").style.color = "Red";
  } else {
    document.getElementById("div1").innerHTML = "";
  }
}
function validateDemo() {
  var password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("div3").innerHTML = "Enter 6 digit password";
    document.getElementById("div3").style.color = "Red";
  } else {
    document.getElementById("div3").innerHTML = "";
  }
}
