import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { ActivatedRoute, Router } from '@angular/router';
var ProduitPage = /** @class */ (function () {
    function ProduitPage(superP, globalProv, navParams, router) {
        this.superP = superP;
        this.globalProv = globalProv;
        this.navParams = navParams;
        this.router = router;
    }
    ProduitPage.prototype.ngOnInit = function () {
        var _this = this;
        this.navParams.paramMap.subscribe(function (para) {
            if (!para.has('idp')) {
                _this.router.navigateByUrl('catalogue');
                return;
            }
            _this.id = para.get('idp');
        });
        this.init();
    };
    ProduitPage.prototype.init = function () {
        var self = this;
        self.globalProv.getListProduits("1").subscribe(function (Data) {
            if (Data) {
                self.res = Data;
                console.log("produits par categorie : " + JSON.stringify(Data));
            }
        });
    };
    ProduitPage = tslib_1.__decorate([
        Component({
            selector: 'app-produit',
            templateUrl: './produit.page.html',
            styleUrls: ['./produit.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [SuperService,
            GlobalService,
            ActivatedRoute,
            Router])
    ], ProduitPage);
    return ProduitPage;
}());
export { ProduitPage };
//# sourceMappingURL=produit.page.js.map