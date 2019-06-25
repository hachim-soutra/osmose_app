import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CataloguePage } from './catalogue.page';
var routes = [
    {
        path: '',
        component: CataloguePage
    }
];
var CataloguePageModule = /** @class */ (function () {
    function CataloguePageModule() {
    }
    CataloguePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CataloguePage]
        })
    ], CataloguePageModule);
    return CataloguePageModule;
}());
export { CataloguePageModule };
//# sourceMappingURL=catalogue.module.js.map