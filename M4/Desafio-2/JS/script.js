var creditos = [
    {nombre: "Plan001", capital:150000, plazo: 30, tasa: 15},
    {nombre: "Plan002", capital:300000, plazo: 180, tasa: 10},
    {nombre: "Plan003", capital:485000, plazo: 60, tasa: 23}
];

//Este ejercicio lo resolví jutamente de ésta manera en el M3 para poder integrar el valor del interes en la tabla.

creditosConInteresesCalculados = [];

function interesesCalculados(creditos){
    for (var i = 0; i < creditos.length; i++){
        var credito = creditos[i];
        var interes = (credito.capital * credito.plazo * (credito.tasa / 100) / 100);

    creditosConInteresesCalculados.push({
        nombre: credito.nombre,
        capital: credito.capital,
        plazo: credito.plazo,
        tasa: credito.tasa,
        interes: interes
    });
    }
    return (console.log(creditosConInteresesCalculados));
}