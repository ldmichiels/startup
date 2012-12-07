
$(document).ready(function() {
   ejecutarCodigo();
   guardarCodigo();
   dragganddrop();
   appcache();
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

function appcache(){
  window.applicationCache.addEventListener('updateready', function(e) {
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
      window.applicationCache.swapCache();
      if (confirm('A new version of this site is available. Load it?')) {
        window.location.reload();
      }
    }
  }, false);
}