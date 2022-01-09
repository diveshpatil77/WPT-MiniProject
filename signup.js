function validate() {
  var uname = document.getElementById("uname").value;
  var name = document.getElementById("name").value;
  var Email = document.getElementById("Email").value;
  var mobno = document.getElementById("mobno").value;

  if (uname === "") {
    document.getElementById("div2").innerHTML = "Enter a value";
    document.getElementById("div2").style.color = "Red";
  } else {
    document.getElementById("div2").innerHTML = "";
  }

  if (name === "") {
    document.getElementById("div1").innerHTML = "Enter a value";
    document.getElementById("div1").style.color = "Red";
  } else {
    document.getElementById("div1").innerHTML = "";
  }

  if (Email.indexOf("@") > -1) {
    document.getElementById("div6").innerHTML = "";
  } else {
    document.getElementById("div6").innerHTML =
      "Enter the correct email address";
    document.getElementById("div6").style.color = "Red";
  }

  if (mobno.length < 10) {
    document.getElementById("div5").innerHTML = "Enter 10 digit Mobile number";
    document.getElementById("div5").style.color = "Red";
  } else {
    document.getElementById("div5").innerHTML = "";
  }
}
function validateDemo() {
  var password = document.getElementById("password").value;
  var rpassword = document.getElementById("rpassword").value;

  if (password.length <= 6) {
    document.getElementById("div3").innerHTML = "Enter 6 digit password";
    document.getElementById("div3").style.color = "Red";
  } else {
    document.getElementById("div3").innerHTML = "";
  }

  if (rpassword != password) {
    document.getElementById("div7").innerHTML = "Password doesn't match";
    document.getElementById("div7").style.color = "Red";
  } else {
    document.getElementById("div7").innerHTML = "";
  }
}

function clearM() {
  document.getElementById("uname").value = "";

  document.getElementById("name").value = "";
  document.getElementById("Email").value = "";
  document.getElementById("mobno").value = "";
  document.getElementById("password").value = "";
  document.getElementById("rpassword").value = "";
}
