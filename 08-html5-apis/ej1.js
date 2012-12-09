
$(document).ready(function() {
   ejecutarCodigo();
   guardarCodigo();
   dragganddrop();
   geolocation();
 })

function ejecutarCodigo(){
	document.querySelector("#ejecutar").addEventListener('click', function () {
  
	    var head = document.querySelector("head");
	    var newScript = document.createElement("script");
	    newScript.type = "text/javascript";
	    newScript.innerHTML = document.querySelector("#codigo").value;
	    head.appendChild(newScript);
	}, false);
}

function guardarCodigo() {
	var txtArea = document.querySelector("#codigo");
	document.querySelector("#guardar").addEventListener('click', function () {
		window.localStorage.setItem('codigoGuardado', txtArea.value);
	}, false);
	txtArea.value = window.localStorage.getItem('codigoGuardado');
}

function dragganddrop() {
  var dropbox = document.getElementById('drop-zone');

  // init event handlers
  dropbox.addEventListener("dragenter", dragEnter, false);
  dropbox.addEventListener("dragexit", dragExit, false);
  dropbox.addEventListener("dragover", dragOver, false);
  dropbox.addEventListener("drop", drop, false);
};

function dragEnter(evt) {
  evt.stopPropagation();
  evt.preventDefault();
}

function dragExit(evt) {
  evt.stopPropagation();
  evt.preventDefault();
}

function dragOver(evt) {
  evt.stopPropagation();
  evt.preventDefault();
}

function drop(evt) {
  evt.stopPropagation();
  evt.preventDefault();

  var files = evt.dataTransfer.files;
  handleFiles(files);
}


function handleFiles(files) {
  var file = files[0];

  document.getElementById("drop-zone").innerHTML = "Processing " + file.name;

  var reader = new FileReader();

  // init the reader event handlers
  reader.onloadend = function (evt){
    var show = evt.target.result; // no lo uso, pero de esta manera podria mostrarlo
    $('#drag-zone').append('<ul><li>Name: '+ file.name + '</li><li> Type: '+ file.type + '</li><li>Size: '+ file.size +'</li></ul>');

  }
  // begin the read operation
  reader.readAsDataURL(file);
  window.localStorage.setItem('reader', reader);
  document.querySelector("#codigo").value = window.localStorage.getItem('reader');
  debugger;
}

function geolocation(){
  
    var map = null;
    var geolog = document.querySelector('#geo-log');
    var geoMap = document.querySelector('#geo-map');

    function showPosition(position) {
      geolog.textContent = "You're within " + position.coords.accuracy +
                           " meters of (" + position.coords.latitude + ", " +
                           position.coords.longitude + ")";
      var latLng = new google.maps.LatLng(
          position.coords.latitude, position.coords.longitude);
      var marker = new google.maps.Marker({
        position: latLng,
        map: map
      });
      map.setCenter(latLng);
      map.setZoom(15);
    }

    function handlePositionError(evt) {
      geolog.textContent = evt.message;
    }

    function successPositionHandler(evt) {
      // Load map if it doesn't already exist and when user clicks the button.
      if (!map) {
        map = new google.maps.Map(geoMap, {
                                  zoom: 3,
                                  center: new google.maps.LatLng(37.4419, -94.1419), // United States
                                  mapTypeId: google.maps.MapTypeId.ROADMAP
                                });
        map.getDiv().style.border =  '1px solid #ccc';        
      }

      if (navigator.geolocation) {
        geolog.style.visibility = 'visible';
        geolog.textContent = 'Looking for location...';
        navigator.geolocation.getCurrentPosition(showPosition, handlePositionError);
        // Also monitor position as it changes.
        //navigator.geolocation.watchPosition(showPosition, handlePositionError);
      } else {
        geolog.textContent = 'Oops! Your browser does not support geolocation.';
      }
    }

    document.querySelector('#see-position').addEventListener('click', successPositionHandler, false);
    geoMap.addEventListener('click', successPositionHandler, false);
  }
