import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EvenementDetailPage } from './evenement-detail.page';
var routes = [
    {
        path: '',
        component: EvenementDetailPage
    }
];
var EvenementDetailPageModule = /** @class */ (function () {
    function EvenementDetailPageModule() {
    }
    EvenementDetailPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EvenementDetailPage]
        })
    ], EvenementDetailPageModule);
    return EvenementDetailPageModule;
}());
export { EvenementDetailPageModule };
//# sourceMappingURL=evenement-detail.module.js.map