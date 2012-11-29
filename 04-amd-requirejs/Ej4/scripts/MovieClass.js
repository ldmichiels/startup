
define ( ["Movie", "Director"],function (movie, director){
	//Constructor
	function Movie(tit, year, dir) {
		this.title = tit;
		this.year = year;
		this.director = dir;
	};
	
	Movie.prototype = {

		constructor : Movie
		
		,whoDirected : function() {
			return director.prototype.getName();
			}
			
		,play : function(att){
				return "Playing " + att + " film.";
			}

		,stop : function(att){
				return "Stopped " + att + " film."; 
			}	
	};

	return Movie;
});
/*
define(  ['depA', 'depB', 'depC' ], function (depA, depB, depC) {

        function myConstructor {};
        myConstructor.prototype = {
            // specify methods and properties
        };
        return myConstructor;
    }
);
*/