function squareDigites(num) {
    num = String(num)
    let final = ""
    for (i = 0; i < num.length; i++) {
        final += Number(num[i] ** 2)
        

    }
    return Number(final)
}
// console.log(squareDigites(9119))


