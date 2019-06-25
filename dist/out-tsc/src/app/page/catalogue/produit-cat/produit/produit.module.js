import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProduitPage } from './produit.page';
var routes = [
    {
        path: '',
        component: ProduitPage
    }
];
var ProduitPageModule = /** @class */ (function () {
    function ProduitPageModule() {
    }
    ProduitPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ProduitPage]
        })
    ], ProduitPageModule);
    return ProduitPageModule;
}());
export { ProduitPageModule };
//# sourceMappingURL=produit.module.js.map