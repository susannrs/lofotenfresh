function generateBackgroundImage(path, do_repeat=false) {
  const body = document.getElementsByTagName('body')[0];

  // Defines the background image to the specified path, with a dark gray filter overlay
  var style_description = `background-image:
  linear-gradient(
    to bottom,
    rgba(22, 22, 22, 0.28),
    rgba(22, 22, 22, 0.28)),
    url(` + path + `);
    background-size: cover;
    background-repeat: repeat,`;

  // If do_repeat the backgruond image is set to repeat
  if (do_repeat) {
    style_description += "repeat;";
  } else {
    style_description += "no-repeat;";
  }

  // Sets the style of the body 
  body.style = style_description;
}
