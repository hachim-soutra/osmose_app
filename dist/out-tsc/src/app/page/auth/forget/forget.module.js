import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ForgetPage } from './forget.page';
var routes = [
    {
        path: '',
        component: ForgetPage
    }
];
var ForgetPageModule = /** @class */ (function () {
    function ForgetPageModule() {
    }
    ForgetPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ReactiveFormsModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ForgetPage]
        })
    ], ForgetPageModule);
    return ForgetPageModule;
}());
export { ForgetPageModule };
//# sourceMappingURL=forget.module.js.map