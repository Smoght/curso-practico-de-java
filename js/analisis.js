//traer la propiedad salarios de mi objeto colombia seria como poner colombia.salary
const salariosCol = colombia.map(
    function (personita) {
      return personita.salary;
    }
  );
// ya que tengo la propiedad salarios, el siguiente paso es ordenarlos.  
const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
      return salaryA - salaryB;
    }
  );
//se genera una formula para poder saber si es par daria true de lo contrario es false
function esPar(numerito) {
    return (numerito % 2 === 0);
  }
//se genera una formula para poder saber la mediana para esto es necesario primero coger la lista y dividirla en dos para saber el valor de la mitad y luego generar la condicional que si en la lista el numero de elementos es para se debe tomar los dos elementos de la mita de lo contrario solo tomar el valor que arroja la var mitad
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }

function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personitaMitad1 = lista[mitad - 1];
    const personitaMitad2 = lista[mitad];

    const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
    return mediana;
  } else {
    const personitaMitad = lista[mitad];
    return personitaMitad;
  }
}
console.log(
    medianaSalarios(salariosColSorted)
)
