const sum = (numOne, numTwo) => numOne + numTwo;
const mult = (numOne, numTwo) => numOne * numTwo;
const div = (numOne, numTwo) => numOne / numTwo;
const sub = (numOne, numTwo) => numOne - numTwo;
const mod = (numOne, numTwo) => numOne % numTwo;

function calculator(operation, numbers) {
  let totOperation = 0;
  totOperation = operation(...numbers);
  return totOperation;
}

let operationChoice = prompt("Inserisci operazione: ");
let numbersChoiche = prompt("Inserisci numeri: ");
const numbers = numbersChoiche.split(",");
const parsedNumbers = [];


for (x of numbers) {
  if (typeof numbers[1] === 'undefined') {
      console.log(numbers[0])
  } else {
      parsedNumbers.push(parseFloat(x));
  } 
}


switch (operationChoice) {
    case "+":
    calculator(sum, parsedNumbers);
    break;
    case "*":
    calculator(mult, parsedNumbers);
    break;
    case "/":
    calculator(div, parsedNumbers);
    break;
    case "-":
    calculator(sub, parsedNumbers);
    break;
    case "%":
    calculator(mod, parsedNumbers);
    break;
}

// oppure come fatto in classe 

// if (operationChoice === "mult") {
//   calculator(mult, numbers);
// }

/*
if (operationChoice === "somma") {
  calculator(sum, parsedNumbers);
}

if (operationChoice === "mult") {
calculator(mult, numbers);
}

if (operationChoice === "dividi") {
  calculator(div, numbers);
}
if (operationChoice === "percentuale") {
  calculator(mod, numbers);
}
if (operationChoice === "sottrai") {
  calculator(sub, numbers);
}
*/


