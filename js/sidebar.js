function openNav() {
	document.getElementById("sidebar").style.width = "150px";
	document.getElementById("content").style.marginLeft = "200px";
	document.getElementById("openbtn").style.marginLeft = "150px";
	document.getElementById("openbtn").setAttribute("onClick", "closeNav()");
}

function closeNav() {
	document.getElementById("sidebar").style.width = "0";
	document.getElementById("content").style.marginLeft= "50px";
	document.getElementById("openbtn").style.marginLeft = "0";
	document.getElementById("openbtn").setAttribute("onClick", "openNav()");
}
