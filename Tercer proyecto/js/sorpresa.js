// Get the modal
var ventanaanuncio = document.getElementById('ventanaanuncio');

// Get the button that opens the modal
var botonanuncio = document.getElementById("botonanuncio");

// When the user clicks the button, open the modal
botonanuncio.onclick = function () {
     ventanaanuncio.style.display = "block";
}

/*

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
     if (event.target == ventanaanuncio) {
          ventanaanuncio.style.display = "none";
     }
}/**/
