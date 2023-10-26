/*
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
*/

let fruits = ['apple', 'orange', 'cherry']

function myFunction(item, index) {
    console.log(index + ': ' + item)
}

fruits.forEach(myFunction)

let numbers = [65, 44, 12, 4]

let soma = 0
/*
for (ind in numbers) {
    soma += numbers[ind]
}
*/
/*
for (let ind = 0, c = numbers.length; ind < c; ind++) {
    soma += numbers[ind]
}
*/

numbers[5] = 70

console.log(numbers)

numbers.forEach(function(item) {console.log(item)})