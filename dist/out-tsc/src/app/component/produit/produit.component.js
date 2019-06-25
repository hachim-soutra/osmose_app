import * as tslib_1 from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { ModalController, NavParams, NavController } from '@ionic/angular';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { Storage } from '@ionic/storage';
var ProduitComponent = /** @class */ (function () {
    function ProduitComponent(modal, nav, superP, globalProv, navCtrl, storage) {
        this.modal = modal;
        this.nav = nav;
        this.superP = superP;
        this.globalProv = globalProv;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.slideOpts = {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            slideTo: 5
        };
        this.attribut = [];
        this.res = this.nav.get('value');
        // this.globalProv.produit_detail(this.res.id_produit).subscribe(Data => {
        //   let obj:any=[];
        //   obj =Data;
        //   if( obj.status =="200"){
        //     this.res = obj.result;
        //     console.log("res eboutique : ", this.res);
        //   }else{
        //     this.globalProv.presentToast(obj.result,3000,'bottom');
        //     return false;
        //   }
        // }); 
        this.showAdd = true;
        console.log('result detail : ', JSON.stringify(this.res));
        this.btnAddFavoris = true;
    }
    ProduitComponent.prototype.ngOnInit = function () {
        this.checkProduct(this.res.id_produit);
        this.checkFavorie(this.res.id_produit);
        this.getDetailProduct(this.res.id_produit);
    };
    ProduitComponent.prototype.getDetailProduct = function (id_produit) {
        var _this = this;
        var self = this;
        self.globalProv.produit_detail(id_produit).subscribe(function (Data) {
            var Obj = [];
            Obj = Data;
            console.log("result eboutique : ", Obj);
            if (Obj.status == "200") {
                self.res = Obj.result;
                console.log("res eboutique : ", self.res);
            }
            else {
                _this.res = [];
            }
        });
    };
    ProduitComponent.prototype.closeModal = function () {
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
    ProduitComponent.prototype.demandeInfo = function (x) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.closeModal();
                this.navCtrl.navigateForward("demandeinfo/prestation/" + x);
                return [2 /*return*/];
            });
        });
    };
    ProduitComponent.prototype.addToFavoris = function (id_catalogue) {
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
    ProduitComponent.prototype.removeFromFavoris = function (id_catalogue) {
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
    ProduitComponent.prototype.checkProduct = function (id_produit) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get("panier").then(function (data) {
                if (data) {
                    _this.superP.collecteurPanier = data;
                    if (_this.superP.collecteurPanier.find(function (obj) {
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
    ProduitComponent.prototype.addToCart = function (res) {
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
                                "img": self.res.declinison_image,
                                "quantite": 1,
                                "attribut": _this.res.attribut,
                                "id_produit_declinaison": _this.res.declinison_id
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
    ProduitComponent.prototype.declinisonSelected = function (v) {
        console.log('v : ' + v.attribut);
        this.res.prix = v.prix;
        this.attribut = v.attribut;
        this.declinison_id = v.id_produit_declinaison;
        this.declinison_image = v.url_image;
    };
    ProduitComponent.prototype.checkFavorie = function (id_produit) {
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
    ProduitComponent.prototype.addNewItem = function (item) {
        var self = this;
        self.superP.collecteurPanier.push(item);
        self.storage.set("panier", self.superP.collecteurPanier);
    };
    ProduitComponent.prototype.removeItem = function (array, element) {
        return array.filter(function (e) { return e !== element; });
    };
    tslib_1.__decorate([
        ViewChild('slides'),
        tslib_1.__metadata("design:type", Object)
    ], ProduitComponent.prototype, "slides", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ProduitComponent.prototype, "value", void 0);
    ProduitComponent = tslib_1.__decorate([
        Component({
            selector: 'app-produit',
            templateUrl: './produit.component.html',
            styleUrls: ['./produit.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            NavParams,
            SuperService,
            GlobalService,
            NavController,
            Storage])
    ], ProduitComponent);
    return ProduitComponent;
}());
export { ProduitComponent };
//# sourceMappingURL=produit.component.js.map