const valor1 = 7;
const valor2 = 3;

if (Number.isNaN(valor1) && Number.isNaN(valor2)) {
     console.log("Debe ingresar valores enteros válidos.");
} else {
    const min = Math.min(valor1, valor2);
    const max = Math.max(valor1, valor2);

    console.log("Los elementos entre " + min + " y " + max + " son:");
    for (let i = min + 1; i < max; i++) {
        console.log(i);
    }
}