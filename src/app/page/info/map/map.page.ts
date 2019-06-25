import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import leaflet from 'leaflet';
import { GlobalService } from 'src/app/service/global.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  @ViewChild('map') mapContainer: ElementRef;
  map: any = null;
  result: any;
  lieu: any;
  id: string;
  constructor(
    private nav: NavController,
    public globalProv: GlobalService,
    public navParams: ActivatedRoute,
  ) { 
    this.navParams.paramMap.subscribe( para =>{
      this.id = para.get('id');
    })
        this.init();

  }
  diapasonIcon = leaflet.icon({
    iconUrl: './assets/img/diapason.png',
    iconSize:     [44, 64], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });
 
 denver    = leaflet.marker([31.64, -7.99],{icon: this.diapasonIcon}).on('click' ,()=>{
  "test";
 });
 aurora    = leaflet.marker([31.6354255, -8.8],{icon: this.diapasonIcon}).on('click', () => {
  "test";
  });

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.loadmap();

  }

  init() {
    let self = this;
    self.globalProv.getLieux().subscribe(Data => {
      self.result = Data;
      if (Data) {
        for(let res of this.result){
          if(res.id_lieu == this.id)
          this.lieu = res;
          console.log(res);
        }
      }
    });
  }

  loadmap() {
    // var cities = leaflet.layerGroup(data);
    this.map = leaflet.map("map", {center: [this.lieu.latitude ,this.lieu.longitude], zoom: 10 });

    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 150
    }).addTo(this.map);
    var myIcon = leaflet.icon({
      iconUrl: './assets/img/diapason.png',
      iconSize: [44, 64],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
      // shadowUrl: 'my-icon-shadow.png',
      shadowSize: [68, 95],
      shadowAnchor: [22, 94]
  });
    leaflet.marker([this.lieu.latitude ,this.lieu.longitude],{icon: myIcon}).addTo(this.map)
    .bindPopup('<table style="width:100%">' +
    '<tr>' +
    '<td><img style="height:50px; width:50px" src="'+this.lieu.url_image+'" alt""></td>' +
    '<td Width="300px"><h3>'+this.lieu.nom_lieu+'</h3></td>' +
    '</tr>' +
    '<tr>' +
    '<td colspan="2">'+this.lieu.horaire+'</td>' +
    '</tr>' +
    '</table>').openPopup();

    this.map.locate({
      setView: true,
      maxZoom: 10
    }).on('locationfound', (e) => {
     
    }).on('locationerror', (err) => {
      console.log('allumer la localisation' + err);
  });
  }
}
