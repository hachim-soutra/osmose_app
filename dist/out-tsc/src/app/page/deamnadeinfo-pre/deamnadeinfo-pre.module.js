import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DeamnadeinfoPrePage } from './deamnadeinfo-pre.page';
var routes = [
    {
        path: '',
        component: DeamnadeinfoPrePage
    }
];
var DeamnadeinfoPrePageModule = /** @class */ (function () {
    function DeamnadeinfoPrePageModule() {
    }
    DeamnadeinfoPrePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [DeamnadeinfoPrePage]
        })
    ], DeamnadeinfoPrePageModule);
    return DeamnadeinfoPrePageModule;
}());
export { DeamnadeinfoPrePageModule };
//# sourceMappingURL=deamnadeinfo-pre.module.js.map