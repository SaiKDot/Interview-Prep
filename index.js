// b = 25;
// var b;
// console.log(b);

// console.log("3" + 3);
// console.log(3 - "3");
// console.log("3" - 3);


function getLongestNonRepeatingString(str) {
    const strArr = str.split("")
    console.log(strArr.length);
    let longestStr = ""
    let prevStr = ""
    for(let i=0;i<strArr.length;i++) {
        i > 0 ? prevStr = strArr[i-1] : prevStr = strArr[i];
        if(i > 0) {
            if(strArr[i] !== strArr[i-1]) {
                longestStr += strArr[i];
                console.log(longestStr);
            } else {
                longestStr = ""
            }
        }
    }
    return longestStr;
}

const str = "ABCDDDEDGHIJAAFIGHSRLADIR"

console.log(getLongestNonRepeatingString(str));