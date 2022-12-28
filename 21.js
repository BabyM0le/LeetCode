const list1 = []
const list2 = [0]
let output = []

for(let i = 0; i < list1.length; i++) {
    output.push(list1[i])
}
for(let i = 0; i < list2.length; i++) {
    output.push(list2[i])
}

output = output.sort()
console.log(output)
