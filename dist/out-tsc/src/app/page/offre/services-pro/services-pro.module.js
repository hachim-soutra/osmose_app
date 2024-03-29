import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ServicesProPage } from './services-pro.page';
var routes = [
    {
        path: '',
        component: ServicesProPage
    }
];
var ServicesProPageModule = /** @class */ (function () {
    function ServicesProPageModule() {
    }
    ServicesProPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ServicesProPage]
        })
    ], ServicesProPageModule);
    return ServicesProPageModule;
}());
export { ServicesProPageModule };
//# sourceMappingURL=services-pro.module.js.map