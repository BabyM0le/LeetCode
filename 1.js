const nums = [2,7,11,15]
const target = 9

for(let i = 0; i < nums.length; i++) {
    for(let u = 1; u < nums.length; u++) {
        if(nums[i] + nums[u] == target) {
            console.log([i, u])
            return
        }
    }
}