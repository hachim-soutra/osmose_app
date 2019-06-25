import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CmdDetailPage } from './cmd-detail.page';
var routes = [
    {
        path: '',
        component: CmdDetailPage
    }
];
var CmdDetailPageModule = /** @class */ (function () {
    function CmdDetailPageModule() {
    }
    CmdDetailPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CmdDetailPage]
        })
    ], CmdDetailPageModule);
    return CmdDetailPageModule;
}());
export { CmdDetailPageModule };
//# sourceMappingURL=cmd-detail.module.js.map