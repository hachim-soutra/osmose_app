import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController, NavParams, NavController } from '@ionic/angular';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
var ProFavComponent = /** @class */ (function () {
    function ProFavComponent(modal, nav, superP, globalProv, navCtrl, storage) {
        this.modal = modal;
        this.nav = nav;
        this.superP = superP;
        this.globalProv = globalProv;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.res = this.nav.get('value');
        this.showAdd = true;
        console.log('result detail : ', JSON.stringify(this.res));
        this.btnAddFavoris = true;
    }
    ProFavComponent.prototype.ngOnInit = function () {
        this.checkProduct(this.res.id_produit);
        this.checkFavorie(this.res.id_produit);
    };
    ProFavComponent.prototype.closeModal = function () {
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
    ProFavComponent.prototype.demandeInfo = function (x) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.closeModal();
                this.navCtrl.navigateForward("demandeinfo/prestation/" + x);
                return [2 /*return*/];
            });
        });
    };
    ProFavComponent.prototype.addToFavoris = function (id_catalogue) {
        var _this = this;
        var self = this;
        this.storage.ready().then(function () {
            _this.storage.get("id_contact").then(function (id_contact) {
                if (id_contact != null) {
                    if (self.superP.Connected) {
                        console.log("id contact  : ", id_contact);
                        self.globalProv.addFavoris(id_contact, id_catalogue).subscribe(function (Data) {
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
    ProFavComponent.prototype.removeFromFavoris = function (id_catalogue) {
        var _this = this;
        var self = this;
        this.storage.ready().then(function () {
            _this.storage.get("id_contact").then(function (id_contact) {
                if (id_contact != null) {
                    if (self.superP.Connected) {
                        console.log("id contact  : ", id_contact);
                        self.globalProv.deleteFavoris(id_contact, id_catalogue).subscribe(function (Data) {
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
    ProFavComponent.prototype.checkProduct = function (id_produit) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get("panier").then(function (data) {
                if (data) {
                    _this.superP.collecteurPanier = data;
                    if (_this.superP.collecteurPanier.find(function (obj) {
                        console.log(JSON.stringify(obj));
                        obj.id == id_produit;
                    })) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            });
        });
    };
    ProFavComponent.prototype.addToCart = function (res) {
        var _this = this;
        var self = this;
        this.storage.ready().then(function () {
            _this.storage.get("id_contact").then(function (id_contact) {
                if (id_contact != null) {
                    _this.storage.get("panier").then(function (data) {
                        if (data) {
                            var found_1 = false;
                            var cnt_1 = 0;
                            data.forEach(function (element) {
                                console.log(element);
                                console.log(res);
                                if (element.id == res.id_produit) {
                                    found_1 = true;
                                    _this.superP.collecteurPanier[cnt_1].quantite++;
                                    self.storage.set("panier", self.superP.collecteurPanier);
                                    _this.globalProv.presentToast(_this.superP.globalLanguages.msg_quantite_mise_jour, 2000, 'bottom');
                                }
                                cnt_1++;
                            });
                            if (!found_1) {
                                _this.addNewItem({
                                    "id": res.id_produit,
                                    "titre": res.titre,
                                    "prix": res.prix,
                                    "img": res.url_image,
                                    "quantite": 1
                                });
                                _this.globalProv.presentToast(_this.superP.globalLanguages.msg_btn_produitajoute, 2000, 'bottom');
                            }
                        }
                        else {
                            _this.addNewItem({
                                "id": res.id_service,
                                "titre": res.titre,
                                "prix": res.prix,
                                "img": res.url_image,
                                "quantite": 1
                            });
                            _this.globalProv.presentToast(_this.superP.globalLanguages.alert_ajouter_au_panier, 2000, 'bottom');
                        }
                    });
                }
                else {
                    _this.globalProv.presentToast(_this.superP.globalLanguages.alert_login_must_be_connetced, 2000, 'bottom');
                    //this.globalProv.presentModal('SigninPage')
                }
            });
        });
    };
    ProFavComponent.prototype.checkFavorie = function (id_produit) {
        var _this = this;
        var self = this;
        this.storage.ready().then(function () {
            _this.storage.get("id_contact").then(function (id_contact) {
                if (id_contact) {
                    self.globalProv.checkFavoris(id_contact, id_produit).subscribe(function (Data) {
                        if (Data) {
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
                }
                else {
                    _this.globalProv.presentToast(_this.superP.globalLanguages.alert_login_must_be_connetced, 3000, 'bottom');
                }
            });
        });
    };
    ProFavComponent.prototype.addNewItem = function (item) {
        var self = this;
        self.superP.collecteurPanier.push(item);
        self.storage.set("panier", self.superP.collecteurPanier);
    };
    ProFavComponent.prototype.removeItem = function (array, element) {
        return array.filter(function (e) { return e !== element; });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ProFavComponent.prototype, "value", void 0);
    ProFavComponent = tslib_1.__decorate([
        Component({
            selector: 'app-pro-fav',
            templateUrl: './pro-fav.component.html',
            styleUrls: ['./pro-fav.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            NavParams,
            SuperService,
            GlobalService,
            NavController,
            Storage])
    ], ProFavComponent);
    return ProFavComponent;
}());
export { ProFavComponent };
//# sourceMappingURL=pro-fav.component.js.map