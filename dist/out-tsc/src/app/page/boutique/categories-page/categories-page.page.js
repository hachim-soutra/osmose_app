import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { NavController } from '@ionic/angular';
var CategoriesPagePage = /** @class */ (function () {
    function CategoriesPagePage(globalProv, superP, navCtrl) {
        this.globalProv = globalProv;
        this.superP = superP;
        this.navCtrl = navCtrl;
        this.places = [];
    }
    CategoriesPagePage.prototype.ngOnInit = function () {
        this.init();
    };
    CategoriesPagePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        setTimeout(function () {
            _this.init();
            refresher.target.complete();
        }, 500);
    };
    CategoriesPagePage.prototype.init = function () {
        var self = this;
        self.globalProv.getListCategories().subscribe(function (Data) {
            self.result = Data;
            console.log("res eboutique : ", self.result);
        });
    };
    CategoriesPagePage.prototype.goToProduits = function (res, data) {
        console.log('rres : ', res);
        if (data.length != 0) {
            this.navCtrl.navigateRoot("categories-page/" + res);
        }
        else {
            this.globalProv.presentToast("this.superP.globalLanguages.no_articles", 2000, 'bottom');
        }
    };
    CategoriesPagePage.prototype.afficherProduit = function (id) {
        this.navCtrl.navigateRoot("produit-detail/" + id);
    };
    CategoriesPagePage = tslib_1.__decorate([
        Component({
            selector: 'app-categories-page',
            templateUrl: './categories-page.page.html',
            styleUrls: ['./categories-page.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [GlobalService, SuperService, NavController])
    ], CategoriesPagePage);
    return CategoriesPagePage;
}());
export { CategoriesPagePage };
//# sourceMappingURL=categories-page.page.js.map