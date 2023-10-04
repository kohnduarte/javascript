let valores = [8, 1, 7, 4, 2, 9]
valores.sort(function(a, b) {return b - a})
console.log(valores)
/*
for (index = 0; index < valores.length; index++) {
    console.log(`O elemento de índice ${index} possui valor ${valores[index]}`)
}
*/

for (let index in valores) {
    console.log(`O elemento de índice ${index} possui valor ${valores[index]}`)
}
