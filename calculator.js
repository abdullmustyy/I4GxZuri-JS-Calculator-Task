const add = (n1, n2) => {
  return n1 + n2;
};

const subtract = (n1, n2) => {
  return n1 - n2;
};

const multiply = (n1, n2) => {
  return n1 * n2;
};

const divide = (n1, n2) => {
  return n1 / n2;
};

const modulo = (n1, n2) => {
  return n1 % n2;
};

const operations = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide,
  "%": modulo,
};

const calculator = () => {
  let num1 = parseFloat(prompt("First Number: "));

  let operationType = prompt(
    "+\n-\n*\n/\n%\n\nPick an operator, to perform operation."
  );

  let num2 = parseFloat(prompt("Second Number: "));

  let calculationFunction = operations[operationType];
  let answer = calculationFunction(num1, num2);
  alert(`${num1} ${operationType} ${num2} = ${answer}.`);
};

const calculate = () => {
  let operate = prompt(
    "To perform operation, type 'y'. To turn the calculator off, type 'n': "
  ).toLowerCase();

  if (operate === "n") {
    return;
  } else if (operate === "y") {
    calculator();
  } else {
    alert("That is not a valid input.");
  }
  calculate();
};

alert(
  "Binary Operation Calculator.\n   ...provides solution to basic binary operations.\n"
);
calculate();
