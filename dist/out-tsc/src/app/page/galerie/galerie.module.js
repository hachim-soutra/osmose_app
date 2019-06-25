import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GaleriePage } from './galerie.page';
import { ZoomComponent } from 'src/app/component/zoom/zoom.component';
var routes = [
    {
        path: '',
        component: GaleriePage
    }
];
var GaleriePageModule = /** @class */ (function () {
    function GaleriePageModule() {
    }
    GaleriePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [GaleriePage, ZoomComponent],
            entryComponents: [ZoomComponent]
        })
    ], GaleriePageModule);
    return GaleriePageModule;
}());
export { GaleriePageModule };
//# sourceMappingURL=galerie.module.js.map