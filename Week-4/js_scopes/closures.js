function counter(){
let counter = 0;

function count(){
    counter++;
    return counter
  }

return count;
}

var firstCounter = new counter();
var secondCounter = new counter();

const firstValues = [];
firstValues.push(firstCounter());
firstValues.push(firstCounter());
firstValues.push(firstCounter());
firstValues.push(firstCounter());
firstValues.push(firstCounter());

const secondValues = [];
secondValues.push(secondCounter());
secondValues.push(secondCounter());
secondValues.push(secondCounter());

console.log("firstValues :"+ firstValues);
console.log("secondValues :"+ secondValues);







