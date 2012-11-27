$(document).ready(function(){
  console.log("Arranca");
  inicializar();
});

function inicializar(){

// Concrete Subject
console.log("Concrete Subject");
  padrino = Object.create(Movie);

  padrino.movieName = "The Godfather" ;
  padrino.year = 1972;
  padrino.director = "Francis Ford Coppola";

// Extend the controlling checkbox with the Subject class
  extend( new Subject(), padrino );

// Concrete Observer
console.log("Concrete Observer");
  escuchaPadrino = Object.create(null);

  // Extend the checkbox with the Observer class
  extend( new MovieObserver(), escuchaPadrino );

  // Override with custom update behaviour
  escuchaPadrino.Update = function( value ){
    alert('Escucha Padrino He sido notificado');
    console.log('Escucha Padrino He sido notificado');
  };

  // Add the new observer to our list of observers
  // for our main subject
  padrino.AddObserver( escuchaPadrino );

//Actividad  
    $("#dalePlay").click( function(){
      console.log("vamo' a dar play");
      console.log(padrino.play());
      padrino.Notify();
    });

     $("#daleStop").click( function(){
      console.log("vamo' a dar stop");
      console.log(padrino.stop());
      padrino.Notify();
    });

}//inicializar