function generateTopbar(headingText) {
  // Default is always to show topbar initially?
  document.getElementsByClassName("topbar")[0].style.display = "block";

  //Modularity problem: This is copy paste of the navbar.js code to create logo
  //Modularity exception: Logo in topbar is assigned an ID
  //LOGO
  let logo = document.createElement("a");
  logo.setAttribute("href", "https://www.vg.no/"); //set link to index, relative link problem
  logo.setAttribute("id", "logoTopbar");
  let logoImg = document.createElement("img");
  // Important: Path is from index file to the right picture, which means this wont work for other pages than main right now
  logoImg.setAttribute("src", "images/logo.svg"); // relative path problem
  logo.appendChild(logoImg);

  // TEXT
  let node = document.createElement("span");
  let textNode = document.createTextNode(headingText); //Set appropriate text when invoking function
  node.appendChild(textNode);

  //MENU BUTTON
  let menuButton = document.createElement("button"); //need to override the default CSS for buttons
  menuButton.setAttribute("onclick", "openNavbar()"); // invokes function from navbar.js
  menuButton.setAttribute("id", "menuButton"); //id is used to hide this button when navbar is showing
  let menuImg = document.createElement("img");
  menuImg.setAttribute("src", "images/nav_button.svg"); // relative path problem
  menuButton.appendChild(menuImg);

  // ADD ALL THE STUFF TO HTML
  document.getElementsByClassName("topbar")[0].appendChild(logo);
  document.getElementsByClassName("topbar")[0].appendChild(node);
  document.getElementsByClassName("topbar")[0].appendChild(menuButton);
}
