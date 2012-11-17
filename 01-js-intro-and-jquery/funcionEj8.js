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
        url: 'http://bootcamp.aws.af.cm/welcome/lucas d michiels',
        dataType:'json',
        crossDomain: true,
                        
        success: function (response, status, xhr) {
            //debugger;
            //poner response.response para que ande!
            var x = $('div.response');
            x.html(response.response);
            x.css({
                'background-color':'yellow'
            });
        },

        error: function (response, status, xhr) {
            var x = $('div.response');
            x.html(status+ ' - '+ xhr.status);
            //ahora cambiamos el color de fuente de la
            //clase .response a rojo xq es un error
            x.css({
                'color':'#F00'
            });
            
            },
});
}