function contar() {
var nini = document.getElementById('txtini')
var nfim = document.getElementById('txtfim')
var njump = document.getElementById('txtjmp')
var res = document.getElementById('res')
var ini = Number(nini.value)
var fim = Number(nfim.value)
var jump = Number(njump.value)


if(nini.value.length == 0 || nfim.value.length == 0 || njump.value.length == 0) {
    window.alert('Verifique os dados e tente novamente')
} else

if (ini.value < fim) {
for (var r = ini; r <= fim; r=r+jump) {   
    //Contagem crescente 
    res.innerHTML += `&#128073 ${r} `
    }
} else for (var r = ini; r >= fim; r=r-jump) {   
    //Contagem regressiva
    res.innerHTML += `&#128073 ${r} `
    }
    //Nunca esquecer do "+", pois concacetena as respostas.


}

    