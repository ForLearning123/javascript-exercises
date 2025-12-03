const reverseString = function(str) {
    let arr = str.split("");
    let result = ""
    for (let i = str.length - 1; i >= 0; i--){
      result += arr[i];
    }
    return result
};
// Do not edit below this line
module.exports = reverseString;

