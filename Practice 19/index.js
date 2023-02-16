const mainbutton = document.getElementByTagName("button");
const innercard = document.getElementById("innerCard");


mainbutton.addEventListener('click', function() {
     innercard.style.display = "none";
});