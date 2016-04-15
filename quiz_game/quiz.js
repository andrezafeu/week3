var read = require('read');
var Question = require('./question.js');

var count = 1;


question1 = new Question("What's your name?\n>", "Andreza", 1);
question2 = new Question("Is Miami a big city?", "Yes", 2);
question3 = new Question("What is JS?", "JavaScript", 3);
question4 = new Question("Which city is Ironhack at?", "Miami", 4);
question5 = new Question("To which language belongs a .rb file?", "Ruby", 5);

currentQuestion = eval("question"+count)
function displayAnswer (err, input){
	if (err) {
        throw err;
    } else {
    		currentQuestion.checkAnswer(input);
    		count = count + 1;
    	if (count <=5) {
			currentQuestion = eval("question"+count)
			read(currentQuestion,displayAnswer)
    	} else {
			console.log("You've finished the Quiz! Congratulations!")
    	}
    }
}	

Question.prototype.checkAnswer = function(input) {
	if (currentQuestion.correctAnswer !== input) {
		console.log("Incorrect Answer");
	} else {
		console.log("Your answer is: " + input)
	}
}

read(currentQuestion,displayAnswer)