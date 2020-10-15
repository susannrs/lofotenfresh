// Defaults are navigating from sides folder
const defaultTopPaths = {
  logo:"../index.html"
};

const defaultTopImagePaths = {
  getLogo:"../images/logo.svg",
  getOpen:"../images/nav_button.svg"
};

function generateTopbar(headingText,paths=defaultTopPaths,images=defaultTopImagePaths) {
  // Default is always to show topbar initially
  document.getElementsByClassName("topbar")[0].style.display = "block";

  //Modularity problem: This is copy paste of the navbar.js code to create logo
  //Modularity exception: Logo in topbar is assigned an ID
  //LOGO
  let logo = document.createElement("a");
  logo.setAttribute("href", paths.logo);
  logo.setAttribute("id", "logoTopbar");
  let logoImg = document.createElement("img");
  logoImg.setAttribute("src", images.getLogo); 
  logo.appendChild(logoImg);

  // TEXT
  let node = document.createElement("h2");
  node.style.display = "inline"; //h2 is block by default

  let textNode = document.createTextNode(headingText); //Sets appropriate text when invoking function
  node.appendChild(textNode);

  //MENU BUTTON
  let menuButton = document.createElement("button"); //need to override the default CSS for buttons
  menuButton.setAttribute("onclick", "openNavbar()"); // invokes function from navbar.js
  menuButton.setAttribute("id", "menuButton"); //id is used to hide this button when navbar is showing
  let menuImg = document.createElement("img");
  menuImg.setAttribute("src", images.getOpen); 
  menuButton.appendChild(menuImg);

  // ADD ALL THE STUFF TO HTML
  document.getElementsByClassName("topbar")[0].appendChild(logo);
  document.getElementsByClassName("topbar")[0].appendChild(node);
  document.getElementsByClassName("topbar")[0].appendChild(menuButton);
}
