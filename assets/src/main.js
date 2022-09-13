window.onload = () => {
	document.getElementById("plane").classList.remove("plane-off-camera");
	document.getElementById("plane").classList.add("plane-arrive");

	addEventListener("scroll", (event) => {
		document.getElementById("plane").classList.remove("plane-arrive");
		document.getElementById("plane").classList.add("plane-depart");
	})
};