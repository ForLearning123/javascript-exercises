// const sumAll = function(val1, val2) {
//     if (typeof val1 != "number" || typeof val2 != "number" 
//     || val1 < 0 || val2 < 0 || !Number.isInteger(val1) 
//     || !Number.isInteger(val2)){
//         return "ERROR";
//         }
   
//     let result = 0;
    
//     if (val1 < val2){
//         for (let i = val1; i <= val2; i++){
//             result += i
//         }
//     } else {
//         for (let i = val2; i <= val1; i++){
//             result += i
//         }
//     }

//     return result;
// };


const sumAll = function(min, max) {
    if (!Number.isInteger(min) ||!Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
        [min, max] = [max, min];
    }

    let sum = 0;
    for (let i = min; i <= max; i++){
        sum += i;
    }
    return sum;
    
};
// Do not edit below this line
module.exports = sumAll;