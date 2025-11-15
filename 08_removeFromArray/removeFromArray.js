const removeFromArray = function(array, ...elementsToRemove) {
    return array.filter((x) => !elementsToRemove.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
