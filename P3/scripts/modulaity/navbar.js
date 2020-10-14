// Text needs to be all lowercase to fit the font
navbarCategories = ["menu", "catering", "location", "about"];

// If function is run from index and not in the sides folder, use this
function generateNavbar(parameter) {
  //not created yet
  // dealing with relative path problem
  return;
}

function generateNavbar() {
  //IMAGES

  let logo = document.createElement("a");
  logo.setAttribute("href", "https://www.vg.no/"); //set link to index, same relative link problem as described below
  // add the right href to a tag here
  let logoImg = document.createElement("img");
  // Important: Path is from index file to the right picture, which means this wont work for other pages than main right now
  logoImg.setAttribute("src", "images/logo.svg");
  logo.appendChild(logoImg);

  let menuButton = document.createElement("button"); //need to override the default CSS for buttons
  menuButton.setAttribute("onclick", "closeNavbar()");
  let menuImg = document.createElement("img");
  menuImg.setAttribute("src", "images/nav_button_close.svg");
  menuButton.appendChild(menuImg);

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
  document.getElementsByClassName("navbar")[0].appendChild(menuButton);
}

function closeNavbar() {
  document.getElementsByClassName("navbar")[0].style.display = "none";
  // Need to create complementing functionality in topbar.js
  document.getElementsByClassName("topbar")[0].style.display = "block"; //Or just do this to the harmburger button in topbar through ID
}

// Invoke when pressing button in topbar
function openNavbar() {
  document.getElementsByClassName("navbar")[0].style.display = "block";
}
