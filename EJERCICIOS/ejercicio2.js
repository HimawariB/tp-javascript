const valor1 = 4;
const valor2 = 8;
const valor3 = 6;

let mayor = valor1;
if (valor2 > mayor){
    mayor = valor2;
}

if (valor3 > mayor){
    mayor = valor3;
}

let menor = valor1;
if (valor2 < menor){
    mayor = valor3;
}

if (valor3 < menor){
    menor = valor3;
}

console.log("El mayor es: " + mayor);
console.log("El menor es: " + menor);
