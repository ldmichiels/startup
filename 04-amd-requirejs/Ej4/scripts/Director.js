
define( 'Director', function () {
	//Constructor
	function Director(name, age, nac) {
		this.direName = name;
		this.age = age;
		this.nationality = nac;
		this.quotes = quots;
	};
	
	Movie.prototype = {
		constructor : Director

		getName : function(){ return this.direName; }	

		addQuotes: function(qts){ this.quotes[this.quotes.lenght()])= qts; }

		speak= function(index) { return this.direName + ':- "' + this.quotes[index]+'"'; };

	};

	return Director;
});
