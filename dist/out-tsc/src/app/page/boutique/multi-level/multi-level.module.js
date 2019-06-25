import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MultiLevelPage } from './multi-level.page';
var routes = [
    {
        path: '',
        component: MultiLevelPage
    }
];
var MultiLevelPageModule = /** @class */ (function () {
    function MultiLevelPageModule() {
    }
    MultiLevelPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MultiLevelPage]
        })
    ], MultiLevelPageModule);
    return MultiLevelPageModule;
}());
export { MultiLevelPageModule };
//# sourceMappingURL=multi-level.module.js.map