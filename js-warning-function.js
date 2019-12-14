var warning = document.getElementById("warning-section");
function advarsel() {
  if (warning.style.display === "none") {
    warning.style.display = "flex";  
  }
else {
    warning.style.display = "none";
  }
var i = 0;
function change() {
  var color = ["#4587E1", "#A9D7BB"];
  warning.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 1500);
}