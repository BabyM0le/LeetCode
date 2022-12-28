let input = -121
let output

function reverseString(string) {
    let reveredString = string.split("")
    reveredString = reveredString.reverse()
    reveredString = reveredString.join("")
    return reveredString
}

let string = input.toString()

if(string == reverseString(string)) {
    output = true
} else {
    output = false
}

console.log(input)
console.log(output)
