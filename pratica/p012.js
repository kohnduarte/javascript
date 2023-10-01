// laço 'for' com 2 inicializações e 2 atualizações

for (i = 0, j = 10; i <= 10; i++, j--) {
    console.log(i*j)
    if (i == j) {
        console.log('i = j !!!')
    }
}