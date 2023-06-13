var calcular = document.getElementById("botonCalcular");

calcular.addEventListener("click",function(event){
    event.preventDefault()
    
    var ingresos = document.getElementById("ingresos").value;

    var gastosNecesarios = ingresos * 0.5;

    var gastosOpcionales = ingresos * 0.3;

    var ahorroEInversion = ingresos * 0.2;

    document.getElementById('respuesta').textContent = "Tu monto Total es: $" + ingresos + " , tus gastos necesarios son: $" + gastosNecesarios + " , tus gastos opcionales son: $" + gastosOpcionales + " y tu ahorro e inversion es: $" +ahorroEInversion;
    //alert("Tu monto Total es: $" + ingresos + " , tus gastos necesarios son: $" + gastosNecesarios + " , tus gastos opcionales son: $" + gastosOpcionales + " y tu ahorro e inversion es: $" +ahorroEInversion);
})