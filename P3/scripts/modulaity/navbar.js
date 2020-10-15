// Text needs to be all lowercase to fit the font
const navbarCategories = ["menu", "catering", "location", "about"];

// Defaults are navigating from sides folder
const defaultPaths = {
  logo:"../index.html",
  menu:"food_menu.html",
  catering:"catering.html",
  location:"location.html",
  about:"about.html"
};

const defaultImagePaths = {
  getLogo:"../images/logo.svg",
  getClose:"../images/nav_button_close.svg"
  };

function generateNavbar(paths=defaultPaths,images=defaultImagePaths) {
  // Default is always not to show navbar initially
  document.getElementsByClassName("navbar")[0].style.display = "none";

  //IMAGES

  let logo = document.createElement("a");
  logo.setAttribute("href", paths.logo); //set link to index, same relative link problem as described below
  let logoImg = document.createElement("img");
  // Important: Path is from index file to the right picture, which means this wont work for other pages than main right now
  logoImg.setAttribute("src", images.getLogo); //relative path problem
  logo.appendChild(logoImg);

  let menuButtonClose = document.createElement("button"); //need to override the default CSS for buttons
  menuButtonClose.setAttribute("onclick", "closeNavbar()");
  let menuImgClose = document.createElement("img");
  menuImgClose.setAttribute("src", images.getClose); //relative path problem
  menuButtonClose.appendChild(menuImgClose);

  // TEXT

  // wrapper for the text in the navbar
  let links = document.createElement("div");
  links.setAttribute("id","navbarFlexContainer");

  //paths corresponding to text categories in navbar
  const textLinks = [paths.menu, paths.catering, paths.location, paths.about]

  for (let index = 0; index < navbarCategories.length; index++) {
    let nodeWrapper = document.createElement("h1"); //Links are in h1 for main style to apply
    nodeWrapper.style.display = "inline"; //h1 is block by default, this overrides with inline CSS
    nodeWrapper.setAttribute("class","navbarText");
    let node = document.createElement("a");
    node.setAttribute("href",textLinks[index]);
    let textNode = document.createTextNode(navbarCategories[index]);
    node.appendChild(textNode);
    nodeWrapper.appendChild(node);
    links.appendChild(nodeWrapper);
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
