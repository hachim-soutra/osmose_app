import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComptePage } from './compte.page';
var routes = [
    {
        path: '',
        component: ComptePage
    }
];
var ComptePageModule = /** @class */ (function () {
    function ComptePageModule() {
    }
    ComptePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ComptePage]
        })
    ], ComptePageModule);
    return ComptePageModule;
}());
export { ComptePageModule };
//# sourceMappingURL=compte.module.js.map