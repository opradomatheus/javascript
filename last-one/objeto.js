let amigo = {nome:`Matheus`, peso:60.5, sexo:`Masculino`, engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}


amigo.engordar(2)

console.log(`${amigo.nome} pesa ${amigo.peso}Kg e é do sexo ${amigo.sexo}`)