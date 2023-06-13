var calcular = document.getElementById("botonCalcular");

calcular.addEventListener("click",function(event){
    event.preventDefault()

    var ingresos = parseFloat(document.getElementById("ingresos").value);
    var porcentajeGastosNecesarios = parseFloat(document.getElementById("porcentajeGastosNecesarios").value);
    var porcentajeGastosOpcionales = parseFloat(document.getElementById("porcentajeGastosOpcionales").value);
    var porcentajeAhorros = parseFloat(document.getElementById("porcentajeAhorros").value);

    var totalPorcentajes = porcentajeGastosNecesarios + porcentajeGastosOpcionales + porcentajeAhorros;

    var gastosNecesarios = ingresos * (porcentajeGastosNecesarios/100);

    var gastosOpcionales = ingresos * (porcentajeGastosOpcionales/100);

    var ahorroEInversion = ingresos * (porcentajeAhorros/100);

    

    if( totalPorcentajes !== 100){
        alert("la suma de los porcentajes debe ser igual a 100")
    }
    else{    
    document.getElementById('respuesta').textContent = "Tu monto Total es: $" + ingresos + " , tus gastos necesarios son: $" + gastosNecesarios + " , tus gastos opcionales son: $" + gastosOpcionales + " y tu ahorro e inversion es: $" +ahorroEInversion;
    }
    

})