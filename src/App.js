import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
 componentDidMount() {
  this.getLocations ()
    this.loadMap ()
  }

loadMap = () =>{
  loadScript ("https://maps.googleapis.com/maps/api/js?key=AIzaSyDaEeSkPMasHeWb8QWTvvYpLqGTdCnozLw&callback=initMap")
  window.initMap = this.initMap
}

getLocations =() =>{
  let endPoint = "https://api.foursquare.com/v2/venues/VENUE_ID"
  let parameters ={
    client_id : "3DEZHRZWRFFGS3PQ1JRIL2Q00CUEVRXQO4Q2NXU2JQKJI1NF",
    client_secret:"2V3CBVWDXWDIW4HBIO5SFBZQDF0544F04I40CIBU5ZYQLMSY",
    query:"Mall",
    near: "sydney",
    v: 20182507

  }
}
//https://www.npmjs.com/package/axios
axios.get(endPoint + new URLSearchParams(parameters))
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });

 

initMap = () => {
       const  map = new window. google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }



  render() {
    return (

       <main>
        <div id="map"></div>
     </main>
      
    );
  }
}

export default App;


function loadScript(url){
      var index = window.document.getElementsByTagName("script")[0];
      var script = window.document.createElement("script");
     script.src = url;
     script.async = true;
     script.defer = true; 
     index.parentNode.insertBefore(script, index)
    };
