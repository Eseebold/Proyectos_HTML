// Get the modal
var ventanamodal = document.getElementById('modalformularioagregar');

// Get the button that opens the modal
var botoninvocar = document.getElementById("formularioAgregar");

// Get the <span> element that closes the modal
var xdecerrar = document.getElementsByClassName("close")[0];
var abortar = document.getElementById("abortar");

// Get the button that send the info of the modal
var adoptar = document.getElementById("adoptar");

// When the user clicks the button, open the modal
botoninvocar.onclick = function () {
     ventanamodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
xdecerrar.onclick = function () {
     ventanamodal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
abortar.onclick = function () {
     ventanamodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
     if (event.target == ventanamodal) {
          ventanamodal.style.display = "none";
     }
}
