const palindromes = function (str) {
    let ordered = str.toUpperCase();
    ordered = ordered.split("").filter(
      (x) => x != "." && x != " " && x != "!" && x != ","
    );
  
    let reversed = "";
    for (let i = ordered.length -1; i >= 0; i--){
      reversed += ordered[i]
    }

    ordered = ordered.join("");
    return ordered === reversed;

};
// Do not edit below this line
module.exports = palindromes;
