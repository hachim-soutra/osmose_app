import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CategoriesPagePage } from './categories-page.page';
var routes = [
    {
        path: '',
        component: CategoriesPagePage
    }
];
var CategoriesPagePageModule = /** @class */ (function () {
    function CategoriesPagePageModule() {
    }
    CategoriesPagePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CategoriesPagePage]
        })
    ], CategoriesPagePageModule);
    return CategoriesPagePageModule;
}());
export { CategoriesPagePageModule };
//# sourceMappingURL=categories-page.module.js.map