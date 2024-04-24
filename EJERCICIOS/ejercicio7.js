const valor1 = 29;
const valor2 = 7;

if (Number.isNaN(valor1) && Number.isNaN(valor2)) {
     console.log("Debe ingresar valores enteros válidos.");
} else {
    const min = Math.min(valor1, valor2);
    const max = Math.max(valor1, valor2);

    console.log("Los múltiplos de 3 entre " + min + " y " + max + " son:");
    for (let i = min; i <= max; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}