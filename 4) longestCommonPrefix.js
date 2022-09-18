const input = ['flower', 'flow', 'flight']
let prefixArr = []
let output = ''

for(let i = 0; i < input.length; i++) {
    prefixArr.push(input[i].split('')[0] + input[i].split('')[1])
}
if(prefixArr[0] == prefixArr[1] && prefixArr[0] == prefixArr[2]) {
    output = prefixArr[0]
} else {
    output = 'There is no common prefix among the input strings.'
}

console.log(output)