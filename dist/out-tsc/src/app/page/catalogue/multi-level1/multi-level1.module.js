import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MultiLevel1Page } from './multi-level1.page';
var routes = [
    {
        path: '',
        component: MultiLevel1Page
    }
];
var MultiLevel1PageModule = /** @class */ (function () {
    function MultiLevel1PageModule() {
    }
    MultiLevel1PageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MultiLevel1Page]
        })
    ], MultiLevel1PageModule);
    return MultiLevel1PageModule;
}());
export { MultiLevel1PageModule };
//# sourceMappingURL=multi-level1.module.js.map