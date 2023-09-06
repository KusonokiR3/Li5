var n1 = prompt("Digite o valor do produto para parcelar")
var n2 = prompt("Digite o número de parcelas")
n1 = parseInt(n1)
n2 = parseInt(n2)
function parcela(){


    for (i = 1; i <=n2 ; i++) {
        var result= (n1 / i).toFixed(2)
        console.log(result)
    }
    
}
parcela();