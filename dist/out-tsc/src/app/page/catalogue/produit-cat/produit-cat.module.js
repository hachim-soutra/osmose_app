import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProduitCatPage } from './produit-cat.page';
import { ProduitServiceComponent } from 'src/app/component/produit-service/produit-service.component';
var routes = [
    {
        path: '',
        component: ProduitCatPage
    }
];
var ProduitCatPageModule = /** @class */ (function () {
    function ProduitCatPageModule() {
    }
    ProduitCatPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ProduitCatPage, ProduitServiceComponent],
            entryComponents: [ProduitServiceComponent]
        })
    ], ProduitCatPageModule);
    return ProduitCatPageModule;
}());
export { ProduitCatPageModule };
//# sourceMappingURL=produit-cat.module.js.map