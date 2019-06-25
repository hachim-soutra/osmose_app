import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MsgPage } from './msg.page';
import { MsgComponent } from 'src/app/component/msg/msg.component';
var routes = [
    {
        path: '',
        component: MsgPage
    }
];
var MsgPageModule = /** @class */ (function () {
    function MsgPageModule() {
    }
    MsgPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MsgPage, MsgComponent],
            entryComponents: [MsgComponent]
        })
    ], MsgPageModule);
    return MsgPageModule;
}());
export { MsgPageModule };
//# sourceMappingURL=msg.module.js.map