import React, { Component } from 'react';
import './App.css';

import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Card, Button, CardTitle, CardText} from 'reactstrap';

import {Form, FormGroup, Label, Input} from 'reactstrap';



//definicja własnej ikonki nie działa chuj wie dlaczego
var myIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.3.4/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41]
});


class App extends Component {
  //stan mapy początkowy
  state = {
    location:{
      lat: 51.505,
      lng: -0.09,
    },
    //zmienna przechowujaca informacje czy dane o lokalizacji są dostępne
      haveUserLocation:false,
      zoom: 2,
      userMessage:{
        identyfikator:'',
        daneRozpoznawcze:''
      }
  }

//lokalizacja użytkownika na podstaiwe geolocation api ze strony mozilla w przypadku gdy się zgodzi
//odnotowanie zminay stanu obiektu 
componentDidMount(){
  navigator.geolocation.getCurrentPosition((position) =>{
    this.setState({
      location:{
        lat: position.coords.latitude,
        lng: position.coords.longitude
      },
      haveUserLocation:true,
      zoom:15,
    })
  }, () => {
    console.log ('no location available');
	  fetch('https://ipapi.co/json')
	  .then(res => res.json())
	  .then(location =>{
		  console.log(location);
      this.setState({
        location:{
          lat: location.latitude,
          lng: location.longitude
        },
        haveUserLocation: true,
        zoom:13
      })
	  })
  });
}

formSubmitted = (event) => {
  event.preventDefault();
  console.log(this.state.userMessage)
}

valueChanged = (event) => {
  const {name, value} = event.target;
  this.setState((prevState)=>({
      userMessage:{
        ...prevState.userMessage,
        [name]: value
      }

  }))
}


//funkcja renderująca zawartość elementu 
render() {

    //aktualna pozycja to zmienna wymagana w czasie wyswietlania mapy
    const position = [this.state.location.lat, this.state.location.lng]
    return (
      <div className="map">
      
          <Map className="map" center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            { this.state.haveUserLocation ?
            <Marker 
                    position={position}
                    icon={myIcon}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker> : ' '

          }
          </Map>

            <Card body className="message-form">
              <CardTitle>Obiekt</CardTitle>
              <CardText className='tl'>Formularz</CardText>
              

              <Form onSubmit={this.formSubmitted}>
                <FormGroup>
                  <Label for="identyfikator">Identyfikator obiektu</Label>
                  <Input 
                    onChange={this.valueChanged}
                    type="text" 
                    name="identyfikator" 
                    id="identyfikator" 
                    placeholder="object_ID" 

                  />
                </FormGroup>
                <FormGroup>
                  <Label for="daneRozpoznawcze">Dane Rozpoznawcze</Label>
                  <Input 
                      onChange={this.valueChanged}
                      type="textarea" 
                      name="daneRozpoznawcze" 
                      id="daneRozpoznawcze" 
                      placeholder="DaneRozpoznawcze" 
                  />

                </FormGroup>
                <Button type="submit" color="info" disabled={!this.state.haveUserLocation}>Send</Button>
              </Form>
            </Card>

        </div>
    );
  }
}

export default App;
