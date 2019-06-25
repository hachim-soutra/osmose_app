import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LieuPage } from './lieu.page';
var routes = [
    {
        path: '',
        component: LieuPage
    }
];
var LieuPageModule = /** @class */ (function () {
    function LieuPageModule() {
    }
    LieuPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [LieuPage]
        })
    ], LieuPageModule);
    return LieuPageModule;
}());
export { LieuPageModule };
//# sourceMappingURL=lieu.module.js.map