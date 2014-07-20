/*--------------------------------------------------------------
----------------------------------------------------------------

Document Ready Function

----------------------------------------------------------------
----------------------------------------------------------------*/
$(document).ready(function(){
        	//alert("Hello");
        	
        	document.addEventListener("deviceready", onDeviceReady, false);
			document.addEventListener("deviceready", domReady, false);
});
/*--------------------------------------------------------------
----------------------------------------------------------------
Geolocation

----------------------------------------------------------------
----------------------------------------------------------------*/
function domReady(){
		navigator.geolocation.getCurrentPosition(onSuccess, onError);
}
	
function onSuccess(position) {
    var element = document.getElementById('geolocation');
    element.innerHTML = '<div data-role=\"listview\"><li>Latitude: '           + position.coords.latitude              + '</li>' +
                            '<li>Longitude: '          + position.coords.longitude             + '</li>' +
                            '<li>Altitude: '           + position.coords.altitude              + '</li>' +
                            '<li>Accuracy: '           + position.coords.accuracy              + '</li>' +
                            '<li>Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '</li>' +
                            '<li>Heading: '            + position.coords.heading               + '</li>' +
                            '<li>Speed: '              + position.coords.speed                 + '</li>' +
                            '<li>Timestamp: '          + new Date(position.timestamp)                    + '</li></div>';
}

function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
}
	
/*--------------------------------------------------------------
----------------------------------------------------------------

Camera

----------------------------------------------------------------
----------------------------------------------------------------*/
	var pictureSource;   
    var destinationType; 
	var i;
   
function onDeviceReady() {
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
	i = 0;
}

function onPhotoDataSuccess(imageData) {
    var smallImage = document.getElementById('smallImage');
	smallImage.style.display = 'block';
    smallImage.src = "data:image/jpeg;base64," + imageData;
	i++;

	window.localStorage.setItem("photo"+i, smallImage.src);

	var out = '<div>';
	  for(j=1;j<i+1;j++){
	  var im = window.localStorage.getItem("photo"+j);
	  out += '<a href="index.html"><img src="'+im+'" width="60" height="60"/></a>';
	  }
	  out += '</div>';
	  $('#myImage').html(out2);
	  //window.localStorage.clear();
}

function onFail(message) {
      alert('Failed because: ' + message);
}

function capturePhoto() {
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
    destinationType: destinationType.DATA_URL });
}
	
/*--------------------------------------------------------------
----------------------------------------------------------------
Beep Function

----------------------------------------------------------------
----------------------------------------------------------------*/

function beep(){
	navigator.notification.beep(5);
}

/*--------------------------------------------------------------
----------------------------------------------------------------

Google Map

----------------------------------------------------------------
----------------------------------------------------------------*/
function initialize()
	{
		var mapProp = {
		center:new google.maps.LatLng(55.0089797,-7.3187302),
		zoom:5,
		mapTypeId:google.maps.MapTypeId.ROADMAP
		};
		var map=new google.maps.Map(document.getElementById("googleMap")
	    ,mapProp);
		//alert ('Inside initialize');
	}



