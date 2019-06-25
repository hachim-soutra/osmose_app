import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ModalController, NavParams, NavController } from '@ionic/angular';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { Storage } from '@ionic/storage';
var OffrePComponent = /** @class */ (function () {
    function OffrePComponent(modal, nav, superP, globalProv, navCtrl, storage) {
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
    OffrePComponent.prototype.ngOnInit = function () {
        this.checkProduct(this.res.id_service);
        console.log('detail services  : ', this.res.id_service);
    };
    OffrePComponent.prototype.closeModal = function () {
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
    OffrePComponent.prototype.demandeInfo = function (x) {
        this.navCtrl.navigateForward("demandeinfo/prestation/" + x);
        this.closeModal();
    };
    OffrePComponent.prototype.checkProduct = function (id_produit) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get("panier").then(function (data) {
                if (data) {
                    console.log(data);
                    _this.superP.collecteurPanier = data;
                    if (_this.superP.collecteurPanier.find(function (obj) {
                        console.log("object :" + obj);
                        obj.id == id_produit;
                        console.log(obj.id);
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
    OffrePComponent.prototype.addToCart = function (res) {
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
                                if (element.id == res.id_service) {
                                    found_1 = true;
                                    _this.superP.collecteurPanier[cnt_1].quantite++;
                                    self.storage.set("panier", self.superP.collecteurPanier);
                                    _this.globalProv.presentToast(_this.superP.globalLanguages.msg_quantite_mise_jour, 2000, 'bottom');
                                }
                                cnt_1++;
                            });
                            if (!found_1) {
                                _this.addNewItem({
                                    "id": res.id_service,
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
    OffrePComponent.prototype.addNewItem = function (item) {
        var self = this;
        self.superP.collecteurPanier.push(item);
        self.storage.set("panier", self.superP.collecteurPanier);
    };
    OffrePComponent.prototype.removeItem = function (array, element) {
        return array.filter(function (e) { return e !== element; });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], OffrePComponent.prototype, "value", void 0);
    OffrePComponent = tslib_1.__decorate([
        Component({
            selector: 'app-offre-p',
            templateUrl: './offre-p.component.html',
            styleUrls: ['./offre-p.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            NavParams,
            SuperService,
            GlobalService,
            NavController,
            Storage])
    ], OffrePComponent);
    return OffrePComponent;
}());
export { OffrePComponent };
//# sourceMappingURL=offre-p.component.js.map