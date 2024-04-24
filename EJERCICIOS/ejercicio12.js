let listaPersonas = [
    { nombre: "Flor", sexo: "femenino", edad: 16 },
    { nombre: "Alan", sexo: "masculino", edad: 7 },
    { nombre: "Rosa", sexo: "femenino", edad: 19 },
    { nombre: "Juan", sexo: "masculino", edad: 15 },
    { nombre: "Valentino", sexo: "masculino", edad: 18 },
  ]

let sumaEdades = 0;
    for (let i = 0; i < listaPersonas.length; i++) {
        sumaEdades += listaPersonas[i].edad;
    }

let promedioEdad = sumaEdades / listaPersonas.length;

let mujeres = listaPersonas.filter(persona => persona.sexo === "femenino");
mujeres.sort((a, b) => b.edad - a.edad);

let nombreMujerMayorEdad = mujeres[0].nombre;

let hombres = listaPersonas.filter(persona => persona.sexo === "masculino");
hombres.sort((a, b) => a.edad - b.edad);

let nombreHombreMenorEdad = hombres[0].nombre;

let edadesMujeres = mujeres.map(mujer => mujer.edad);
let sumaEdadesMujeres = edadesMujeres.reduce((a, b) => a + b, 0);

let promedioEdadMujeres = sumaEdadesMujeres / edadesMujeres.length;

console.log("Promedio de edad total:", promedioEdad)
console.log("Nombre de la mujer con mayor edad:", nombreMujerMayorEdad)
console.log("Nombre del hombre con menor edad:", nombreHombreMenorEdad)
console.log("Promedio de edad de las mujeres:", promedioEdadMujeres)