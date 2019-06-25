import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { OffrePage } from './offre.page';
import { OffrePComponent } from 'src/app/component/offre-p/offre-p.component';
var routes = [
    {
        path: '',
        component: OffrePage
    }
];
var OffrePageModule = /** @class */ (function () {
    function OffrePageModule() {
    }
    OffrePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [OffrePage, OffrePComponent],
            entryComponents: [OffrePComponent]
        })
    ], OffrePageModule);
    return OffrePageModule;
}());
export { OffrePageModule };
//# sourceMappingURL=offre.module.js.map