import * as tslib_1 from "tslib";
import { Component, ViewChild, Input } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
var ArticlePage = /** @class */ (function () {
    function ArticlePage(globalProv, superP, navCtrl, navParams, storage) {
        var _this = this;
        this.globalProv = globalProv;
        this.superP = superP;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.slideOpts = {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            slideTo: 5
        };
        this.attribut = [];
        this.declinison_id = null;
        this.navParams.paramMap.subscribe(function (para) {
            if (!para.has('id')) {
                return;
            }
            _this.check = false;
            _this.id_produit = para.get('id');
            _this.showAdd = true;
            _this.btnAddFavoris = true;
            console.log(_this.id_produit);
            _this.init();
            // console.log(this.res.declinaison.length);
        });
    }
    ArticlePage.prototype.checkFavorie = function () {
        var _this = this;
        var self = this;
        this.storage.ready().then(function () {
            _this.storage.get("id_contact").then(function (id_contact) {
                if (id_contact) {
                    self.globalProv.checkFavoris(id_contact, _this.id_produit).subscribe(function (Data) {
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
    ArticlePage.prototype.checkProduct = function (id_produit) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get("panier").then(function (data) {
                if (data) {
                    _this.superP.collecteurPanier = data;
                    if (_this.superP.collecteurPanier.find(function (obj) { obj.id == id_produit; })) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            });
        });
    };
    ArticlePage.prototype.demandeInfo = function (x) {
        this.navCtrl.navigateForward("demandeinfo/prestation/" + x);
    };
    ArticlePage.prototype.addToFavoris = function (id_catalogue) {
        var _this = this;
        if (this.check == 0) {
            this.globalProv.presentToast(this.superP.globalLanguages.check, 3000, 'bottom');
        }
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
    ArticlePage.prototype.removeFromFavoris = function (id_catalogue) {
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
    ArticlePage.prototype.addNewItem = function (item) {
        var self = this;
        self.superP.collecteurPanier.push(item);
        self.storage.set("panier", self.superP.collecteurPanier);
    };
    ArticlePage.prototype.removeItem = function (array, element) {
        return array.filter(function (e) { return e !== element; });
    };
    // declinisonSelected(v,x) {
    //   console.log('v : '+v.detail.value.prix);
    //   this.check = true;
    //   this.res.prix = v.detail.value.prix;
    //   this.attribut =v.detail.value.attribut;
    //   this.declinison_id = v.detail.value.id_produit_declinaison;
    //   this.declinison_image = this.res.url_image;
    // }
    ArticlePage.prototype.ngOnInit = function () {
        this.checkProduct(this.id_produit);
        this.checkFavorie();
    };
    ArticlePage.prototype.init = function () {
        var _this = this;
        var self = this;
        self.globalProv.produit_detail(this.id_produit).subscribe(function (Data) {
            var obj = [];
            obj = Data;
            if (obj.status == "200") {
                _this.res = obj.result;
                console.log("res eboutique : ", self.res);
            }
            else {
                self.globalProv.presentToast(obj.result, 3000, 'bottom');
                return false;
            }
        });
    };
    ArticlePage.prototype.addToCart = function (res) {
        var _this = this;
        //  if( this.res.declinaison.length == 0){
        //   console.log(this.res.declinaison.length);
        //  }else{
        // if(this.declinison_id == null ){
        //   this.globalProv.presentToast(this.superP.globalLanguages.produit_detail_no_attribut_selected,4000,'bottom');
        //   return false;
        // }
        //  }
        var self = this;
        this.storage.ready().then(function () {
            _this.storage.get("id_contact").then(function (id_contact) {
                if (id_contact != null) {
                    _this.storage.get("panier").then(function (data) {
                        if (data) {
                            console.log('panier : ', data);
                            var found_1 = false;
                            var cnt_1 = 0;
                            data.forEach(function (element) {
                                console.log('panier' + JSON.stringify(element));
                                console.log(res);
                                if (element.id == res.id_product) {
                                    if (_this.id_produit == null) {
                                        found_1 = true;
                                        _this.superP.collecteurPanier[cnt_1].quantite++;
                                        self.storage.set("panier", self.superP.collecteurPanier);
                                        _this.globalProv.presentToast(_this.superP.globalLanguages.msg_quantite_mise_jour, 2000, 'bottom');
                                    }
                                    else {
                                        if (element.id == _this.id_produit) {
                                            found_1 = true;
                                            _this.superP.collecteurPanier[cnt_1].quantite++;
                                            self.storage.set("panier", self.superP.collecteurPanier);
                                            _this.globalProv.presentToast(_this.superP.globalLanguages.msg_quantite_mise_jour, 2000, 'bottom');
                                        }
                                    }
                                }
                                cnt_1++;
                            });
                            if (!found_1) {
                                _this.addNewItem({
                                    "id": res.id_product,
                                    "titre": res.name,
                                    "prix": res.price,
                                    "img": _this.res.url_image,
                                    "quantite": 1,
                                });
                                _this.globalProv.presentToast(_this.superP.globalLanguages.msg_btn_produitajoute, 2000, 'bottom');
                            }
                        }
                        else {
                            _this.addNewItem({
                                "id": res.id_product,
                                "titre": res.name,
                                "prix": res.price,
                                "img": _this.res.url_image,
                                "quantite": 1,
                            });
                            _this.globalProv.presentToast(_this.superP.globalLanguages.alert_ajouter_au_panier, 2000, 'bottom');
                        }
                    });
                }
                else {
                    _this.globalProv.presentToast(_this.superP.globalLanguages.alert_login_must_be_connetced, 2000, 'bottom');
                }
            });
        });
    };
    tslib_1.__decorate([
        ViewChild('slides'),
        tslib_1.__metadata("design:type", Object)
    ], ArticlePage.prototype, "slides", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ArticlePage.prototype, "value", void 0);
    ArticlePage = tslib_1.__decorate([
        Component({
            selector: 'app-article',
            templateUrl: './article.page.html',
            styleUrls: ['./article.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [GlobalService, SuperService, NavController, ActivatedRoute, Storage])
    ], ArticlePage);
    return ArticlePage;
}());
export { ArticlePage };
//# sourceMappingURL=article.page.js.map