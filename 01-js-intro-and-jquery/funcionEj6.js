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
        url: 'http://bootcamp.aws.af.cm/welcome/Lucas',
        dataType:'json',
        crossDomain: true,
                        
        success: function (response, status, xhr) {
        //debugger;

        //poner response.response para que ande!
        $('<div id="response">'+response.response+'</div>').insertAfter('p');   

        },

        error: function (response, status, xhr) {
        $('<div id="fail"'+status+ ' - '+ xhr.status+'</div>').insertAfter('p');           
            },
});
}