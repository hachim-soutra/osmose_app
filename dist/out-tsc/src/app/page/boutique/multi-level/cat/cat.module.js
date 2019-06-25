import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CatPage } from './cat.page';
var routes = [
    {
        path: '',
        component: CatPage
    }
];
var CatPageModule = /** @class */ (function () {
    function CatPageModule() {
    }
    CatPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CatPage]
        })
    ], CatPageModule);
    return CatPageModule;
}());
export { CatPageModule };
//# sourceMappingURL=cat.module.js.map