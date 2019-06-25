import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { NavController, ModalController, NavParams } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
var SnazzyInfoWindow = require("snazzy-info-window");
var MapComponent = /** @class */ (function () {
    //@ViewChild('map') mapContainer: ElementRef;
    function MapComponent(superP, navCtrl, nav, geolocation, modal) {
        this.superP = superP;
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.geolocation = geolocation;
        this.modal = modal;
        this.markers = [];
        this.res = this.nav.get('value');
    }
    MapComponent.prototype.ngOnInit = function () {
        this.createMap(this.res[0].latitude, this.res[0].longitude);
    };
    MapComponent.prototype.createMap = function (lat, lng) {
        var mapOptions = {
            center: new google.maps.LatLng(lat, lng),
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
        };
        var mapElement = document.getElementById('map');
        this.map = new google.maps.Map(mapElement, mapOptions);
        this.putMarker();
        this.getLocatlisation();
    };
    MapComponent.prototype.putMarker = function () {
        var _this = this;
        for (var i = 0; i < this.res.length; i++) {
            var self_1 = this;
            this.marker = new google.maps.Marker({
                position: new google.maps.LatLng(this.res[i].latitude, this.res[i].longitude),
                map: self_1.map,
                title: this.res[i].nom_lieu,
                maxZoom: 20,
                icon: {
                    url: this.superP.URL + "/admin/files_perso/lieux/pin_location.png",
                    scaledSize: new google.maps.Size(80, 80),
                }
            });
            var contentString = '<table style="width:100%">' +
                '<tr>' +
                '<td><img style="height:50px; width:50px" src="' + this.res[i].url_image + '" alt""></td>' +
                '<td Width="300px"><h2>' + this.res[i].nom_lieu + '</h2></td>' +
                '</tr>' +
                '<tr>' +
                '<td colspan="2">' + this.res[i].horaire + '</td>' +
                '</tr>' +
                '</table>';
            var infowindow = new SnazzyInfoWindow({
                marker: this.marker,
                content: contentString
            });
        }
        this.marker.addListener('click', function () {
            infowindow.open(_this.map, _this.marker);
        });
        this.markers.push(this.marker);
    };
    MapComponent.prototype.getLocatlisation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            console.log('localisation : ', position);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var mapElement = document.getElementById('map');
            _this.map = new google.maps.Map(mapElement, mapOptions);
            _this.marker = new google.maps.Marker({
                position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                map: _this.map,
                title: "Your location",
                maxZoom: 20,
                icon: {
                    url: _this.superP.URL + "/admin/files_perso/lieux/pin_location.png",
                    scaledSize: new google.maps.Size(80, 80),
                }
            });
            _this.calculateAndDisplayRoute();
        }, function (err) {
            console.log(err);
        });
    };
    MapComponent.prototype.calculateAndDisplayRoute = function () {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var mapElement = document.getElementById('map');
        directionsService.route({
            origin: { lat: 37.77, lng: -122.447 },
            destination: { lat: 37.768, lng: -122.511 },
            // Note that Javascript allows us to access the constant
            // using square brackets and a string value as its
            // "property."
            travelMode: google.maps.TravelMode['DRIVING']
        }, function (response, status) {
            if (status == 'OK') {
                directionsDisplay.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    MapComponent.prototype.closeModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], MapComponent.prototype, "value", void 0);
    MapComponent = tslib_1.__decorate([
        Component({
            selector: 'app-map',
            templateUrl: './map.component.html',
            styleUrls: ['./map.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [SuperService,
            NavController,
            NavParams,
            Geolocation,
            ModalController])
    ], MapComponent);
    return MapComponent;
}());
export { MapComponent };
//# sourceMappingURL=map.component.js.map