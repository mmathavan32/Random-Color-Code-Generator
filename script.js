function getNewColor() {
  var symbols, color;
  symbols = "0123456789ABCDEF";
  color = "#";
  for (var i = 0; i < 6; i++) {
    color = color + symbols[Math.floor(Math.random() * 16)];
  }
  document.body.style.background = color;
  document.getElementById("colorCode").innerHTML = color;
}

function copyToClipboard() {
  const myData = document.getElementById("colorCode").innerHTML;
  const copybtn1 = document.getElementById("copyIcon");
  const presaver = document.createElement("textarea");
  presaver.innerHTML = myData;
  navigator.clipboard.writeText(presaver.value);
  var alert = document.getElementById("alert");
  alert.classList.remove("hide");
  alert.classList.add("show");
  alert.classList.add("showAlert");
  setTimeout(() => {
    alert.classList.remove("show");
    alert.classList.add("hide");
  }, 2000);
}
