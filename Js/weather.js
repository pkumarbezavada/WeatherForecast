$(document).ready(function(){
    
var longi;
var lati;
    $.getJSON("http://ip-api.com/json",function(data2){
        
       lati = data2.lat;
        longi = data2.lon;
        var api ='http://api.openweathermap.org/data/2.5/weather?lat='+lati+'&lon='+longi+'&appid=5886b24c9277f5285b48a6ab03284cf8';
    
$.getJSON(api,function(data){
    var tempSwap=true;
//alert(data.coord.lat);
    var fariTemp;
    var celsiTemp;
    var weatherType = data.weather[0].description;
    var kelvin = data.main.temp;
    var windSpeed = data.wind.speed;
    var city = data.name;
    fariTemp = ((kelvin)*(9/5)-459.67).toFixed(1);
    celsiTemp = (kelvin-273).toFixed(1);
    
    console.log(city);
    $("#city").html(city);
    $("#weatherType").html(weatherType);
    $("#fariTemp").html(fariTemp + " &#8457;");
     $("#fariTemp").click(function(){
         
        if(tempSwap===false){
            $("#fariTemp").html(fariTemp + " &#8457;");
            tempSwap=true;
        } 
         else{
             $("#fariTemp").html(celsiTemp + " &#8451;");
             tempSwap=false;
         }
         
         
     });
    windSpeed = (2.237*(windSpeed)).toFixed(1);
    $("#windSpeed").html(windSpeed + "mph");
    if(weatherType === "mist"){
       $('body').css('background-image','url(https://media.giphy.com/media/l3q2GlX2MQPibz8bu/giphy.gif)'); 
    }
    else if(weatherType === "sunny"){
        $('body').css('background-image','url(https://zippy.gfycat.com/RingedConfusedAfricanbushviper.gif)'); 
        
    }
    
    else if(weatherType === "cloudy"){
        $('body').css('background-image','url(https://i.gifer.com/7RtX.gif)'); 
        
    }
    
      else if(weatherType === "rainy"){
        $('body').css('background-image','url(https://78.media.tumblr.com/2512ece31dddfe2fafd7001fd2143f74/tumblr_o94v6ypp2m1upvbufo1_400.gif)'); 
        
    }
    
    else if(weatherType === "lightning"){
        $('body').css('background-image','url(https://media.giphy.com/media/hAb5yLCOJn7NK/source.gif)'); 
        
    }
    
    
   else if(weatherType === "snow"){
        $('body').css('background-image','url(https://media.giphy.com/media/Yy26NRbpB9lDi/giphy.gif)'); 
        
    } 
    
    else if(weatherType === "tornado"){
        $('body').css('background-image','url(https://media.giphy.com/media/UIbf99Ufh9LMY/giphy.gif)'); 
        
    } 
 else if(weatherType === "tornado"){
        $('body').css('background-image','url(https://patch.com/california/altadena/cooler-temps-scattered-clouds-store-altadena)'); 
        
    } 
   
     else if(weatherType === "smoke"){
        $('body').css('background-image','url(https://i.imgur.com/aEkNo6T.jpg)'); 
        
    } 
    
    else {
        $('body').css('background-image','url(https://cdn.dribbble.com/users/224485/screenshots/1953696/weathernew.gif)'); 
        
    }
    
    
    
});
    
    });


});