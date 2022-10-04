function getCount(str){
    let only = ""
     for(let i = 0; i < str.length ; i++){
         if(str[i] === "a" || str[i] === "e"||str[i] === "i" || str[i] === "o"|| str[i] === "u" ){
             only += str[i]
            }
        }
        return only.length
 }
 console.log(getCount("here are all of the games"))
 

