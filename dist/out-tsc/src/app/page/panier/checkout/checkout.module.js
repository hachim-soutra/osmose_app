import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CheckoutPage } from './checkout.page';
import { PayemnetComponent } from 'src/app/component/payemnet/payemnet.component';
var routes = [
    {
        path: '',
        component: CheckoutPage
    }
];
var CheckoutPageModule = /** @class */ (function () {
    function CheckoutPageModule() {
    }
    CheckoutPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ReactiveFormsModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CheckoutPage, PayemnetComponent],
            entryComponents: [PayemnetComponent]
        })
    ], CheckoutPageModule);
    return CheckoutPageModule;
}());
export { CheckoutPageModule };
//# sourceMappingURL=checkout.module.js.map