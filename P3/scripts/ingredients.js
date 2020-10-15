const images = document.getElementsByClassName("imgBlock");

for (let image of images) { // Add eventlistener to all images of the menu
  image.addEventListener("mouseover", function() {showIngredients(image);});
  image.addEventListener("mouseout", function() {hideIngredients(image);});
}

function showIngredients(image) { // Make every ingredient image visible
  const ingredientImages = image.querySelectorAll(".ingredient");
  for (let ingredient of ingredientImages) {
    ingredient.style.opacity = 1;
  }
}

function hideIngredients(image) { // Make every ingredient image hidden
  const ingredientImages = image.querySelectorAll(".ingredient");
  for (let ingredient of ingredientImages) {
    ingredient.style.opacity = 0;
  }
}
