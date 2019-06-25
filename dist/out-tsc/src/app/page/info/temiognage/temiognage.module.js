import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TemiognagePage } from './temiognage.page';
var routes = [
    {
        path: '',
        component: TemiognagePage
    }
];
var TemiognagePageModule = /** @class */ (function () {
    function TemiognagePageModule() {
    }
    TemiognagePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TemiognagePage]
        })
    ], TemiognagePageModule);
    return TemiognagePageModule;
}());
export { TemiognagePageModule };
//# sourceMappingURL=temiognage.module.js.map