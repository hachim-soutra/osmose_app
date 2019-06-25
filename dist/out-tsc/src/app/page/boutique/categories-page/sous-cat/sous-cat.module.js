import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SousCatPage } from './sous-cat.page';
import { ProduitComponent } from 'src/app/component/produit/produit.component';
import { DemandeinfoComponent } from 'src/app/component/demandeinfo/demandeinfo.component';
var routes = [
    {
        path: '',
        component: SousCatPage
    }
];
var SousCatPageModule = /** @class */ (function () {
    function SousCatPageModule() {
    }
    SousCatPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SousCatPage, ProduitComponent, DemandeinfoComponent],
            entryComponents: [ProduitComponent, DemandeinfoComponent]
        })
    ], SousCatPageModule);
    return SousCatPageModule;
}());
export { SousCatPageModule };
//# sourceMappingURL=sous-cat.module.js.map