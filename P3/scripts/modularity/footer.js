function generateFooter() {

    // Make Facebook button
    var facebookButton = document.createElement('a');
    facebookButton.href = "http://www.facebook.com";
    facebookButton.className ="fa fa-facebook";
    facebookButton.target = "blank"

    // Adds button to footer
    document.getElementsByClassName("footer")[0].appendChild(facebookButton);


    // Make Instagram button
    var instagramButton = document.createElement("a");
    instagramButton.href = "http://www.instagram.com";
    instagramButton.className = "fa fa-instagram";
    instagramButton.target = "blank"

    // Adds button to footer
    document.getElementsByClassName("footer")[0].appendChild(instagramButton);

    // Make Text field
    var para = document.createElement("p");
    var soMeText = document.createTextNode("Some text here in Arimo 24pt next to SoMe buttons. No drop shadow.");

    // Add text field to footer
    document.getElementsByClassName("footer")[0].appendChild(soMeText);
}
