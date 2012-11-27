$(document).ready(function(){
  console.log("Arranca");
  inicializar();
});

function inicializar(){


//DownloadableMovie Class
	function DownloadableMovie(){}

	DownloadableMovie.prototype = new Movie();

	DownloadableMovie.prototype.download = function(){
									return "Este es el metodo de Desacarga!"
								};


	dm = Object.create( DownloadableMovie);
	console.log(Object.keys( dm));
	console.log( "dm.play: "+dm.prototype.play() );	
	console.log( "dm.download: "+dm.prototype.download() );
	
	console.log(Object.keys(dm));

	dm.prototype.setAttribute('movieName' , 'The Godfather');
	dm.prototype.setAttribute('year' , '1972');
	dm.prototype.setAttribute('director' , 'Francis Ford Coppola');
	
	//Actividad  
	    $("#dalePlay").click( function(){
	      console.log("vamo' a dar play");
	      console.log(dm.prototype.play(dm.prototype.getAttribute('movieName')));
	    });

	     $("#daleStop").click( function(){
	      console.log("vamo' a dar stop");
	      console.log(dm.prototype.stop(dm.prototype.getAttribute('movieName')));
	    });

	     $("#daleDownload").click( function(){
	      console.log("vamo' a dar download");
	      console.log(dm.prototype.download());
	    });

}//inicializar