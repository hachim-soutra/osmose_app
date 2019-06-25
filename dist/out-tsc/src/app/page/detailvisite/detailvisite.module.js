import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DetailvisitePage } from './detailvisite.page';
var routes = [
    {
        path: '',
        component: DetailvisitePage
    }
];
var DetailvisitePageModule = /** @class */ (function () {
    function DetailvisitePageModule() {
    }
    DetailvisitePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [DetailvisitePage]
        })
    ], DetailvisitePageModule);
    return DetailvisitePageModule;
}());
export { DetailvisitePageModule };
//# sourceMappingURL=detailvisite.module.js.map