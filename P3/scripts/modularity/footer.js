function generateFooter() {

    // Make Facebook button
    var facebookButton = document.createElement('a');
    facebookButton.href = "http://www.facebook.com";
    facebookButton.className ="fa fa-facebook";
    facebookButton.target = "blank";
    facebookButton.style.margin = "2px";

    // Adds button to footer
    document.getElementsByClassName("footer")[0].appendChild(facebookButton);


    // Make Instagram button
    var instagramButton = document.createElement("a");
    instagramButton.href = "http://www.instagram.com";
    instagramButton.className = "fa fa-instagram";
    instagramButton.target = "blank";
    instagramButton.style.margin = "2px";


    // Adds button to footer
    document.getElementsByClassName("footer")[0].appendChild(instagramButton);

    // Make Text field
    var para = document.createElement("p");
    var soMeText = document.createTextNode("Made by: Anne M. V. Bosch, Aksel Kirknes, Susanne Rynning Seip, Viggo Skarby og Vegard Tuset");

    // Add text field to footer
    document.getElementsByClassName("footer")[0].appendChild(soMeText);
}
