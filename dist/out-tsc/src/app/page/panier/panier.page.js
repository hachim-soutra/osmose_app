import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { SuperService } from 'src/app/service/super.service';
import { Storage } from '@ionic/storage';
import { GlobalService } from 'src/app/service/global.service';
var PanierPage = /** @class */ (function () {
    function PanierPage(modalController, storage, superP, navCtrl, globalProv, alertCtrl) {
        this.modalController = modalController;
        this.storage = storage;
        this.superP = superP;
        this.navCtrl = navCtrl;
        this.globalProv = globalProv;
        this.alertCtrl = alertCtrl;
        this.PanierObj = [];
    }
    PanierPage.prototype.ngOnInit = function () {
        var _this = this;
        this.showPanierContent();
        this.storage.get("id_contact").then(function (data) {
            if (data) {
                console.log('panier : ', data);
            }
            else {
                _this.globalProv.presentToast(_this.superP.globalLanguages.alert_login_must_be_connetced, 2000, 'bottom');
                _this.PanierObj = [];
                _this.storage.remove('panier');
                //this.navCtrl.navigateForward("signin");  
            }
        });
    };
    PanierPage.prototype.showPanierContent = function () {
        var _this = this;
        var self = this;
        self.total = 0;
        this.storage.ready().then(function () {
            _this.storage.get("panier").then(function (data) {
                if (data) {
                    console.log('panier : ', data);
                    self.PanierObj = data;
                    self.superP.collecteurPanier = data;
                    for (var i = 0; i < data.length; i++) {
                        _this.total = parseFloat(_this.total) + parseFloat(data[i].prix) * parseFloat(data[i].quantite);
                    }
                }
                else {
                    self.PanierObj = [];
                }
            }).catch(function (err) {
                console.error("error : ", err);
            });
        });
    };
    PanierPage.prototype.goToCheckout = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get("id_contact").then(function (id_contact) {
                if (id_contact == null) {
                    _this.globalProv.presentToast(_this.superP.globalLanguages.alert_login_must_be_connetced, 2000, 'bottom');
                }
                else {
                    _this.navCtrl.navigateForward("checkout");
                }
            });
        });
    };
    PanierPage.prototype.removeItem = function (id) {
        var _this = this;
        var self = this;
        // let i = x;
        self.storage.ready().then(function () {
            self.storage.get("panier").then(function (data) {
                if (data) {
                    console.log('data : ', data);
                    var cnt_1 = 0;
                    data.forEach(function (element) {
                        // if(i == "id"){
                        //   if(element.id == id){
                        //       console.log('inside if : ', id);
                        //       self.superP.collecteurPanier.splice(cnt, 1);
                        //       console.log('inside collecteur : ', JSON.stringify(self.superP.collecteurPanier));
                        //   }
                        // }else{
                        // }
                        if (element.id_produit_declinaison == id) {
                            console.log('inside if 2 : ', id);
                            self.superP.collecteurPanier.splice(cnt_1, 1);
                            console.log('inside collecteur 2: ', JSON.stringify(self.superP.collecteurPanier));
                            self.storage.set("panier", self.superP.collecteurPanier);
                            self.showPanierContent();
                            self.globalProv.presentToast(_this.superP.globalLanguages.alert_supprimer_au_panier, 3000, 'bottom');
                        }
                        cnt_1++;
                    });
                }
            });
        });
    };
    PanierPage.prototype.removeItemid = function (id) {
        var _this = this;
        var self = this;
        // let i = x;
        self.storage.ready().then(function () {
            self.storage.get("panier").then(function (data) {
                if (data) {
                    console.log('data : ', data);
                    var cnt_2 = 0;
                    data.forEach(function (element) {
                        // if(i == "id"){
                        if (element.id == id) {
                            console.log('inside if : ', id);
                            self.superP.collecteurPanier.splice(cnt_2, 1);
                            console.log('inside collecteur : ', JSON.stringify(self.superP.collecteurPanier));
                            self.storage.set("panier", self.superP.collecteurPanier);
                            self.showPanierContent();
                            self.globalProv.presentToast(_this.superP.globalLanguages.alert_supprimer_au_panier, 3000, 'bottom');
                        }
                        cnt_2++;
                        // }else{
                        // if(element.id_produit_declinaison == id){
                        //   console.log('inside if 2 : ', id);
                        //   self.superP.collecteurPanier.splice(cnt, 1);
                        //   console.log('inside collecteur 2: ', JSON.stringify(self.superP.collecteurPanier));
                        // }
                        // }
                    });
                }
            });
        });
    };
    PanierPage.prototype.showConfirm = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var confirm;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: this.superP.globalLanguages.panier_header_confirmation,
                            message: this.superP.globalLanguages.panier_msg_confirmation,
                            buttons: [
                                {
                                    text: 'No',
                                    handler: function () { }
                                },
                                {
                                    text: 'Oui',
                                    handler: function () {
                                        _this.removeItem(id);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        confirm = _a.sent();
                        return [4 /*yield*/, confirm.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PanierPage.prototype.showConfirmid = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var confirm;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: this.superP.globalLanguages.panier_header_confirmation,
                            message: this.superP.globalLanguages.panier_msg_confirmation,
                            buttons: [
                                {
                                    text: 'No',
                                    handler: function () { }
                                },
                                {
                                    text: 'Oui',
                                    handler: function () {
                                        _this.removeItemid(id);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        confirm = _a.sent();
                        return [4 /*yield*/, confirm.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PanierPage.prototype.moins = function (id, x) {
        var _this = this;
        var i = x;
        var self = this;
        console.log('res : ', JSON.stringify(id));
        this.storage.ready().then(function () {
            _this.storage.get("panier").then(function (data) {
                var cnt = 0;
                data.forEach(function (element) {
                    if (i == "id") {
                        if (element.id == id) {
                            if (self.superP.collecteurPanier[cnt].quantite > 1) {
                                self.superP.collecteurPanier[cnt].quantite--;
                                console.log('collecteur 1 : ', JSON.stringify(self.superP.collecteurPanier));
                            }
                        }
                    }
                    else {
                        if (self.superP.collecteurPanier[cnt].quantite > 1) {
                            self.superP.collecteurPanier[cnt].quantite--;
                            console.log('collecteur 2 : ', JSON.stringify(self.superP.collecteurPanier));
                        }
                    }
                    self.storage.set("panier", self.superP.collecteurPanier);
                    self.globalProv.presentToast(_this.superP.globalLanguages.msg_quantite_mise_jour, 2000, 'bottom');
                    self.showPanierContent();
                    cnt++;
                });
            });
        });
    };
    PanierPage.prototype.plus = function (id, x) {
        var _this = this;
        console.log(x);
        var i = x;
        var self = this;
        this.storage.ready().then(function () {
            _this.storage.get("panier").then(function (data) {
                var cnt = 0;
                data.forEach(function (element) {
                    console.log(JSON.stringify(element));
                    if (i == "id") {
                        // if(element.id == id){
                        console.log('elemnt : ' + element.id + " res : " + id);
                        self.superP.collecteurPanier[cnt].quantite++;
                        console.log('collecteur 1 : ', JSON.stringify(self.superP.collecteurPanier));
                        // }
                    }
                    else {
                        // if(element.id_produit_declinaison == id){
                        console.log('elemnt : ' + element.id + " res : " + id);
                        self.superP.collecteurPanier[cnt].quantite++;
                        console.log('collecteur 2 : ', JSON.stringify(self.superP.collecteurPanier));
                        // }
                    }
                    self.storage.set("panier", self.superP.collecteurPanier);
                    self.globalProv.presentToast(_this.superP.globalLanguages.msg_quantite_mise_jour, 2000, 'bottom');
                    self.showPanierContent();
                    cnt++;
                });
            });
        });
    };
    PanierPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        setTimeout(function () {
            _this.ngOnInit();
            refresher.target.complete();
        }, 500);
    };
    PanierPage = tslib_1.__decorate([
        Component({
            selector: 'app-panier',
            templateUrl: './panier.page.html',
            styleUrls: ['./panier.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            Storage,
            SuperService,
            NavController,
            GlobalService,
            AlertController])
    ], PanierPage);
    return PanierPage;
}());
export { PanierPage };
//# sourceMappingURL=panier.page.js.map