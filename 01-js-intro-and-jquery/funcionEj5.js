var $x;
$x = $(document);
$x.ready(inicializarElementos);

function inicializarElementos() 
{
    var $x;
    $x = $("#boton1");
	$x.click(pedir4);
}


function pedir4(){
     $.ajax({
    type: 'GET',
    url: 'http://bootcamp.aws.af.cm/welcome/Lucas',
    dataType:'json',
    crossDomain: true,
                    
    success: function (response, status, xhr) {
    //debugger;

    alert("respuesta recibida: \n"+response.response); 

    },
    error: function (response, status, xhr) {
    $('div.fail')
    .html(status+ ' - '+ xhr.status);           
        },
});
}