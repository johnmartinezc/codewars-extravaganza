function getSum(a, b) {
    let i = 0
    if (a === b) {
        return a, b

    } else if (a < b) {

        return a + getSum(a + 1, b)
    } else {
        return a + getSum(a - 1, b)
    }

}
console.log(getSum(4, 3))

// function GetSum(a, b) {
//     if (a == b) {
//         return a
//     } else if (a < b) {
//         return a + GetSum(a + 1, b)
//     } else {
//         return a + GetSum(a - 1, b)
//     };
// }
// console.log(GetSum(2, 2));