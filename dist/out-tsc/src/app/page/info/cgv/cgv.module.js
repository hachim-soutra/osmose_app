import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CgvPage } from './cgv.page';
var routes = [
    {
        path: '',
        component: CgvPage
    }
];
var CgvPageModule = /** @class */ (function () {
    function CgvPageModule() {
    }
    CgvPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CgvPage]
        })
    ], CgvPageModule);
    return CgvPageModule;
}());
export { CgvPageModule };
//# sourceMappingURL=cgv.module.js.map