//Utils
function calcularPromedio(lista){
    const sumaLista = lista.reduce(
        function(valoracumulado = 0, nuevoValor){
            return valoracumulado+ nuevoValor;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function esPar(numero){
    return numero % 2 === 0;
}

//End Utils

const salariosCol = Colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salarioA, salarioB){
        return salarioA - salarioB;
    }
);

function calcularMedianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const persona1 = lista[mitad - 1];
        const persona2 = lista[mitad];

        const mediana = calcularPromedio([persona1,persona2]);

        return mediana;
    } else {
        const personaMitad = lista[mitad];            
        return personaMitad;

    }

}



//Mediana top10
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

console.log({spliceStart, spliceCount})

const top10 = salariosColSorted.splice(
    spliceStart, 
    spliceCount,
);

console.log(top10);
const medianaGeneral = calcularMedianaSalarios(salariosColSorted);
const medianaTop10 = calcularMedianaSalarios(top10);

console.log({
    medianaGeneral,
    medianaTop10,
    
});