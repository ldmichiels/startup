/*
var $x;
$x = $(document);
$x.ready(inicializarElementos);
*/
$( '#principal' ).live( 'pageinit', inicializarElementos);


function inicializarElementos() 
{
   /* var $x;
    $x = $("#boton1");
	$x.click(realizarPedido);
    */
    //$( "#boton1" ).bind( "click", inicializarElementos);
    $("#boton1").click(realizarPedido);
}


function realizarPedido(){
    
        console.log("entre realizar pedido");

    $.ajax({
        type: 'GET',
        url: 'http://bootcamp.aws.af.cm/movies',
        dataType:'json',
        crossDomain: true,
                        
        success: function (response, status, xhr) {
            //debugger;
            var myArray = response.d.results;
            
        console.log("entre ajax success");
            //Mostrar
            //box art, title, year, synopsis
            //BoxArt.MediumUrl
            //Name
            //ReleaseYear
            //ShortSynopsis
            for(var i = 0; i < myArray.length; i++){
                $('<div class="container">').appendTo('#centrado');
                $('<div class="responseDer"><img src="'+myArray[i].BoxArt.MediumUrl+'"></div>').appendTo('div.container:eq('+i+')');
                $('<p class="response">'+myArray[i].Name+' ('+myArray[i].ReleaseYear+')</p>').appendTo('div.container:eq('+i+')');
                
                $('<div class="responseIzq"><p class="responseIzq">'+myArray[i].ShortSynopsis+'</p></div>').appendTo('div.container:eq('+i+')');
                /*$('</div>').appendTo('#dos');*/
            }
            //console.log('Response: '+response.response);
         
        },

        error: function (response, status, xhr) {
            debugger;
            console.log('Error'+status+ ' - '+ xhr.status);       
            
            },
    });
 
}