
// Dejo la primera solución que había hecho, era simplemente un login mediante un prompt.

/*var usuario = prompt("Ingrese su Usuario:");
var contraseña =  prompt("Ingrese su Contraseña:");

if(usuario == "admin" && contraseña == "1234"){
    alert("Login Satisfactorio")
    document.writeln("Bienvenido a educación IT!")
}
else{
    alert("Alguno de los datos ingresados son incorrectos.")
}*/


var login = document.querySelector("button")

login.addEventListener("click",function(){
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;

    if(usuario == "admin" && contraseña == "1234"){
        alert("Login Satisfactorio")
        document.writeln("Bienvenido a educación IT!")
    }
    else{
        alert("Alguno de los datos ingresados son incorrectos.")
    }
})