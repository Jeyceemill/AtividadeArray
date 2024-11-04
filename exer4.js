// // 4. Dado o array numbers = [1, 2, 3, 4, 5], utilize o método filter para criar 
// // um novo array contendo apenas os números pares.

// let numero =  [1, 2, 3, 4, 5]

 
// let par = numero.filter((numero) =>{
//     return numero  / 2 === 0 
// })

// console.log(par);

let numeros = [1, 2, 3, 4, 5,]
let numerosPares = numeros.filter((numeros) =>{
    return numeros % 2 == 0
})

console.log(numerosPares); 

 
