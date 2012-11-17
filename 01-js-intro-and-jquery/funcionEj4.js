var $x;
$x = $(document);
$x.ready(inicializarElementos);

function inicializarElementos() 
{
    alert("el documento está preparado");
    var $x;
    $x = $("#alias");
	$x.focus(tomaFoco);
	$x = $("#alias");
	$x.focus(tomaFoco);
	$y = $("#boton1");
	$y.click(desaparecer);
    //setearCursor();
}


function tomaFoco()
{
	var $x = $("#alias");
	$x.attr("value", "");
}

function desaparecer()
{
	var $x = $("#descripcion");
	$x.fadeOut("slow");
}
