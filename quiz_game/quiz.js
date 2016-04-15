var read = require('read');

question1 = {
    prompt: "What's your name?\n>",
    correctAnswer: "Andreza"
}

question2 = {
	prompt: "Is Miami a big city?",
	correctAnswer: "Yes"
}

question3 = {
	prompt: "What is JS?",
	correctAnswer: "JavaScript"
}

question4 = {
	prompt: "Which city is Ironhack at?",
	correctAnswer: "Miami"
}

question5 = {
	prompt: "To which language belongs a .rb file?",
	correctAnswer: "Ruby"
}

function displayName (err, input){
	if (err) {
        throw err;
    } else {
    checkAnswer(input)
	}
}

var count = 1;

function checkAnswer(input) {
	if (currentQuestion.correctAnswer !== input) {
		console.log("Incorrect Answer");
	} else {
		console.log("Your  name is: " + input)
	}
}

while (count <= 5) {
	currentQuestion = eval("question"+count)
	read(currentQuestion,displayName)
	count = count + 1;
} 
	console.log("You've finished the Quiz! Congratulations!")
