// 6. Crie o seguinte array com os valores let idades [ 16, 48, 23, 22, 45, 8, 
//     12] 
//     a. Utilize o método filter para selecionar apenas as idades que são 
//     maiores ou igual a 18; 
//     b. Agora forEach para passar uma mensagem informando a idade 
//     do usuário. (Sua idade é: ${idade}).

let idades = [16, 48, 23, 22, 45, 8, 12]
 let maioresDeIdade = idades.filter ((idade) => idade >= 18) 

   maioresDeIdade.forEach (idade => {

    console.log(`(Sua idade é: ${idade})`);
   })
   