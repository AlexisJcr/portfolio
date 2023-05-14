//===== MENU BURGER =====//
function burgerclic() {
  var navContainer = document.getElementById("nav-container");
  var burgerItems = document.querySelector(".nav-burger-items");

  if (navContainer.style.height === "5rem") {
    navContainer.style.height = "25rem";
    burgerItems.style.display = "flex";
  } else {
    navContainer.style.height = "5rem";
    burgerItems.style.display = "none";
  }
}

function checkBurgerDisplay() {
  var imgBurger = document.querySelector(".img-burger")
  var navContainer = document.querySelector(".nav-container");
  var burgerItems = document.querySelector(".nav-burger-items");
  if (window.getComputedStyle(imgBurger).display === "none") {
    navContainer.style.height = "5em";
    burgerItems.style.display = "none";
  }
}

// Vérifier l'état initial au chargement de la page
window.addEventListener("load", checkBurgerDisplay);

// Vérifier l'état à chaque changement de l'état d'affichage de l'élément "img-burger"
var observer = new MutationObserver(checkBurgerDisplay);
observer.observe(document.querySelector(".img-burger"), { attributes: true });

// Vérifier l'état à chaque fois que la taille de la fenêtre est modifiée
window.addEventListener("resize", checkBurgerDisplay);






/*function burgerclic() {
    var navContainer = document.querySelector(".nav-container");
    var burgerItems = document.querySelector(".nav-burger-items");
    if (navContainer.style.height === "5rem")
    {
      navContainer.style.height = "8em";
      burgerItems.style.display = "flex";
  
    }
    //else{
      //navContainer.style.height = "5em";
      //burgerItems.style.display = "none";
    //}
}*/
  







/*//===== TIMELINE FORMATION ET EXPERIENCES =====//
document.addEventListener("DOMContentLoaded", function () {
  const ele = document.querySelector(".timeline-container");
  ele.style.cursor = "grab";

  let pos = { top: 0, left: 0, x: 0, y: 0 };

  const mouseDownHandler = function (e) {
    ele.style.userSelect = "none";

    pos = {
      left: ele.scrollLeft,
      top: ele.scrollTop,
      // Get the current mouse position
      x: e.clientX,
      y: e.clientY,
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    // Scroll the element
    ele.scrollTop = pos.top - dy;
    ele.scrollLeft = pos.left - dx;
  };

  const mouseUpHandler = function () {
    ele.style.cursor = "grab";
    ele.style.removeProperty("user-select");

    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };

  // Attach the handler
  ele.addEventListener("mousedown", mouseDownHandler);
});*/


