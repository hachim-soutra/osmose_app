import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProduitDetailPage } from './produit-detail.page';
var routes = [
    {
        path: '',
        component: ProduitDetailPage
    }
];
var ProduitDetailPageModule = /** @class */ (function () {
    function ProduitDetailPageModule() {
    }
    ProduitDetailPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ProduitDetailPage]
        })
    ], ProduitDetailPageModule);
    return ProduitDetailPageModule;
}());
export { ProduitDetailPageModule };
//# sourceMappingURL=produit-detail.module.js.map