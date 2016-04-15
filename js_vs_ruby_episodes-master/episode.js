var fs = require('fs')
fs.readFile("./GoTEpisodes.json", 'utf8', fileActions);

function fileActions(err, file){ 
    if (err) {
        throw err;
    } else {
	    var episodes = JSON.parse(file);
	    var sortedEpisodes = loopAndSort(episodes);
	    var my_list = new EpisodeList(sortedEpisodes); 	
		my_list.printEpisodes();
    	
    }

}

function loopAndSort(episodes){
	var realEpisodes = [];

	episodes.forEach(function(old_ep){
		var newEp = new Episode(old_ep.title, old_ep.episode_number, old_ep.description, old_ep.rating)
		realEpisodes.push(newEp);
	})

	// var stars = " ";
	// for (j = 0; j <= 9; j++) {
	// var ratings = Math.floor(episodes[j].rating);
	// 	// episodes[j];
	// 	// for (i = 1; i <= ratings; i++) {
	// 	// 	stars = stars + "*";
	// 	// 	console.log(stars);
	// 	// }
	// }



	return realEpisodes;
}

var Episode = function(title, episode_number, description, rating){
	this.title = title;
	this.episode_number = episode_number;
	this.description = description;
	this.rating = rating;
}

Episode.prototype.print = function(){
	console.log(`${this.episode_number}: ${this.title}` )
	console.log(`${this.description}` )
	console.log(`${this.rating}` )
}

var EpisodeList = function(episodes){
	this.episodes = episodes;
}

EpisodeList.prototype.printEpisodes = function(){
	this.episodes.forEach(function(episode){
		episode.print();
	})
}


// var episode1 = new Episode(episodes[0]);
// var episode2 = new Episode("Winter has been here", 2, "Winter came", 8.5)
//var my_list = new EpisodeList()
// var my_list = new EpisodeList([episode1]);
