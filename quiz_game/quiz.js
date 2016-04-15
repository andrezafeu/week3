var read = require('read');
var Question = require('./question.js');

var count = 1;

var totalScore = 0;

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
		if (currentQuestion.correctAnswer !== input) {
			read(currentQuestion,displayAnswer);
			totalScore = totalScore - parseInt(currentQuestion.points);
		} else {
	    	count = count + 1;
	    	if (count <=5) {
				currentQuestion = eval("question"+count)
				read(currentQuestion,displayAnswer)
	    	} else {
				console.log("You've finished the Quiz! Congratulations!")
				console.log(totalScore);
	    	}
	    }
    }
}	

Question.prototype.checkAnswer = function(input) {
	if (currentQuestion.correctAnswer !== input) {
		console.log("Incorrect Answer. Try again.");
		totalScore = totalScore - parseInt(this.points);

	}
	console.log("Your answer is: " + input);
	totalScore = totalScore + parseInt(currentQuestion.points);
};
read(currentQuestion,displayAnswer)
