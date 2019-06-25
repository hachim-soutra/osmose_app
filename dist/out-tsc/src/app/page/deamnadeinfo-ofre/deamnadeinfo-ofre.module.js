import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DeamnadeinfoOfrePage } from './deamnadeinfo-ofre.page';
var routes = [
    {
        path: '',
        component: DeamnadeinfoOfrePage
    }
];
var DeamnadeinfoOfrePageModule = /** @class */ (function () {
    function DeamnadeinfoOfrePageModule() {
    }
    DeamnadeinfoOfrePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [DeamnadeinfoOfrePage]
        })
    ], DeamnadeinfoOfrePageModule);
    return DeamnadeinfoOfrePageModule;
}());
export { DeamnadeinfoOfrePageModule };
//# sourceMappingURL=deamnadeinfo-ofre.module.js.map