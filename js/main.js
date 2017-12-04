var navbar, sticky;

window.onscroll = function() { update() };

function init() {
	navbar = document.getElementById("navbar");
	sticky = navbar.offsetTop;
}

function update() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}
}
