// Gets the modal
var modal = document.getElementById("myModal");

// Gets the image and inserts it inside the modal
var imgOne = document.getElementsByClassName("myImg")[0];
var imgTwo = document.getElementsByClassName("myImg")[1];
var imgThree = document.getElementsByClassName("myImg")[2];
var imgFour = document.getElementsByClassName("myImg")[3];
var imgFive = document.getElementsByClassName("myImg")[4];
var imgSix = document.getElementsByClassName("myImg")[5];
var imgSeven = document.getElementsByClassName("myImg")[6];
var imgEight = document.getElementsByClassName("myImg")[7];

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Clicking an image opens the modal with a zoomed in image and caption
imgOne.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
imgTwo.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
imgThree.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
imgFour.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
imgFive.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
imgSix.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
imgSeven.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
imgEight.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}


// Gets Close button and gives it a function
var span = document.getElementById("close");

span.onclick = function() {
    modal.style.display = "none";
}