
function warning() {
	var warning = document.getElementById("warning-section");
  if (warning.style.display === "none") {
    warning.style.display = "flex";
  } else {
    warning.style.display = "none";
  }
	var seconds = 300;
	
	function changeColor() {
		if (seconds <= 300 && seconds > 90) {
			document.warning.style.background = "#4587E1";
		}

		else if (seconds <= 90 && seconds > 30) {
			document.warning.style.background = "#A9D7BB";
		}

		else {
			document.warning.style.background = "4587E1";
		}
	}
	changeColor();
}