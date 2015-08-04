var $buttonShowMenu = document.querySelector(".showMenu");

var $buttonHideMenu = document.querySelector(".hideMenu"); 

var $menu = document.querySelector(".Canvas-menu");

function showMenu(){
	$buttonShowMenu.classList.remove("is-active");
	$buttonHideMenu.classList.add("is-active");
	$menu.classList.add("is-active");
}

function hideMenu(){
	$buttonShowMenu.classList.add("is-active");
	$buttonHideMenu.classList.remove("is-active");
	$menu.classList.remove("is-active");
}

$buttonShowMenu.addEventListener("click",showMenu);

$buttonHideMenu.addEventListener("click",hideMenu);