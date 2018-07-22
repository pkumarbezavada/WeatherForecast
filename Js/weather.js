$(document).ready(function() {
    var longi;
    var lati;
    var fariTemp;
    var celsiTemp;
 if (navigator.geolocation) {

  navigator.geolocation.getCurrentPosition(function(position){
longi = position.coords.longitude;
      lati = position.coords.latitude;
  $("#data").html("Latitude: " + lati + "<br/>" + "Longitude: " + longi);
    });  
  }
var api = 'https://samples.openweathermap.org/data/2.5/weather?lat='+lati+'&lon='+longi+'&appid=b6907d289e10d714a6e88b30761fae22';
    
$.getJSON(api,function(data){
    var tempSwap=true;
//alert(data.coord.lat);
    var weatherType = data.weather[0].description;
    var kelvin = data.main.temp;
    var windSpeed = data.wind.speed;
    var city = data.name;
    fariTemp = (kelvin)*(9/5)-459.67;
    celsiTemp = kelvin-273;
    
    console.log(city);
    $("#city").html(api);
    $("#weatherType").html(weatherType);
    $("#fariTemp").html(fariTemp);
     $("#fariTemp").click(function(){
         
        if(tempSwap===false){
             $("#fariTemp").html(celsiTemp);
            tempSwap=true;
        } 
         else{
             
              $("#fariTemp").html(fariTemp);
             tempSwap=false;
         }
         
         
     });
    $("#windSpeed").html(windSpeed);
    
});
});