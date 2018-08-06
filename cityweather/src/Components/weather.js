
import React from "react";

var tempSwap = true;


const Weather = props => (
    
         
	<div className="weather__info container-fluid">
	 {	
	 	props.city && props.country && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { props.city }, { props.country }</span>
	 	</p> 
	 }
	 { 	
	 	props.temperature && <p className="weather__key"> Temperature: 
	 		<span className="weather__value"> { props.temperature }<span id="metric">  °C</span> </span>
	 	</p> 
	 }
	 { 	
	 	props.humidity && <p className="weather__key"> Humidity: 
	 		<span className="weather__value"> { props.humidity } </span>
	 	</p> 
	 }
	 { 	
	 	props.description && props.icon && <p className="weather__key"> Conditions: 
	 		<span className="weather__value"> <img className="weather-icon" src={props.icon} /> { props.description }</span>
    
	 </p> 
	 }
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	</div>
);


    




export default Weather;
