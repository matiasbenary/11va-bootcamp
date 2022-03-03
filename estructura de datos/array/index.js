const edades = [
  123,
  'palabras',
  true,
  [123, 99],
  {
    nombre: 'matias',
    numeros: [123123, 123, 99, 234, 234, 56],
  },
];

console.log(edades[3][1]);
console.log(edades[4].numeros[2]);
const nombres = ['Matias', 'Pepito', 'Dolores', 'Sol'];
console.log(nombres[3]);
// const usuarios = [
//   {
//     nombre: 'Matias',
//     edad: 26,
//   },
//   {
//     nombre: 'Pepito',
//     edad: 42,
//   },
//   {
//     nombre: 'Dolores',
//     edad: 31,
//   },
//   {
//     nombre: 'Sol',
//     edad: 22,
//   },
// ];

// console.log(usuarios[3].edad);

// const user = {
//   nombre: 'Sol',
//   edad: 22,
// };
// //estatica
// console.log(user.nombre);
// //dinamica con una variable
// const prop = 'edad';
// console.log(user[prop]);
// console.log(user.edad);

// // primer parametro: el valor de inicializacion
// // segundo parametro: codicion de parada
// // tercero parametro: incrementa o decrementa la variable
// for (let index = 0; index < usuarios.length; index++) {
//   console.log(index,usuarios[index])
// }

const usuarios = [
  {
    nombre: 'Matias',
    edad: 26,
  },
  {
    nombre: 'Pepito',
    edad: 42,
  },
  {
    nombre: 'Dolores',
    edad: 31,
  },
  {
    nombre: 'Sol',
    edad: 22,
  },
  {
    nombre: 'Carolina',
    edad: 14,
  },
  {
    nombre: 'Giselle',
    edad: 17,
  },
];

for (const usuario of usuarios) {
  console.log(usuario);
}

for (const index in usuarios) {
  const usuario = usuarios[index];
  console.log(index, usuario);
}

const usuario = {
  nombre: 'Dolores',
  edad: 31,
  tercerProp: 'valor de la prop',
};

for (const prop in usuario) {
  console.log(prop, usuario[prop]);
}

// usuarios.forEach()
// definicion => nombre de la variable de la función
const imprimirResultado = (numA, numB, operacion) => {
  console.log(
    `La operacion entre A que vale ${numA} y B que vale ${numB} el resultado es ${operacion(numA,numB)}`
  );
};

const suma = (numA, numB) => numA + numB;
const resta = (numA, numB) => numA - numB;
const multiplicar = (numA, numB) => numA * numB;

console.log(suma(1,3))
console.log(suma(1,3))

imprimirResultado(1,3,suma)
imprimirResultado(1,3,resta)
imprimirResultado(1,3,multiplicar)
imprimirResultado(1,3,(numA, numB) => numA + numB)


// btn.addEventListener('click',()=>{

// })

// FOREACH => for of
const imprimirUsuario = usuario =>{
  console.log(usuario)
}

usuarios.forEach(imprimirUsuario)

// MAP => Crea un nuevo array con la modificacion que yo haga
const usuariosSistema = usuarios.map(usuario=>{
  return {
    nombre:usuario.nombre.toUpperCase()
  }
})

console.log(usuariosSistema);

//FILTER => Elimina los elementos que no cumplan la condicion
const usuariosMayores = usuarios.filter(usuario=>{
  return false
})

console.log(usuariosMayores);
