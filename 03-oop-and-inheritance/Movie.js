//class
//Create a Movie Object:

function Movie(){ 
	this.movieName = '';
	this.year = '';
	this.director = '';
}
	
	Object.defineProperty(Movie.prototype, 'movieName'	, { writable:  true
		                                                , configurable: true
		                                                , enumerable:   true });

	Object.defineProperty(Movie.prototype, 'year'	, { writable:  true
		                                                , configurable: true
		                                                , enumerable:   true });

	Object.defineProperty(Movie.prototype, 'director'	, { writable:  true
		                                                , configurable: true
		                                                , enumerable:   true });

	Movie.play = function(){ return "Playing " + this.movieName + " film."; };

	Movie.stop = function(){ return "Stopped " + this.movieName + " film."; };

