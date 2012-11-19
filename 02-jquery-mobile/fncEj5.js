
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
  });
 

});