function positiveSum(arr) {
    if (arr.length === 0) {
        return 0
    }

    let sum = 0
    let i = 0
    while (i < arr.length) {

        if (arr[i] > 0) {
            sum += arr[i]
        }
        i++
    }
    return sum
}

console.log(positiveSum("0"))