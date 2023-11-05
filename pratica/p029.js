let a = [200, 50, 100]
let total = a[0] * 2
console.log(total)

for (let ind in a) {
   total -= a[ind]
}

console.log(total)
