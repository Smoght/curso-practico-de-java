var lista1 = [
    100, 
    200,
    300,
    500,
    10000,
]

function calcularMediaAritmetica(lista){
    var sumaLista = 0;
    for (var i = 0;i < lista.length; i++ ){
        sumaLista = sumaLista + lista[i];
    }
    
    var promedioLista = sumaLista / lista.length;
    return promedioLista
}

const mitadLista1 = parseInt(lista1.length / 2);

function esPar (numero){
    if (numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}
var mediana;

if (esPar (lista1.length)){
    var elemento1 = lista1[mitadLista1];
    var elemento2 = lista1[mitadLista1 - 1]; 

    var promedioValores = calcularMediaAritmetica ([
        elemento1,
        elemento2,
    ]);
    
    mediana = promedioValores

}else{
    mediana = lista1[mitadLista1]
}