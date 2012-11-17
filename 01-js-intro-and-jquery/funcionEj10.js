var $x;
$x = $(document);
$x.ready(inicializarElementos);

function inicializarElementos() 
{
    var $x;
    $x = $("#boton1");
	$x.click(realizarPedido);
}


function realizarPedido(){
    


    $.ajax({
        type: 'GET',
        url: 'http://bootcamp.aws.af.cm/movies',
        dataType:'json',
        crossDomain: true,
                        
        success: function (response, status, xhr) {
            //debugger;
            var myArray = response.d.results;
            
            //Mostrar
            //box art, title, year, synopsis
            //BoxArt.MediumUrl
            //Name
            //ReleaseYear
            //ShortSynopsis
            for(var i = 0; i < myArray.length; i++){
                $('<div class="container">').appendTo('#dos');
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
    
    $(function() {
        var mydiv = $('#preOverlay');
        mydiv.attr({ 'id': 'overlay' });
    });    

}

function procesarPelicula(){
    x = $(this);

}