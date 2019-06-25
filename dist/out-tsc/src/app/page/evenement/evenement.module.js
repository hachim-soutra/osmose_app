import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EvenementPage } from './evenement.page';
var routes = [
    {
        path: '',
        component: EvenementPage
    }
];
var EvenementPageModule = /** @class */ (function () {
    function EvenementPageModule() {
    }
    EvenementPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EvenementPage]
        })
    ], EvenementPageModule);
    return EvenementPageModule;
}());
export { EvenementPageModule };
//# sourceMappingURL=evenement.module.js.map