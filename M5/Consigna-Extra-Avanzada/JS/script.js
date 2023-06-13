var addid = 0;

function addInput(id) {

  var addList = document.getElementById('addlist'); // tomo elemento a manipular
  var text = document.createElement('div'); //defino div 

  //genero elemnto a agregar
  text.id = 'additem_' + addid;
  text.innerHTML = '<div><input type="text" placeholder="nombreCategoria" id="nomCat_' + addid + '"><input type="number" placeholder="porcentajeCategoria" id="porcentCat_' + addid + '"></div>';

  addid++; // incremento para generar un id diferente

  addList.appendChild(text);
}

function calcular(id) {
  //var calcular = document.getElementById("botonCalcular");
  
  const borrar = document.getElementById("respuesta"); // leo el elemento respuesta a manipular
  borrar.innerHTML = ''; // borro su contenido (por si calculas mas de una vez, que primero borre)
  
  var ingresos = parseFloat(document.getElementById("ingresos").value);
  var totalPorcentajes = 0;// indice para comprobar que no pase el %100

  for (let i = 0; i < addid; i++) { // bucle para recorrer y acumular todos los elementos porcentaje
    elmId = "porcentCat_" + (i);
    totalPorcentajes += parseFloat(document.getElementById(elmId).value);
  }

  if (totalPorcentajes != 100) {  // control
    alert("la suma de los porcentajes debe ser igual a 100")
  }
  else { // calculo e informacion

    var resp = document.createElement('div'); //creo el div
    var respuesta = document.getElementById('respuesta'); //tomo elemento destino
    var ingresos = parseFloat(document.getElementById('ingresos').value); // leo ingresos

    resp.innerHTML += '<div class="mt-5">';
    respuesta.appendChild(resp);

    for (let i = 0; i < addid; i++) { // bucle recorrer elementos y calcular

      var leerId = "porcentCat_" + i; //creo la variable que guarda el id del dom a leer
      var leerNombre = "nomCat_" + i; //creo la variable que guarda el id del dom a leer

      totalPorcentajes += parseFloat(document.getElementById(leerId).value);
      // totalPorcentajes += parseFloat(document.getElementById("porcentCat_" + i).value);  // se puede reemplazar por esto y te evitas de creear leerId

      var porcEnPesos = ingresos * document.getElementById(leerId).value / 100; // calculo los pesos que representa el %

      //genero elemnto a agregar
      resp.id = 'additem_' + addid;
      resp.innerHTML += '<div><b>Categoria: </b>' + document.getElementById(leerNombre).value + ' <b>Importe: </b>' + porcEnPesos + '</div>';


    }
    respuesta.appendChild(resp);
    resp.innerHTML += '</div>';
    respuesta.appendChild(resp);
  }

}


