var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function newPage(){
  window.location.href = "http://127.0.0.1:5502/AddToCart/index.html"
}
function nextPage(){
  window.location.href = "http://127.0.0.1:5502/CheckoutPage/index.html"
}
function backPage(){
  window.location.href = "http://127.0.0.1:5502/Musicart/homePage/index.html"
}