let a = [11, 4, 7, 32, 69, 18, 45, 0, 21]
delete a[0]
delete a[5]
delete a[7]
//console.log(a)

//a = a.filter(function(item) {return true})

//console.log(a)

a[0] = undefined 
a[5] = null
a[7] = undefined

console.log(a)

a = a.filter((x) => x !== undefined && x != null)

console.log(a)