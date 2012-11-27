$(document).ready(function(){
  console.log("Arranca");
  inicializar();
});

function inicializar(){

	// Aliases for the rather verbose methods on ES5
	var descriptor  = Object.getOwnPropertyDescriptor
	  , properties  = Object.getOwnPropertyNames
	  , define_prop = Object.defineProperty

	// Copies properties from `source' to `target'
	function extend(target, source) {
	    properties(source).forEach(function(key) {
	        define_prop(target, key, descriptor(source, key)) })

	    return target
	}
	
	//Social Class
	var Social = Object.create(null);

	Social.share = function(friend){ return "Shared with " + friend ;	};

	Social.like = function(){ return "I like it!"; };

	
	dm = Object.create( Movie );
	//Mixin
	extend( dm , Social );
	
	dm.prototype.setAttribute('movieName' , 'The Godfather');
	dm.prototype.setAttribute('year' , '1972');
	dm.prototype.setAttribute('director' , 'Francis Ford Coppola');
	

	//Actividad  
	    $("#dalePlay").click( function(){
	      console.log(dm.prototype.play(dm.prototype.getAttribute('movieName')));
	    });

	     $("#daleStop").click( function(){
	      console.log(dm.prototype.stop(dm.prototype.getAttribute('movieName')));
	    });

	    $("#daleShared").click( function(){
	      console.log(dm.share('Al Paccino'));
	    });

	    $("#daleLike").click( function(){
	      console.log(dm.like());
	    });

}//inicializar