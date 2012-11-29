
$( document ).ready(function(){

    var $x;
    $x = $("#boton1");
	$x.click(realizarPedido);
});


function realizarPedido(){    
console.log("realizando realizarPedido");
    $.ajax({
        type: 'GET',
        url: 'http://bootcamp.aws.af.cm/movies',
        dataType:'json',
        crossDomain: true,
                        
        success: function (response, status, xhr) {
            //debugger;
            console.log("en success");
            var myArray = response.d.results;
            
            //Mostrar
            //box art, title, year, synopsis
            //BoxArt.MediumUrl
            //Name
            //ReleaseYear
            //ShortSynopsis
            for(var i = 0; i < myArray.length; i++){
                console.log(myArray[i].BoxArt.MediumUrl);
                $('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-inline="false" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-li ui-btn ui-btn-icon-right ui-li-has-arrow ui-btn-up-c">').appendTo('ol.ui-listview');
                $('<a href="'+myArray[i].Url
                    +'"><img src="'+myArray[i].BoxArt.SmallUrl
                    +'">'+myArray[i].Name+' ('
                    +myArray[i].ReleaseYear+')</a>')
                    .appendTo('li.ui-li:eq('+i+')');
                $('</li>').appendTo('ol.ui-listview');
            }
            console.log('fin success');
         
        },

        error: function (response, status, xhr) {
            debugger;
            console.log('Error'+status+ ' - '+ xhr.status);       
            
            }
    });
    console.log("pedido realizado");
};