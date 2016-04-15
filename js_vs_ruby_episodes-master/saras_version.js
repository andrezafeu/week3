var fs = require('fs');
fs.readFile("./GoTEpisodes.json", 'utf8', fileActions);
​
function fileActions(err, file){ 
    if (err) {
        throw err;
    }
    else {
		var episodes = JSON.parse(file);
		var sorted_episodes = sortedResult(episodes)
    }
}
​
function sortedResult(episodes){
for (j = 0; j <= 9; j++) {
​
	console.log(episodes[j]);
	// console.log("Rating: " + episodes[j].rating);
    var ratings = Math.floor(episodes[j].rating);
    // console.log(episodes[0].rating);
​
	var stars = " ";
	// var rating;
	
	for (i = 1; i <= ratings; i++) {  //stop when i is less/equal to 8
    	stars = stars + "*";
	}
	console.log(stars);
}
}
    //print all episodes in order
}
var Episode = function(title, episodeNumber, description, rating){
	this.title = title;
	this.episodeNumber = episodeNumber;
	this.description = description;
	this.rating = rating;
}
Episode.prototype.print= function(){
	console.log(`${this.episodesNumber}: ${this.title}` )
	console.log(`${this.description}` )
	console.log(`${this.rating}` )
}
​
var EpisodeList = function(episodes){
	this.episodes = episodes;
}
EpisodeList.prototype.printEpisodes = function(){
	this.episodes.forEach(function(episode){
		episode.print();
	})
}
​




var episode1 = new Episode( episodes[0] 
​
// //-------------------------------------------old code below
var j = 0;
for (j = 0; j <= 9; j++) {
​
// 	// var single_episode = new episodes();
// 	// var single_episode = function() {
// 	// this.episode_number[j];
// 	// }
​
//  //    console.log("Title: " + episodes[j].title);
//  //    // console.log(episodes[0].title);
//  //    // console.log("Title: " + );
//  //    console.log("Episode #:" + episodes[j].episode_number);
//  //    // console.log(" #:");
//  //    // console.log(episodes[0].episode_number);
​
//  //    console.log(episodes[j].description);
    
console.log("Rating: " + episodes[j].rating);
var ratings = Math.floor(episodes[j].rating);
//     // console.log(episodes[0].rating);
var stars = " ";
   
for (i = 1; i <= ratings; i++) {  //stop when i is less/equal to 8
stars = stars + "*";
// 	// }
// 	// console.log(stars);
// 	// // return stars; //we dont need this 
// 	// }
//  //  // });
}	