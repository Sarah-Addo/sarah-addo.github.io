//Opens the navbar menu when hamburger icon is clicked
function openMenu() {

	document.getElementById("menu").classList.toggle("open");
	document.getElementById("navbar-list").classList.toggle("show");
	document.getElementById("bar1").classList.toggle("change");
	document.getElementById("bar2").classList.toggle("change");
	document.getElementById("bar3").classList.toggle("change");

}

//Closes the navbar menu when hamburger icon is clicked
function closeMenu() {

	document.getElementById("menu").classList.toggle("open");
	document.getElementById("navbar-list").classList.toggle("show");
	document.getElementById("bar1").classList.toggle("change");
	document.getElementById("bar2").classList.toggle("change");
	document.getElementById("bar3").classList.toggle("change");



}

function collapse() {

	document.getElementById("down").classList.toggle("up");
    var content = document.getElementById("hidden-p");
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  
}