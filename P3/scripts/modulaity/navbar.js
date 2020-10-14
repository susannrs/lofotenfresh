// Text needs to be all lowercase to fit the font
navbarCategories = ["menu", "catering", "location", "about"];

// If function is run from index and not in the sides folder, use this
function generateNavbar(parameter) {
  //not created yet
  // dealing with relative path problem
  return;
}

function generateNavbar() {
  // Default is always not to show navbar initially?
  document.getElementsByClassName("navbar")[0].style.display = "none";

  //IMAGES

  let logo = document.createElement("a");
  logo.setAttribute("href", "https://www.vg.no/"); //set link to index, same relative link problem as described below
  let logoImg = document.createElement("img");
  // Important: Path is from index file to the right picture, which means this wont work for other pages than main right now
  logoImg.setAttribute("src", "images/logo.svg");
  logo.appendChild(logoImg);

  let menuButtonClose = document.createElement("button"); //need to override the default CSS for buttons
  menuButtonClose.setAttribute("onclick", "closeNavbar()");
  let menuImgClose = document.createElement("img");
  menuImgClose.setAttribute("src", "images/nav_button_close.svg"); //relative path problem
  menuButtonClose.appendChild(menuImgClose);

  // TEXT

  // wrapper for the text in the navbar
  let links = document.createElement("span");

  for (let index = 0; index < navbarCategories.length; index++) {
    let node = document.createElement("a");
    let textNode = document.createTextNode(navbarCategories[index]);
    node.appendChild(textNode);
    links.appendChild(node);
  }

  //ADD EVERYTHING TO HTML

  //fetching the first aka [0] element with this class name
  document.getElementsByClassName("navbar")[0].appendChild(logo); //how can I add all the stuff at once?
  document.getElementsByClassName("navbar")[0].appendChild(links);
  document.getElementsByClassName("navbar")[0].appendChild(menuButtonClose);
}

function closeNavbar() {
  document.getElementsByClassName("navbar")[0].style.display = "none";
  // Complementing functionality is found in topbar.js
  document.getElementById("menuButton").style.visibility = "visible";
  document.getElementById("logoTopbar").style.visibility = "visible";
}

// Invoked when pressing hambruger button in topbar
function openNavbar() {
  document.getElementsByClassName("navbar")[0].style.display = "block";
  // Need to figure out whether visibilty is hidden or display is none for the code lines below
  document.getElementById("menuButton").style.visibility = "hidden";
  document.getElementById("logoTopbar").style.visibility = "hidden";
}
