function printBox(width, height) {
    for (let y= 1; y <= height; y++) {
        if (y == 1 || y == height) {
            console.log('*'.repeat(width))
        } 
        else {
            console.log('*' + ' '.repeat(width - 2) + '*')
        }
    }
}
printBox(6, 4)