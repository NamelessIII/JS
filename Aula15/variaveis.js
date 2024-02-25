let valores = [8,1,7,4,2,9] //criar um  vetor
valores.push(3) //adicionar o numero ao final do vetor
valores.sort() //classificar os numeros do menor para o maior

console.log(valores)

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} //Loop para mostrar as posições (indices) e o valor delas no vetor

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} //Faz exatamente a mesma coisa de cima, mais facil

console.log(valores.indexOf(8)) //o uso do .indesOf() serve para pesquisar o indice(posição) do numero.
//Caso o valor não seja encontrado, o resultado sai como -1, recomenda se usar if else