$.noConflict();


jQuery(document).ready(function ($) {


               mostrarNumeroAlumnos();


               var promesaCarga = $.ajax('http://localhost:2403/alumnos', {
                    type: "GET"
               });
               promesaCarga.success(function (data) {
                    var numAlumnos = data.length;
                    //CODIGO
                    for (var i = 0; i < numAlumnos; i++) {
                         var id = data[i].id;
                         var dni = data[i].dni;
                         var nombre = data[i].nombre;
                         var apellido = data[i].apellidos;
                         var notas = new Array();
                         notas.UF1841 = data[i].notas.UF1841;
                         notas.UF1842 = data[i].notas.UF1842;
                         notas.UF1843 = data[i].notas.UF1843;
                         notas.UF1844 = data[i].notas.UF1844;
                         notas.UF1845 = data[i].notas.UF1845;
                         notas.UF1846 = data[i].notas.UF1846;
                         insertarAlumnoTabla(dni, nombre, apellido, notas)
                    }
                    totalNotaMedia(data);
               });

               var promesaBorrar = $.ajax('http://localhost:2403/alumnos/' + id, {
                    type: "DELETE"
               });
               promesaBorrar.success(function (data) {}



                




                    $("#listado-alumnos tbody button").click(function (e) {
                         alert("Has pulsado en editar click");
                    }); $("#listado-alumnos tbody").on("click", "button", function (e) {
                         alert("Has pulsado en editar con ON");
                    }); $("#listado-alumnos thead input").click(function (e) {
                         if ($(this).prop("checked")) {
                              $("#listado-alumnos tbody input").prop("checked", true);
                         } else {
                              $("#listado-alumnos tbody input").prop("checked", false);
                         }
                    }); $("a[href='s1'],a[href='#s2']").click(function (e) {
                         e.preventDefault();
                    }); $('#productos').find("a.btn").click(function (e) {
                         var dni = $('#dni').val();
                         var letra = calcularLetra(parseInt(dni, 10));
                         $('#productos').find("span.resultado").text(letra);
                         e.preventDefault();
                         return false;
                    }); $("#alumnos div button.btn-info").on("click", function (e) {
                         alert("Has pulsado añadir");
                         $("#myModal").css("display", "block");

                    }); $("#botonBorrar").on("click", function (e) {
                         alert("Has pulsado borrar");

                         //0 Recoger el dni de la vista
                         $("#listado-alumnos tbody tr input:checked").each(function (e) {
                              var codigo = alert($(this).val());
                              //1 Borrado de la vista
                              borradoVista();
                              //2 Borrado de la BBDD
                              borrarAlumno(codigo);
                              mostrarNumeroAlumnos();
                         });
                    });

                    function mostrarNumeroAlumnos() {
                         $("#alumnos div span:eq(0)").text("Número de Alumnos: " + 1);

                    }

                    function borradoVista() {
                         $("#listado-alumnos tbody tr input:checked").parents("tr").remove();
                    }
                    /* INICIO DEL METODO: INSERTAR ALUMNO TABLA*/

                    function insertarAlumnoTabla(dni, nombre, apellido, notas) {
                         var html_text = "<tr>" +
                              "<td align='center'><input type='checkbox' value='" + dni + "'/></td>" +
                              "<td>" + nombre + "</td>" +
                              "<td>" + apellido + "</td>" +
                              "<td>" + notas.UF1841 + "</td>" +
                              "<td>" + notas.UF1842 + "</td>" +
                              "<td>" + notas.UF1843 + "</td>" +
                              "<td>" + notas.UF1844 + "</td>" +
                              "<td>" + notas.UF1845 + "</td>" +
                              "<td>" + notas.UF1846 + "</td>" +
                              "<td>" + calcularMedia(notas).toFixed(2) + "</td>" +
                              "<td align='center'><button>Editar</button></td>" +
                              "</tr>";
                         $('#listado-alumnos tbody').append(html_text);
                    }
                    /*FIN DEL METODO: INSERTAR ALUMNO TABLA*/
                    /* INICIO DEL METODO: TOTAL NOTA MEDIA*/
                    function totalNotaMedia(data) {
                         var total = 0;
                         var cantidad = data.length;
                         for (var i = 0; i < data.length; i++) {
                              total = total + calcularMedia(data[i].notas);
                         }
                         total = total / cantidad;
                         var html_text = total;
                         $('#notamedia').append(html_text);
                    }
                    /*FIN DEL METODO: TOTAL NOTA MEDIA*/

               });

          /*INICIO DEL METODO: CALCULAR MEDIA*/

          function calcularMedia(notas) {
               var media = 0;

               //   Este sistema es MAS costoso a nivel de rendimiento pero si el array cambia el metodo se actualiza solo
               var len = Object.keys(notas).length;
               for (var i = 0; i < len; i++) {
                    media += Object.values(notas)[i];
               }
               var media = media / len;
               //     
               //   Este sistema es MENOS costoso a nivel de rendimiento pero si el array cambia hay que actualizar el metodo
               //var media = (notas.UF1841+notas.UF1842+notas.UF1843+notas.UF1844+notas.UF1845+notas.UF1846)/Object.keys(notas).length;
               //     
               return media;
          }
          /*FIN DEL METODO: CALCULAR MEDIA*/
          /*INICIO DEL METODO: AGREGAR ALUMNO*/

          function agregarAlumno(dni, nombre, apellido, notas) {

          }
          /*FIN DEL METODO:  AGREGAR ALUMNO*/
          /*INICIO DEL METODO: ACTUALIZAR ALUMNO*/

          function actualizar(dni, nombre, apellido, notas) {

          }
          /*FIN DEL METODO:  ACTUALIZAR ALUMNO*/
          /*INICIO DEL METODO: VER ALUMNO*/

          function ver(dni, nombre, apellido, notas) {

          }
          /*FIN DEL METODO:  VER ALUMNO*/
          /*INICIO DEL METODO: BORRAR ALUMNO*/

          function borrar(dni) {

          }
          /*FIN DEL METODO:  BORRAR ALUMNO*/
          /*


          function borradoBBDD(codigo) {
               var i = 0;
               var len = dnies.length;
               var found = false;
               var pos = -1;
               while (i < len && found == false) {
                    if (codigo == dnies[i]) {
                         found = true;
                         pos = i;
                    }
                    i++;
               }
               if (pos != -1) {
                    dnies.splice(pos, 1);
                    delete nombres[codigo];
                    delete apellidos[codigo];
                    //....
               }
          }
          */