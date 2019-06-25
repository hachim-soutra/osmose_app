import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ModalController, NavParams, NavController } from '@ionic/angular';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { Storage } from '@ionic/storage';
var FavArtComponent = /** @class */ (function () {
    function FavArtComponent(modal, nav, superP, navCtrl, globalProv, storage) {
        this.modal = modal;
        this.nav = nav;
        this.superP = superP;
        this.navCtrl = navCtrl;
        this.globalProv = globalProv;
        this.storage = storage;
        this.res = this.nav.get('value');
        this.showAdd = true;
        console.log('result detail : ', JSON.stringify(this.res));
        this.btnAddFavoris = true;
    }
    FavArtComponent.prototype.ngOnInit = function () {
        this.checkCatalogueFavorie(this.res.id_catalogue);
        console.log('detail catalogue  : ', this.res.id_catalogue);
    };
    FavArtComponent.prototype.onClick = function () {
        this.navCtrl.navigateForward('panier');
        this.closeModal();
    };
    FavArtComponent.prototype.checkCatalogueFavorie = function (id_catalogue) {
        var _this = this;
        var self = this;
        this.storage.ready().then(function () {
            _this.storage.get("id_contact").then(function (id_contact) {
                console.log("id contact  : ", id_contact);
                self.globalProv.checkCatalogueFavoris(id_contact, id_catalogue).subscribe(function (Data) {
                    if (Data) {
                        console.log('check favoris : ', JSON.stringify(self.res));
                        var obj = [];
                        obj = Data;
                        if (obj.status == '200') {
                            self.showAdd = false;
                            return true;
                        }
                        else {
                            self.showAdd = true;
                            return false;
                        }
                    }
                });
            });
        });
    };
    FavArtComponent.prototype.closeModal = function () {
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
    FavArtComponent.prototype.addToFavoris = function (id_catalogue) {
        var _this = this;
        var self = this;
        this.storage.ready().then(function () {
            _this.storage.get("id_contact").then(function (id_contact) {
                if (id_contact != null) {
                    if (self.superP.Connected) {
                        console.log("id contact  : ", id_contact);
                        self.globalProv.addCatalogueFavoris(id_contact, id_catalogue).subscribe(function (Data) {
                            if (Data) {
                                console.log('cataalogue : ', JSON.stringify(Data));
                                self.showAdd = false;
                                self.globalProv.presentToast(_this.superP.globalLanguages.actualite_detailproduit_welladded_tofavoris, 3000, 'bottom');
                                console.log('add favoris : ', JSON.stringify(self.res));
                            }
                        });
                    }
                }
                else {
                    _this.globalProv.presentToast(_this.superP.globalLanguages.alert_login_must_be_connetced, 2000, 'bottom');
                }
            });
        });
    };
    FavArtComponent.prototype.removeFromFavoris = function (id_catalogue) {
        var _this = this;
        var self = this;
        this.storage.ready().then(function () {
            _this.storage.get("id_contact").then(function (id_contact) {
                if (id_contact != null) {
                    if (self.superP.Connected) {
                        console.log("id contact  : ", id_contact);
                        self.globalProv.deleteCatalogueFavoris(id_contact, id_catalogue).subscribe(function (Data) {
                            if (Data) {
                                self.showAdd = true;
                                self.globalProv.presentToast(_this.superP.globalLanguages.actualite_detailproduit_deleted_tofavoris, 3000, 'bottom');
                                console.log('delate favoris : ', JSON.stringify(_this.res));
                            }
                        });
                    }
                }
                else {
                    _this.globalProv.presentToast(_this.superP.globalLanguages.alert_login_must_be_connetced, 2000, 'bottom');
                }
            });
        });
    };
    FavArtComponent.prototype.demandeInfo = function (x) {
        this.navCtrl.navigateForward("demandeinfo/cataloge/" + x);
        this.closeModal();
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], FavArtComponent.prototype, "value", void 0);
    FavArtComponent = tslib_1.__decorate([
        Component({
            selector: 'app-fav-art',
            templateUrl: './fav-art.component.html',
            styleUrls: ['./fav-art.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            NavParams,
            SuperService,
            NavController,
            GlobalService,
            Storage])
    ], FavArtComponent);
    return FavArtComponent;
}());
export { FavArtComponent };
//# sourceMappingURL=fav-art.component.js.map