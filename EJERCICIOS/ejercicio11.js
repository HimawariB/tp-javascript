const palabra = "enredadera";

const letras = {};


for (let i = 0; i < palabra.length; i++) {

    const letra = palabra[i];

    if (letras[letra]) {
        
        letras[letra]++;
    } else {
        
        letras[letra] = 1;
    }
}

console.log("Letras distintas y sus repeticiones en la palabra '" + palabra + "':");
for (const letra in letras) {
    console.log("'" + letra + "': " + letras[letra] + " repeticiones");
}