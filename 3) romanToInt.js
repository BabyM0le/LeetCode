const input = 'IXIVII'
const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}
let numArray = []
let output = 0

let romanArray = input.toUpperCase().split('')
for(let i = 0; i < romanArray.length; i++) {
    numArray.push(values[romanArray[i]])
}

// Adds up numArray
for(let i = 0; i < numArray.length; i++) {
    if(numArray[i] < numArray[i + 1]) {
        output += numArray[i + 1] - numArray[i]
        i += 1
    } else {
        output += numArray[i]
    }
}



console.log(output)
console.log(numArray)
console.log(romanArray)