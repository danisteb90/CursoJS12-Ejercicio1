//Crea un nuevo fichero JS que contenga las siguientes líneas

// - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números 
// de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8]) 
// -> 0+1 = 1+1 = 2+1 = 3+2= 5+3 = 8 
// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función

function secuenciaFibo(num){
    if (num === 1) return [1]
    let array = [1, 1]
    for (let i = 2; i < num; i++) {
        array.push(array [i - 1] + array [i - 2])
    }
    return array
}

console.log(secuenciaFibo(7));