import {Component, OnInit,  AfterViewInit} from '@angular/core'; 

@Component({
  selector: 'contacts',
  templateUrl: './Contacts.component.html'
})

export class ContactsComponent implements AfterViewInit {
  constructor() {}

  public lat: number = 34.239063;
  public lng: number = -118.393227;
  public zoom: number = 10;
  public uluru = {
    lat: 34.239063, 
    lng: -118.393227
}
  public mapStyle = [
    {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#444444"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
          {
              "color": "#f2f2f2"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
          {
              "saturation": -100
          },
          {
              "lightness": "45"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
          {
              "color": "#f89f1e"
          },
          {
              "visibility": "on"
          }
      ]
  }
  ];
  ngAfterViewInit() {
     
  };
}
