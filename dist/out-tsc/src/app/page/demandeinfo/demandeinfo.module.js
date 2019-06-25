import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DemandeinfoPage } from './demandeinfo.page';
var routes = [
    {
        path: '',
        component: DemandeinfoPage
    }
];
var DemandeinfoPageModule = /** @class */ (function () {
    function DemandeinfoPageModule() {
    }
    DemandeinfoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [DemandeinfoPage]
        })
    ], DemandeinfoPageModule);
    return DemandeinfoPageModule;
}());
export { DemandeinfoPageModule };
//# sourceMappingURL=demandeinfo.module.js.map