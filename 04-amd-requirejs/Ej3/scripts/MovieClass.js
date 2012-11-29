$.fn.Movie = (function () {
	//Constructor
	var Movie = function () {};

	//Private
	var attributes = {};
	var observers = [];

	
	Movie.prototype = {
		constructor : Movie

		,getAttribute : function (key){
			return attributes[key];
			}

		,setAttribute : function (key,value){
				attributes[key] = value;
			}

		,play : function(att){
				return "Playing " + att + " film.";
			}

		,stop : function(att){
				return "Stopped " + att + " film."; 
			}	
	};

	return Movie;
})();
