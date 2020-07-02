let numero = prompt('Ingrese un número');
let miArreglo = [];

let index = 0;
while (index != -45) {
  numero = prompt('Ingrese un número');
  if (numero == ''){
    index = -45;
  } else if (isNaN(numero) || numero == ' '){

  } else {
    miArreglo[index] = parseInt(numero);
    index++;
  }
}
miArreglo.sort((a, b) => a - b);
const primerElemento = miArreglo.shift();

let mayor = 0;
for (let index = 0; index < miArreglo.length; index++){
  let actual = miArreglo[index];
  if (actual > mayor){
    mayor = actual;
  }
}

let suma = 0;
for (let index = 0; index < miArreglo.length; index++){
  suma += miArreglo[index];
}
let promedio = suma / miArreglo.length;

//console.log(miArreglo);
console.log(`El número mayor es: ${mayor}`);
console.log(`El número menor es: ${primerElemento}`);
console.log(`El promedio es de: ${promedio}`);
//console.log(`La mediana es de: ${mediana}`);





  


