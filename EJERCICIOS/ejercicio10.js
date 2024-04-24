const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sumaPares = 0;

for (let i = 0; i < array.length; i++) {
    
    if (array[i] % 2 === 0) {
       
        sumaPares += array[i];
    }
}

console.log("La suma de los elementos pares del array es: " + sumaPares);