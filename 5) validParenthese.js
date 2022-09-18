const input = '()'
let output

const split = input.split('')

for(let i = 0; i < input.length; i++) {
    if(split[i] == '(') {
        output = false
        if(split[i + 1] == ')') {
            output = true
        }
    } else if(split[i] == '{') {
        output = false
        if(split[i + 1] == '}') {
            output = true
        }
    } else if(split[i] == '[') {
        output = false
        if(split[i + 1] == ']') {
            output = true
        }
    }
}
console.log(output)