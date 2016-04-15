var words, message;

words = [
	"dead",
	"bygone",
	"landing",
	"cheaply",
	"assumed",
	"incorrectly",
	"attention",
	"agent"
	];

function decoder (words) {
	var index = 0;
	var secretMessage  = '';
	for (var i=0; i<words.length; i++) {
		if (index ===5) {
			index =0;
		}
		secretMessage += words[i].charAt(index);
		index++;
	}
	return secretMessage;
}


message = decoder(words);
console.log(message);
