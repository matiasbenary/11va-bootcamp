# Reduce

## Ejercicio Array 001

- Tenemos un array llamado `numbers` con números enteros al azar.
- Utilizando `reduce`, queremos calcular la suma de todos los números que están en el array.
- Por ejemplo: Si tenemos `[1, 2, 3]`, la suma de todos los números es **6**

```js
const numbers = [6, 1, 34, 94, 3, 17];
const sum = 0;

// codea debajo de este comentario la solucion al ejercicio

console.log(sum);
// deberia mostrar 155
```

## Ejercicio Array 002

- Utilizando `reduce`, queremos calcular la multiplicación de todos los números que están en el array.
- Por ejemplo: Si tenemos `[1, 2, 3, 4]`, la suma de todos los números es **24**
- Ayuda: ojo con el valor de comienzo

```js
const numbers = [6, 1, 34, 94, 3, 17];
const mul = 0;

// codea debajo de este comentario la solucion al ejercicio

console.log(mul);
// deberia mostrar 977976
```

## Ejercicio Array 003

- Tenemos un array llamado `notasDeTPs` con números del 1 al 10, que representan las notas de los distintos trabajos prácticos entregados por Grace Hopper en el curso de Ada.
- Usando `reduce`, queremos calcular la nota promedio final de trabajos prácticos _(el promedio se calcula sumando todas las notas y dividiéndolo por la cantidad de notas)_.
- Por ejemplo: Si tenemos `[7, 8, 9, 10]`, la nota final es **8.5**

```js
const notasDeTPs = [4, 7, 8, 5, 10];
const notaFinal = 0;

// codea debajo de este comentario la solucion al ejercicio

console.log(notaFinal);
// deberia mostrar 6.8
```

## Ejercicio Array 004

- Tenemos un array en una variable `libros` con libros para leer sobre Javascript.
- Usar la función `reduce` para crear un string con todos los titulos de los libros encerrados en una etiqueta `<li></li>`.
- Mostrar por consola el array nuevo, encerrándolo entre `<ul></ul>`

```js
const librosDeJS = [
  "JavaScript for Kids: A Playful Introduction to Programming",
  "Composing Software",
  "Eloquent JavaScript: A Modern Introduction to Programming",
  "JavaScript: The Good Parts",
  "Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries",
  "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
  "JavaScript: The Definitive Guide",
  "You Don’t Know JS",
  "JavaScript Allongé: The Six Edition",
];

// codear acá la solución del ejercicio

// el resultado final debería ser
// <ul><li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li><li>Eloquent JavaScript: A Modern Introduction to Programming</li><li>JavaScript: The Good Parts</li><li>Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries</li><li>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</li><li>JavaScript: The Definitive Guide</li><li>You Don’t Know JS</li><li>JavaScript Allongé: The Six Edition</li></ul>
```

## Ejercicio Array 005

- Tenemos un array llamado `numeros` con números enteros al azar.
- Utilizando `reduce`, queremos crear un nuevo array con todos los números, pero eliminando aquellos que estén repetidos.
- Por ejemplo: Si tenemos `[1, 4, 3, 2, 4]`, el nuevo array sería `[1, 4, 3, 2]`

```js
const numeros = [5, 1, 7, 12, 5, 2, 9, 0, 11, 9, 11];

// codea debajo de este comentario la solucion al ejercicio
const sinRepetidos = ;

console.log(sinRepetidos);
// deberia mostrar [ 5, 1, 7, 12, 2, 9, 0, 11 ]
```

## Ejercicio Array 006

- Crear un documento con el nombre arr_052.js
- Tenemos un array en una variable `numeros` con números al azar.
- Utilizando `reduce` crear un nuevo array con todos los números pares y guardalo en la variable `numerosPares`

```js
const masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];

// codea acá tu solución
const numerosPares = ;

console.log("pares: ", numerosPares);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
```

## Ejercicio Array 007

- Tenemos un array en una variable `numeros` con números al azar.
- Utilizando `reduce` crear un nuevo array con todos los números impares y guardalo en la variable `numerosImpares`

```js
const masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];

// codea acá tu solución
const numerosImpares = ;

console.log("impares: ", numerosImpares);
// deberias tener como resultado
// impares: [43, 11, 37, 29, 9, 3, 37, 25]
```