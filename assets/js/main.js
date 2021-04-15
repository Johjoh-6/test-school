// Header nav 
const menu = document.getElementsByClassName("menu");
const link = document.getElementsByClassName("link-nav");
let selected = document.getElementsByClassName("selected");

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function() {
        selected[0].className = selected[0].className.replace(" selected", "");
    this.className += " selected";
    console.log('selectionner')
    });
  }



