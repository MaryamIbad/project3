var map;
var marker;
var current;
var chicago = {lat: 41.887855, lng: -71.05888010000001};
var Boston = {lat:42.3600825, lng: -42.3601};
var Peshawar = {lat: 34.0151366, lng: 71.52491540000005;
var Karachi = {lat: 25.0700428, lng: 67.2847875};
	  
var places=["Chicago","Boston","Peshawar","Karachi"];
      
function initMap() {
  current = {lat: 41.887855, lng: -87.630347};
  map = new google.maps.Map(document.getElementById('map'), {
  zoom: 10,
  center: current
  });

  marker = new google.maps.Marker({
  position: current,
  map: map
  });
}
	  
function goto(location, title){
  map.panTo(location);
  map.setZoom(12);
  marker = new google.maps.Marker({
  position: location,
  map: map
  });
  if (title==places[0]){
    document.getElementById("demo").innerHTML = "I have been living here in Chicago for almost four years now. Being from a different country and belonging to a small city, Chicago always fascinated me.";
    }
  else if (title==places[1]){
    document.getElementById("demo").innerHTML = "I lived in Boston, M.A, for a year as an exchange student and went to high school there";
    }
  else if (title==places[2]){
    document.getElementById("demo").innerHTML = "Peshawar is my hometown, I along with my whole family was born and raised there. But later I came to the U.S to pursue my education dreams";
    }
  else if (title==places[3]){
    document.getElementById("demo").innerHTML = "Karachi is the largest city in Pakistan that I lived in for a while before coming here";
    }
  else
    {
    document.getElementById("demo").innerHTML = null;
    }
}