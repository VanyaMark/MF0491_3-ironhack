/**
 * A Tinder le gusta conocer la diferecia de edad entre dos personas para incluirlo en su perfil. Crea una función que devuelve un número positivo indicando la diferencia de edad entre las dos personas
 * 
 * @param {number} age1 Edad usuario 1 
 * @param {number} age2 Edad usuario 2
 */

function loveDifference(age1, age2) {

}

// Prueba 1: Diferencia básica
console.log(loveDifference(25, 20)); // Resultado esperado: 5

// Prueba 2: Diferencia cuando los valores están invertidos
console.log(loveDifference(20, 25)); // Resultado esperado: 5

// Prueba 3: Edad iguales
console.log(loveDifference(30, 30)); // Resultado esperado: 0

// Prueba 4: Diferencia con edades grandes
console.log(loveDifference(100, 80)); // Resultado esperado: 20