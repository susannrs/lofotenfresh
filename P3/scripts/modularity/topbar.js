// Defaults are navigating from sides folder
const defaultTopPaths = {
  logo:"../index.html"
};

const defaultTopImagePaths = {
  getLogo:"../images/logo.svg",
  getOpen:"../images/nav_button.svg"
};

function generateTopbar(headingText,paths=defaultTopPaths,images=defaultTopImagePaths) {
  //Use this reference a lot
  const topbar = document.getElementsByClassName("topbar")[0];

  // Default is always to show topbar initially
  topbar.style.display = "block";

  //Create flex wrapper
  const wrapper = document.createElement("div");
  wrapper.setAttribute("class","flexWrapper");


  //Modularity problem: This is copy paste of the navbar.js code to create logo
  //Modularity exception: Logo in topbar is assigned an ID
  //LOGO
  let logo = document.createElement("a");
  logo.setAttribute("href", paths.logo);
  logo.setAttribute("id", "logoTopbar"); //Id is used to show/hide topbar logo when navbar is showing in navbar.js
  let logoImg = document.createElement("img");
  logoImg.setAttribute("src", images.getLogo);
  logoImg.setAttribute("class","cornerLogo");
  logo.appendChild(logoImg);

  // TEXT
  let node = document.createElement("h2");
  node.style.display = "inline"; //h2 is block by default
  node.setAttribute("class","pageTitle");

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
  topbar.appendChild(wrapper);
  wrapper.appendChild(logo);
  wrapper.appendChild(node);
  wrapper.appendChild(menuButton);
}
