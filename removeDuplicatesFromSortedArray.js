let input = [1, 1, 2]
let output = input

for(let i = 0; i < input.length; i++) {
    console.log(`I = ${i}`)
    for(let u = 1; u < input.length; u++) {
        console.log(`U = ${u}`)
        if(input[i] == input[u]) {
            output[i] = ''
        }
    }
}

console.log(output)
