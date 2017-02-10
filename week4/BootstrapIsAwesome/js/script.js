function triangleArea () {
	var area = .5 * (5 * 6);
	console.log(area);
}

function userTriangleArea (height, width) {
	var area = .5 * (height * width);
	return area;
}

function guessMyNumber () {
	var userNumber = prompt("What's your number?");
	var randomNumber = Math.floor(Math.random()*10) ;
	console.log("Secret number is " + randomNumber);
	if (userNumber == randomNumber) {
		console.log("Good work!");
	} else {
		console.log("Not matched");
	}

}

//Write a JavaScript program to calculate 
//multiplication and division of 
//two numbers (input from user).

// var num1 = prompt("WHat's your number?");
// var num2 = prompt("Can I have your number?");





function iDoMath () {

	var num1 = document.getElementById('myNumber').value;
	var num2 = document.getElementById('myNumber2').value;
	var multiplyNumbers = num1 * num2;

	var divideNumbers = num1 / num2;

	document.getElementById('yourAnswer').innerHTML = '<div><h1>' + multiplyNumbers + '</h1></div>';

	console.log("Your numbers multiplied are: " + multiplyNumbers);
	console.log("Your numbers divided are:" + divideNumbers);
}











