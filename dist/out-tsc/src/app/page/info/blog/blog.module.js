import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BlogPage } from './blog.page';
var routes = [
    {
        path: '',
        component: BlogPage
    }
];
var BlogPageModule = /** @class */ (function () {
    function BlogPageModule() {
    }
    BlogPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [BlogPage]
        })
    ], BlogPageModule);
    return BlogPageModule;
}());
export { BlogPageModule };
//# sourceMappingURL=blog.module.js.map