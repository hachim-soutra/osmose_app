import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { Storage } from '@ionic/storage';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, superP, globalProv, modalCtrl, storage) {
        this.navCtrl = navCtrl;
        this.superP = superP;
        this.globalProv = globalProv;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.slideOpts = {
            slidesPerView: 1,
            spaceBetween: 0,
            autoplay: {
                delay: 4000,
            },
            centeredSlides: true,
            speed: 400
        };
        this.init();
        this.fillPanier();
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.init = function () {
        var self = this;
        if (self.superP.Connected) {
            self.globalProv.getaccueilEnLine().subscribe(function (Data) {
                if (Data) {
                    self.result = Data;
                }
            });
        }
    };
    HomePage.prototype.panier = function () {
        this.navCtrl.navigateForward('panier');
    };
    HomePage.prototype.fillPanier = function () {
        var self = this;
        this.storage.get("panier").then(function (data) {
            if (data) {
                console.log('panier : ', data);
                self.superP.collecteurPanier = data;
            }
            else {
                self.superP.collecteurPanier = [];
            }
        }).catch(function (err) {
            console.error("error : ", err);
        });
    };
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        setTimeout(function () {
            _this.init();
            refresher.target.complete();
        }, 500);
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            SuperService,
            GlobalService,
            ModalController,
            Storage])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map