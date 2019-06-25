import * as tslib_1 from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import leaflet from 'leaflet';
import { GlobalService } from 'src/app/service/global.service';
import { ActivatedRoute } from '@angular/router';
var MapPage = /** @class */ (function () {
    function MapPage(nav, globalProv, navParams) {
        var _this = this;
        this.nav = nav;
        this.globalProv = globalProv;
        this.navParams = navParams;
        this.map = null;
        this.diapasonIcon = leaflet.icon({
            iconUrl: './assets/img/diapason.png',
            iconSize: [44, 64],
            iconAnchor: [22, 94],
            shadowAnchor: [4, 62],
            popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        this.denver = leaflet.marker([31.64, -7.99], { icon: this.diapasonIcon }).on('click', function () {
            "test";
        });
        this.aurora = leaflet.marker([31.6354255, -8.8], { icon: this.diapasonIcon }).on('click', function () {
            "test";
        });
        this.navParams.paramMap.subscribe(function (para) {
            _this.id = para.get('id');
        });
        this.init();
    }
    MapPage.prototype.ngOnInit = function () {
    };
    MapPage.prototype.ionViewDidEnter = function () {
        this.loadmap();
    };
    MapPage.prototype.init = function () {
        var _this = this;
        var self = this;
        self.globalProv.getLieux().subscribe(function (Data) {
            self.result = Data;
            if (Data) {
                for (var _i = 0, _a = _this.result; _i < _a.length; _i++) {
                    var res = _a[_i];
                    if (res.id_lieu == _this.id)
                        _this.lieu = res;
                    console.log(res);
                }
            }
        });
    };
    MapPage.prototype.loadmap = function () {
        // var cities = leaflet.layerGroup(data);
        this.map = leaflet.map("map", { center: [this.lieu.latitude, this.lieu.longitude], zoom: 10 });
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
        leaflet.marker([this.lieu.latitude, this.lieu.longitude], { icon: myIcon }).addTo(this.map)
            .bindPopup('<table style="width:100%">' +
            '<tr>' +
            '<td><img style="height:50px; width:50px" src="' + this.lieu.url_image + '" alt""></td>' +
            '<td Width="300px"><h3>' + this.lieu.nom_lieu + '</h3></td>' +
            '</tr>' +
            '<tr>' +
            '<td colspan="2">' + this.lieu.horaire + '</td>' +
            '</tr>' +
            '</table>').openPopup();
        this.map.locate({
            setView: true,
            maxZoom: 10
        }).on('locationfound', function (e) {
        }).on('locationerror', function (err) {
            console.log('allumer la localisation' + err);
        });
    };
    tslib_1.__decorate([
        ViewChild('map'),
        tslib_1.__metadata("design:type", ElementRef)
    ], MapPage.prototype, "mapContainer", void 0);
    MapPage = tslib_1.__decorate([
        Component({
            selector: 'app-map',
            templateUrl: './map.page.html',
            styleUrls: ['./map.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            GlobalService,
            ActivatedRoute])
    ], MapPage);
    return MapPage;
}());
export { MapPage };
//# sourceMappingURL=map.page.js.map