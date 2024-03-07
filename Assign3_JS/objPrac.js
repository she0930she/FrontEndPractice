// Problem 1
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
    }

function sumAllSalaries(obj){
    let tol = 0
    for (let key in salaries){
        tol += salaries[key]
    }
    return tol
}

console.log(sumAllSalaries(salaries))


// Problem 2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
    };

function multiplyNumeric(obj){
    //console.log(menu)
    for (let key in obj){
        if (typeof(obj[key]) === "number"){ // check type use triple equal
            obj[key] = obj[key] * 2
        }
    }
}

multiplyNumeric(menu)
console.log(menu)



// Problem 3

function checkEmailId(strWords){
    let firstIdx = -1
    let secondIdx = -1
    for (let idx in strWords){
        if (strWords[idx] === "@"){
            firstIdx = idx;
        }
        if (strWords[idx] === "." && firstIdx != -1 && (idx - firstIdx >= 2)){ // difference >= 2
            secondIdx = idx
        }
    }
    if (firstIdx != -1 && secondIdx != -1) return true;
    return false;

}
console.log(checkEmailId("geg@.gew"), "F")
console.log(checkEmailId("geg@zzz.gew"), "T")
console.log(checkEmailId("geg@gew"), "F")
console.log(checkEmailId("geg.gew"), "F")


function checkEmailIdUsingRegex(str) {
    // Regular expression to match the email pattern
    const regex = /^[^@]+@[^@.]+\.[^@.]+$/i;
  
    // Test the string against the regular expression
    return regex.test(str);
  }
  
  // Test cases
//   console.log(checkEmailIdUsingRegex("example@gmail.com")); // Output: true
//   console.log(checkEmailIdUsingRegex("user123@yahoo.co.uk")); // Output: true
//   console.log(checkEmailIdUsingRegex("invalidemail@.com")); // Output: false
//   console.log(checkEmailIdUsingRegex("anotherinvalidemail.com")); // Output: false
//   console.log(checkEmailIdUsingRegex("email@domain")); // Output: false
  


  // Problem 4

  function truncate(strSentence, maxLength){
    if (strSentence.length <= maxLength) return strSentence;
    
    let newStr = ""
    // cover str len > maxLen, maxLen is 0, 1,2,3
    if (maxLength < 3) {
        for (let i = 0;i< maxLength; i++){
            newStr += strSentence[i]
        }
        return newStr
    }

    for (let i = 0;i< maxLength-3; i++){
        newStr += strSentence[i]
    }
    newStr += "..."
    return newStr

  }

  console.log(truncate("What I'd like to tell on this topic is:", 20))
  console.log(truncate("What I'd ", 20))


function truncateUsingSlice(strSentence, maxLength){
    if (strSentence.length <= maxLength) return strSentence;

    let newStr = ""
    if (maxLength < 3) {
        for (let i = 0;i< maxLength; i++){
            newStr += strSentence[i]
        }
        return newStr
    }

    newStr = strSentence.slice(0, maxLength-3) // start from idx 0, delete the rest after maxLen-3
    newStr += "..."
    return newStr

}
//   console.log(truncateUsingSlice("What I'd like to tell on this topic is:", 20))
//   console.log(truncateUsingSlice("What I'd ", 20))
//   console.log(truncateUsingSlice("Hi everyone!", 1))
// console.log(truncateUsingSlice("Hi everyone!", 2))


// Problem 5

arr = ["James", "Brennie"]
arr.push("Robert")
console.log(arr)

function replaceMiddleItem(arr, replaceName){
    const middleIdx = Math.floor(arr.length/2)
    arr[middleIdx] = replaceName
}

replaceMiddleItem(arr, "Calvin")
console.log(arr)


console.log(arr.shift())
console.log(arr)

arr.unshift("Rose", "Rega")
console.log(arr)