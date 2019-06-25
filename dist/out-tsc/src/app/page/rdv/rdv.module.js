import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RdvPage } from './rdv.page';
var routes = [
    {
        path: '',
        component: RdvPage
    }
];
var RdvPageModule = /** @class */ (function () {
    function RdvPageModule() {
    }
    RdvPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [RdvPage]
        })
    ], RdvPageModule);
    return RdvPageModule;
}());
export { RdvPageModule };
//# sourceMappingURL=rdv.module.js.map