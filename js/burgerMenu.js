var image_burg_menu = document.getElementById("burger-menu");
image_burg_menu.addEventListener("click", toggleBurgerMenu);


function toggleBurgerMenu() {
    var element = document.getElementById("burger-id");
    if (element.style.display === 'none') {
        element.style.display = 'block';
    }
    else {
        element.style.display = 'none';
    }
}
