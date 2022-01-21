// 1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18


let idade = 20
if(idade >= 18){
   console.log("Você é maior que 18") 
}

// 2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true


 let humano = true

if(idade > 18 && humano == true ){
  console.log("Você é maior de idade e é humano")
 }


// 3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro

let mes = "janeiro"

if(mes == "Janeiro" || mes == "Dezembro"){
   console.log("Você faz aniversário em janeiro ou dezembro")
}else{
  console.log("Que pena você não faz agora só em janeiro!!")
}