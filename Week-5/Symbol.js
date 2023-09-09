
var transaction_counter = 1;

function generateTransactionId(){
  transaction_id = "transaction_id_"+transaction_counter++
  return Symbol(transaction_id)
}

const transaction1 = generateTransactionId(); 
console.log(transaction1);

const transaction2 = generateTransactionId(); 
console.log(transaction2);

const transaction3 = generateTransactionId();
console.log(transaction3);