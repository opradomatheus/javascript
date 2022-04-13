let num = document.getElementById('txtn')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores  = []


//Verificar se o número digitado está entre 1 e 100

function isNumero(n){
    if(Number(n) >= 1  && Number(n) <= 100){
        return true
    } else {
        return false
    }
}


//Verifica se o número já está na lista

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já adicionado!')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione pelo menos um valor antes de finalizar!')
    } else {
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
            for( let pos in valores) {
                soma += valores[pos]
                if (valores[pos] > maior) 
                    maior = valores[pos]
                
                if (valores[pos] < menor)
                menor = valores[pos]
            } 
        let tot = valores.length
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} Números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma entre os números é ${soma}.</p>`
        res.innerHTML += `<p>A média dos número é ${media}.</p>`
    }
}



