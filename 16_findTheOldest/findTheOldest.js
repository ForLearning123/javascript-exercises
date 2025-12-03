const findTheOldest = function(array) {
    const currentDate = new Date();
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.yearOfDeath === undefined){
            element.yearOfDeath =  currentDate.getFullYear();
        };
        
    }

    array.sort((a, b) => {
        if (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth){
            return 1;
        } else {
            return -1;
        };
    })
    return array.at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;
