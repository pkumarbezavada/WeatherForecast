import React, {Component} from "react";//importing react which we have in package.json
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navigation from "./Components/navigation"
import Titles from "./Components/titles"
import Form from"./Components/form"
import Weather from "./Components/weather"




const API_KEY = "5886b24c9277f5285b48a6ab03284cf8";




//Initializing the component line below
//state is an object which leaves with in the component which keeps of track of changing data in the component like user interaction with the application like submiting the form or clicking he button. it contains key value pairs.
class App extends React.Component {
    
   
    
    state = {
        
       temperature: undefined,
        city: undefined,
        country:undefined,
        humidity:undefined,
        description:undefined,
        icon: undefined,
        error:undefined,
        kelvin : undefined
    }
    getWeather = async (e) => {
        e.preventDefault();
        var fariTemp;
        var celsiTemp;
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const OPEN_WEATHER_IMG_URL = 'http://openweathermap.org/img/w';
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);//Injecting via template strings wille be usefull for injecting variables
       const data = await api_call.json();
        if(city && country){
        this.setState({
        kelvin: data.main.temp,
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: `${OPEN_WEATHER_IMG_URL}/${data.weather[0].icon}.png`,
        error: "",
       
            
        });
        
    } else{
        
     this.setState({
            
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        icon: undefined,
        error: " Please enter city and country values"    
        });
        
    }
    }
        
        // Arrow functions basically allow you to use "This" Key word Independiently. allowd from react 16.
    
    //render is used for displaying content. returns in jsx and can return only one element ie only one retun cannot have many returns ie only one parent component.
                   
    render() {
        // this.getweather is using pops.
        return(
        
            <div>
             <BrowserRouter>
            <div>
            <Navigation />
            <Switch>
        
        
        <Route path="/weather" component={Weather} />
        
        
        </Switch>
            </div>
        </BrowserRouter>
            
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                 
                </div>
                <div className="col-xs-7 container-fluid form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    icon={this.state.icon}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            
        );
        
    }
    
}; 


export default App;