
/*Gets all div element with class imgBlock*/
const images = document.getElementsByClassName("imgBlock");

/*Adds an event listener to the images in the imgBlock divs*/
for (let image of images) {
  image.firstElementChild.addEventListener("click", showEnlargedImg);
}

function showEnlargedImg() {
  /*Gets the img element that triggered the event*/
  let imgSource = event.srcElement;

  /*Creates a new img element and add scr and alt from the source image*/
  let imgElement = document.createElement("img");
  imgElement.src = imgSource.src;
  imgElement.alt = "Bigger image of " + imgSource.alt;
  imgElement.style.display = "block";
  imgElement.addEventListener("click", removeEnlargedImg);

  /*Gets the imgContainer and add the new img element into it*/
  let imgContainer = document.getElementById("largeImgContainer");
  imgContainer.appendChild(imgElement);

  /*Gets and display the overlay*/
  let overlay = document.getElementById("overlay");
  overlay.addEventListener("click", removeEnlargedImg);
  overlay.style.display = "block";
}

function removeEnlargedImg () {
  /*Gets and hides the overlay*/
  let overlay = document.getElementById("overlay");
  overlay.style = "";

  /*Removes the event listeners from overlay and large image*/
  overlay.removeEventListener("click", removeEnlargedImg);
  event.srcElement.removeEventListener("click", removeEnlargedImg);

  /*Removes the large image*/
  let imgContainer = document.getElementById("largeImgContainer");
  imgContainer.innerHTML = "";
}
