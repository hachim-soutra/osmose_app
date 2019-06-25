import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ProduitServiceComponent } from 'src/app/component/produit-service/produit-service.component';
var ProduitCatPage = /** @class */ (function () {
    function ProduitCatPage(globalProv, superP, navParams, router, modalController) {
        this.globalProv = globalProv;
        this.superP = superP;
        this.navParams = navParams;
        this.router = router;
        this.modalController = modalController;
    }
    ProduitCatPage.prototype.ngOnInit = function () {
        var _this = this;
        this.navParams.paramMap.subscribe(function (para) {
            if (!para.has('id')) {
                _this.router.navigateByUrl('catalogue');
                return;
            }
            _this.id = para.get('id');
        });
        this.init();
    };
    ProduitCatPage.prototype.init = function () {
        var self = this;
        self.globalProv.getProduitsParCategorie(self.id).subscribe(function (Data) {
            if (Data) {
                self.result = Data;
                console.log("produits par categorie : " + JSON.stringify(self.result));
            }
        });
    };
    ProduitCatPage.prototype.openProduit = function (x) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: ProduitServiceComponent,
                            componentProps: { value: x }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ProduitCatPage.prototype, "value", void 0);
    ProduitCatPage = tslib_1.__decorate([
        Component({
            selector: 'app-produit-cat',
            templateUrl: './produit-cat.page.html',
            styleUrls: ['./produit-cat.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [GlobalService,
            SuperService,
            ActivatedRoute,
            Router,
            ModalController])
    ], ProduitCatPage);
    return ProduitCatPage;
}());
export { ProduitCatPage };
//# sourceMappingURL=produit-cat.page.js.map