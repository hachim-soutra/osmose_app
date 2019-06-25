import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
var CatPage = /** @class */ (function () {
    function CatPage(globalProv, superP, navCtrl, navParams) {
        var _this = this;
        this.globalProv = globalProv;
        this.superP = superP;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.result = [];
        this.result1 = [];
        this.navParams.paramMap.subscribe(function (para) {
            if (!para.has('id')) {
                return;
            }
            _this.id_categorie = para.get('idc');
            _this.id_categorie1 = para.get('idr');
            _this.id_categorie2 = para.get('id');
            console.log(_this.id_categorie2);
            _this.init();
        });
    }
    CatPage.prototype.ngOnInit = function () {
    };
    CatPage.prototype.segmentChanged = function (ev) {
        console.log('Segment changed', ev.detail);
        if (ev.detail.value == 'grid') {
            this.x = 0;
        }
        else {
            this.x = 1;
        }
    };
    CatPage.prototype.init = function () {
        var _this = this;
        var self = this;
        self.globalProv.getListCategories().subscribe(function (Data) {
            self.result1 = Data;
            var x;
            for (var _i = 0, _a = _this.result1; _i < _a.length; _i++) {
                x = _a[_i];
                if (x.id_category == _this.id_categorie) {
                    console.log(x);
                    _this.categorie = x.name;
                    var i = void 0;
                    for (var _b = 0, _c = x.children; _b < _c.length; _b++) {
                        i = _c[_b];
                        if (i.id_category == _this.id_categorie1) {
                            console.log(i);
                            _this.sousCategorie = i.name;
                            var e = void 0;
                            for (var _d = 0, _e = i.children; _d < _e.length; _d++) {
                                e = _e[_d];
                                if (e.id_category == _this.id_categorie2) {
                                    console.log(e);
                                    _this.sousCategorie2 = e.name;
                                    _this.result = e.children;
                                }
                            }
                        }
                    }
                }
            }
            console.log("eeee" + _this.sousCategorie);
            console.log("res eboutique : ", self.result);
        });
    };
    CatPage.prototype.afficherProduit = function (id) {
        this.navCtrl.navigateRoot("produit-detail/" + id);
    };
    CatPage.prototype.goToProduits = function (res, data) {
        console.log('rres : ', res);
        if (data.length != 0) {
            this.navCtrl.navigateRoot("categories-page/" + this.categorie + "/rebrique/" + this.id_categorie1 + "/sous-cat/" + res);
        }
        else {
            this.globalProv.presentToast("this.superP.globalLanguages.no_articles", 2000, 'bottom');
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], CatPage.prototype, "res", void 0);
    CatPage = tslib_1.__decorate([
        Component({
            selector: 'app-cat',
            templateUrl: './cat.page.html',
            styleUrls: ['./cat.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [GlobalService,
            SuperService,
            NavController,
            ActivatedRoute])
    ], CatPage);
    return CatPage;
}());
export { CatPage };
//# sourceMappingURL=cat.page.js.map