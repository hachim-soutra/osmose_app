import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProposPage } from './propos.page';
var routes = [
    {
        path: '',
        component: ProposPage
    }
];
var ProposPageModule = /** @class */ (function () {
    function ProposPageModule() {
    }
    ProposPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ProposPage]
        })
    ], ProposPageModule);
    return ProposPageModule;
}());
export { ProposPageModule };
//# sourceMappingURL=propos.module.js.map