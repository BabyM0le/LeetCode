let input = [3, 2, 2, 3]
let val = 2
let output = input
let outputVal = 0

for(let i = 0; i < input.length; i++) {
    if(input[i] == val) {
        output[i] = '_' 
        outputVal += 1
    }
}
output.sort().reverse()

console.log(output.length - outputVal, output)
