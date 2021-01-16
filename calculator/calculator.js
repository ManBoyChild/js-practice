function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (arrayIn) {
	let sum = 0;
	for (let i = 0; i < arrayIn.length; i++) {
		sum += arrayIn[i];
	}
	return sum;
}

function multiply (arrayIn) {
	let multiply = arrayIn.reduce((a, b) => a*b, 1);
	return multiply;
}

function power(a, b) {
	return Math.pow(a, b);	
}

function factorial(factorial) {
	let factorialArray = [];
	if (factorial === 0 || factorial === 1) {
		return 1;
	}
	for (let i = 1; i <= factorial; i++) {
		factorialArray.push(i);
	}
	return factorialArray.reduce((a,b) => a*b);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}