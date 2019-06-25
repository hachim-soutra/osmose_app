import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CmdPage } from './cmd.page';
var routes = [
    {
        path: '',
        component: CmdPage
    }
];
var CmdPageModule = /** @class */ (function () {
    function CmdPageModule() {
    }
    CmdPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CmdPage]
        })
    ], CmdPageModule);
    return CmdPageModule;
}());
export { CmdPageModule };
//# sourceMappingURL=cmd.module.js.map