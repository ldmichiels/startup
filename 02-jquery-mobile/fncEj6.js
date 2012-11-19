var KEYCODE_ESC = 27;

$( document ).live( "pageinit", function(){


	$(document).on("click", "#showMsg", function() {
		var $this = $( this ),
			theme = "a",
			msgText = "Cargando",
			textVisible = true,
			textonly = false;

		$.mobile.loading( 'show', {
				text: msgText,
				textVisible: textVisible,
				theme: theme,
				textonly: textonly
		});
	})
	.on("click", "#hideMsg", function() {
		$.mobile.loading( 'hide' );
	})
	.on("keydown",  function(event){
		if(event.keyCode == KEYCODE_ESC){
			$.mobile.loading( 'hide' );
			//Tambien podria ser:
			//$('#hideMsg').click();
		}
	});

});