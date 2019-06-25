import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { NavController } from '@ionic/angular';
var ProduitDetailPage = /** @class */ (function () {
    function ProduitDetailPage(globalProv, superP, 
    // private modalController: ModalController,
    navCtrl, navParams) {
        var _this = this;
        this.globalProv = globalProv;
        this.superP = superP;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // filtres:any='name'
        // affichageType:any='grid'
        this.result = [];
        this.result1 = [];
        this.navParams.paramMap.subscribe(function (para) {
            if (!para.has('id')) {
                return;
            }
            _this.id_categorie = para.get('id');
            console.log(_this.id_categorie);
            _this.init();
        });
    }
    ProduitDetailPage.prototype.ngOnInit = function () {
    };
    ProduitDetailPage.prototype.segmentChanged = function (ev) {
        console.log('Segment changed', ev.detail);
        if (ev.detail.value == 'grid') {
            this.x = 0;
        }
        else {
            this.x = 1;
        }
    };
    ProduitDetailPage.prototype.init = function () {
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
                    _this.result = x.children;
                }
            }
            console.log("eeee" + _this.categorie);
            console.log("res eboutique : ", self.result);
        });
    };
    ProduitDetailPage.prototype.afficherProduit = function (id) {
        this.navCtrl.navigateRoot("produit-detail/" + id);
    };
    ProduitDetailPage.prototype.goToProduits = function (res, data, i) {
        console.log('rres : ', i);
        if (data.length != 0) {
            this.navCtrl.navigateForward("categories-page/" + i + "/rebrique/" + res);
        }
        else {
            this.globalProv.presentToast("this.superP.globalLanguages.no_articles", 2000, 'bottom');
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ProduitDetailPage.prototype, "res", void 0);
    ProduitDetailPage = tslib_1.__decorate([
        Component({
            selector: 'app-produit-detail',
            templateUrl: './produit-detail.page.html',
            styleUrls: ['./produit-detail.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [GlobalService,
            SuperService,
            NavController,
            ActivatedRoute])
    ], ProduitDetailPage);
    return ProduitDetailPage;
}());
export { ProduitDetailPage };
//# sourceMappingURL=produit-detail.page.js.map