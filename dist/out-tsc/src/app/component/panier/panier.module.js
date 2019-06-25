import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PanierPage } from './panier.page';
var routes = [
    {
        path: '',
        component: PanierPage
    }
];
var PanierPageModule = /** @class */ (function () {
    function PanierPageModule() {
    }
    PanierPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PanierPage]
        })
    ], PanierPageModule);
    return PanierPageModule;
}());
export { PanierPageModule };
//# sourceMappingURL=panier.module.js.map