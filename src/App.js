import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {

  state = {
    Locations : []
  }
 componentDidMount() {
 
    this.loadMap ()
  }

loadMap = () =>{
  loadScript ("https://maps.googleapis.com/maps/api/js?key=AIzaSyDnrGYtkdccFXqQGTNEfousldIW7TdltQM&callback=initMap")
  window.initMap = this.initMap
}

getLocations =() =>{
  let endPoint = "https://api.foursquare.com/v2/venues/VENUE_ID"
  let parameters ={
    client_id : "3DEZHRZWRFFGS3PQ1JRIL2Q00CUEVRXQO4Q2NXU2JQKJI1NF",
    client_secret:"2V3CBVWDXWDIW4HBIO5SFBZQDF0544F04I40CIBU5ZYQLMSY",
    query:"Mall",
    near: "Waimea, HI",
    v: 20181105

  }
  //https://www.npmjs.com/package/axios
axios.get(endPoint + new URLSearchParams(parameters))
  .then(response => {
   this.setState({
    Locations: response.data.response.groups[0].items
   })
  })
  .catch(error => {
    console.log(error);
  });
}


 
//https://developers.google.com/maps/documentation/javascript/tutorial

initMap = () => {
       const  map = new window. google.maps.Map(document.getElementById('map'), {
          center: {lat: 19.8968, lng: -155.5828},
          zoom: 8
        });
       //https://developers.google.com/maps/documentation/javascript/markers
var marker = new window.google.maps.Marker({
    map: map,
    draggable: true,
    animation: window.google.maps.Animation.Drop,
     position: {lat: 19.8968, lng: -155.5828},
    title: 'Hello World!'
  });
maker.addlistener('click', toggleBounce);
}
function toggleBounce(){
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  }else{
    marker.setAnimation(window.google.maps.Animation.BOUNCE);
  }
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


//credit : learned this from Yahya Elharony walk through : https://www.youtube.com/watch?v=W5LhLZqj76s&t=615s and this also helped: https://stackoverflow.com/questions/7718935/load-scripts-asynchronously
function loadScript(url){
      var index = window.document.getElementsByTagName("script")[0];
      var script = window.document.createElement("script");
     script.src = url;
     script.async = true;
     script.defer = true; 
     index.parentNode.insertBefore(script, index)
    };
