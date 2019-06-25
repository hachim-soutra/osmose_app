import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { ModalController, NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global.service';
import { Storage } from '@ionic/storage';
var ListDemandeServicesPage = /** @class */ (function () {
    function ListDemandeServicesPage(globalProv, superP, storage, nav, modalController, navCtrl) {
        this.globalProv = globalProv;
        this.superP = superP;
        this.storage = storage;
        this.nav = nav;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.init();
    }
    ListDemandeServicesPage.prototype.ngOnInit = function () {
    };
    ListDemandeServicesPage.prototype.init = function () {
        var _this = this;
        var self = this;
        var obj = [];
        this.storage.ready().then(function () {
            _this.storage.get("id_contact").then(function (id_contact) {
                console.log(id_contact);
                self.globalProv.getProFavoris(id_contact).subscribe(function (Data) {
                    console.log(Data);
                    if (Data) {
                        obj = Data;
                        if (obj.status == '200') {
                            self.result = obj.result;
                        }
                        else if (obj.status == '500') {
                            self.result = [];
                        }
                    }
                });
            });
        });
    };
    ListDemandeServicesPage.prototype.gotoDetails = function (res) {
        console.log(res);
    };
    ListDemandeServicesPage.prototype.Details = function (res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.navCtrl.navigateRoot("article/" + res.id_produit);
                return [2 /*return*/];
            });
        });
    };
    ListDemandeServicesPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        setTimeout(function () {
            _this.init();
            refresher.target.complete();
        }, 500);
    };
    ListDemandeServicesPage = tslib_1.__decorate([
        Component({
            selector: 'app-list-demande-services',
            templateUrl: './list-demande-services.page.html',
            styleUrls: ['./list-demande-services.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [GlobalService, SuperService, Storage,
            NavController, ModalController, NavController])
    ], ListDemandeServicesPage);
    return ListDemandeServicesPage;
}());
export { ListDemandeServicesPage };
//# sourceMappingURL=list-demande-services.page.js.map