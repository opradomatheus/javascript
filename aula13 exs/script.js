function contar() {
  let inicio = document.getElementById("inicio")
  let fim = document.getElementById("fim")
  let pular = document.getElementById("pular")
  let msg = document.getElementById("msg")

  if (inicio.value.length == 0 ||fim.value.length == 0 || pular.value.length == 0) {
    msg.innerHTML = 'Não foi possivel contar!'
    msg.style.color = 'red'
    msg.style.fontWeight = 'bold'
} else {
      msg.innerHTML = `Contando:`
      let i = Number(inicio.value)
      let f = Number(fim.value)
      let p = Number(pular.value)

      if ( p == "") {
          alert('Pular inválido, Novo valor atribuido a Pular: 1')
       p = 1
      }


      //Contagem crescente
        if(i < f) {
            for (let c = i; c <= f; c += p) {
                msg.innerHTML += ` ${c} `
                msg.style.color = 'blue'
                msg.style.fontWeight = 'bold'
            }
        } else {
            //Contagem decrescente
            for (let c = i; c >= f; c -= p) {
                msg.innerHTML += ` ${c} `
                msg.style.color = 'blue'
                msg.style.fontWeight = 'bold'         
            }
        }

    }
}
