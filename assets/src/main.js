window.onload = () => {
	const sections = Object.freeze({
		jump: 0,
		thrill: 1,
		equipment: 2,
		booking: 3
	});
	const SECTION_HEIGHT = document.getElementById("jump").clientHeight;
	let currentSection = parseInt((document.documentElement.scrollTop + window.innerHeight) / SECTION_HEIGHT);
	let sectionState = null;

	// Initialize section state.
	enterSection(currentSection);
	sectionState = currentSection;

	// Set scroll message up.
	const reminder = setTimeout(showScroll, 1500);

	document.getElementById("plane").classList.remove("plane-off-camera");
	document.getElementById("plane").classList.add("plane-arrive");

	function showScroll() {
		document.getElementById("scroll-message").classList.remove("invisible");
	}
	function enterSection(section) {
		if (section == sections.jump) {
			document.getElementById("jump-header").classList.remove("invisible");
		} else if (section == sections.thrill) {
			document.getElementById("thrill-header").classList.remove("invisible");
		} else if (section == sections.equipment) {
			document.getElementById("equipment-header").classList.remove("invisible");
		} else {
			document.getElementById("booking-header").classList.remove("invisible");
		}

		sectionState = currentSection;
	}
	function leaveSection(section) {
		if (section == sections.jump) {
			document.getElementById("jump-header").classList.add("invisible");
		} else if (section == sections.thrill) {
			document.getElementById("thrill-header").classList.add("invisible");
		} else if (section == sections.equipment) {
			document.getElementById("equipment-header").classList.add("invisible");
		} else {
			document.getElementById("booking-header").classList.add("invisible");
		}
	}

	addEventListener("scroll", (event) => {
		currentSection = parseInt((document.documentElement.scrollTop + window.innerHeight) / SECTION_HEIGHT);

		clearTimeout(reminder);
		document.getElementById("scroll-message").classList.add("invisible");

		if (currentSection != sectionState) {
			leaveSection(sectionState);
			enterSection(currentSection);
		}

		document.getElementById("plane").classList.remove("plane-arrive");
		document.getElementById("plane").classList.add("plane-depart");
	});
};