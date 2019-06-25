import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MesParticipentPage } from './mes-participent.page';
var routes = [
    {
        path: '',
        component: MesParticipentPage
    }
];
var MesParticipentPageModule = /** @class */ (function () {
    function MesParticipentPageModule() {
    }
    MesParticipentPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MesParticipentPage]
        })
    ], MesParticipentPageModule);
    return MesParticipentPageModule;
}());
export { MesParticipentPageModule };
//# sourceMappingURL=mes-participent.module.js.map