//let myName 
//
//myName = 'Rinat'
//
//console.log(myName)
//
//const mySecondName = 'Izmailov'
//
//console.log(mySecondName)

const objectA = {
    a:10,
    b:true
}

const copyOfA = objectA

copyOfA.a = 20

console.log(objectA) // на выходе будет { a: 20, b: true }

copyOfA.c = 35

console.table(objectA)


copyOfA.d = 'Change object'

console.table(objectA)