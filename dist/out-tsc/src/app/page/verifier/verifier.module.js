import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { VerifierPage } from './verifier.page';
import { LottieAnimationViewModule } from 'ng-lottie';
var routes = [
    {
        path: '',
        component: VerifierPage
    }
];
var VerifierPageModule = /** @class */ (function () {
    function VerifierPageModule() {
    }
    VerifierPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                LottieAnimationViewModule.forRoot(),
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [VerifierPage]
        })
    ], VerifierPageModule);
    return VerifierPageModule;
}());
export { VerifierPageModule };
//# sourceMappingURL=verifier.module.js.map