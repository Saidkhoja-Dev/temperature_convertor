// Mahmudxo'jayev's

var elBody = document.querySelector("body");
var elForm = document.querySelector(".form");
var elFarenheit = document.querySelector(".fahrenheit");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var elCelcium = (document.querySelector(".celsius").value.trim());

  if (elCelcium) {
    var result =(elCelcium * 9/5 + 32);
    elFarenheit.value = result;
  } else {
    elFarenheit.value = ("Iltimos raqam kiriting ");
  }

  if (elCelcium <= 10) {
    elBody.classList.add("bg-info");
  }else if (elCelcium <= 30) {
    elBody.classList.add("bg-warning");
  }else {
    elBody.classList.add ("bg-danger");
  }
});

