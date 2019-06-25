import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ArticlePage } from './article.page';
var routes = [
    {
        path: '',
        component: ArticlePage
    }
];
var ArticlePageModule = /** @class */ (function () {
    function ArticlePageModule() {
    }
    ArticlePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ArticlePage]
        })
    ], ArticlePageModule);
    return ArticlePageModule;
}());
export { ArticlePageModule };
//# sourceMappingURL=article.module.js.map