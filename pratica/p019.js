let numbers = [65, 44, 12, 4]

function myF(elmnt, index, arr) {
    arr[index] = elmnt*10
}

numbers.forEach(myF)

console.log(numbers)

let nums = [1,2,3,4,5]

function fMulti(n, index, arr) {
    arr[index] = n*n*n
}

nums.forEach(fMulti)

console.log(nums)