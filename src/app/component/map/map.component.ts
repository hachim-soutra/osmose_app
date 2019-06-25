import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { NavController, ModalController, NavParams } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;
declare var require;
let SnazzyInfoWindow = require("snazzy-info-window");
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  map: any;
  @Input()value: object;
  res:any;
  markers:any = [];
  marker:any;
  //@ViewChild('map') mapContainer: ElementRef;

  constructor(
    public superP : SuperService,
    public navCtrl: NavController,
    private nav :NavParams,
    private geolocation: Geolocation,
    public modal: ModalController) {
      this.res = this.nav.get('value');
      }
  ngOnInit(){
    this.createMap(this.res[0].latitude, this.res[0].longitude);  
  }
  
  createMap(lat, lng) {
    let mapOptions = {
      center: new google.maps.LatLng(lat ,lng),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
    }
    let mapElement = document.getElementById('map');
    this.map = new google.maps.Map(mapElement, mapOptions);
    this.putMarker();
    this.getLocatlisation();

  } 

  putMarker() {
    for(let i=0;i < this.res.length; i++){
      let self = this;
      this.marker = new google.maps.Marker({
        position: new google.maps.LatLng(this.res[i].latitude, this.res[i].longitude),
        map: self.map,
        title: this.res[i].nom_lieu,
        maxZoom: 20,
        icon: {
            url: this.superP.URL+"/admin/files_perso/lieux/pin_location.png", // url
            scaledSize: new google.maps.Size(80, 80), // scaled size
        }
      });
  
      var contentString =
        '<table style="width:100%">' +
        '<tr>' +
        '<td><img style="height:50px; width:50px" src="'+this.res[i].url_image+'" alt""></td>' +
        '<td Width="300px"><h2>'+this.res[i].nom_lieu+'</h2></td>' +
        '</tr>' +
        '<tr>' +
        '<td colspan="2">'+this.res[i].horaire+'</td>' +
        '</tr>' +
        '</table>';
  
      var infowindow = new SnazzyInfoWindow({
        marker: this.marker,
        content: contentString
      });
    }

    this.marker.addListener('click', () => {
      infowindow.open(this.map, this.marker);
    });
    this.markers.push(this.marker);
  }

  getLocatlisation() {
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      console.log('localisation : ', position);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      let mapElement = document.getElementById('map');
      this.map = new google.maps.Map(mapElement, mapOptions);
 
      this.marker = new google.maps.Marker({
        position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        map: this.map,
        title: "Your location",
        maxZoom: 20,
        icon: {
            url: this.superP.URL+"/admin/files_perso/lieux/pin_location.png", // url
            scaledSize: new google.maps.Size(80, 80), // scaled size
        }
      });

      this.calculateAndDisplayRoute();
    }, (err) => {
      console.log(err);
    });
  }

  calculateAndDisplayRoute() {
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;
  
    let mapElement = document.getElementById('map');
    directionsService.route({
      origin: {lat: 37.77, lng: -122.447},  // Haight.
      destination: {lat: 37.768, lng: -122.511},  // Ocean Beach.
      // Note that Javascript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: google.maps.TravelMode['DRIVING']
    }, function(response, status) {
      if (status == 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }


  async closeModal() {
    await this.modal.dismiss();
  }
}
