let num = [5, 2, 6, 3, 8 ]

num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`${num[0]}`)
let pos = num.indexOf(8)

if( pos == -1){
    console.log('Valor não encontrado!')
} else {
    console.log(`O valor 8 está na  posição ${pos}`)
}





