function accum(s){
    let str = ""

    for(let i = 0; i < s.length; i++){
        str += s[i].toUpperCase()
        console.log(str)

        for(let n = 0; n <i; n++){
            str += s[i].toLowerCase()
            console.log(str)
        }
        str += "-"
        console.log(str)
    }
    return str.slice(0,-1)
}
console.log(accum("abcd"))