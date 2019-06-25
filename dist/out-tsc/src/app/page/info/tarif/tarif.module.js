import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TarifPage } from './tarif.page';
var routes = [
    {
        path: '',
        component: TarifPage
    }
];
var TarifPageModule = /** @class */ (function () {
    function TarifPageModule() {
    }
    TarifPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TarifPage]
        })
    ], TarifPageModule);
    return TarifPageModule;
}());
export { TarifPageModule };
//# sourceMappingURL=tarif.module.js.map