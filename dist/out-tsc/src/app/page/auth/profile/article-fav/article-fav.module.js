import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ArticleFavPage } from './article-fav.page';
import { ArtFavComponent } from 'src/app/component/art-fav/art-fav.component';
var routes = [
    {
        path: '',
        component: ArticleFavPage
    }
];
var ArticleFavPageModule = /** @class */ (function () {
    function ArticleFavPageModule() {
    }
    ArticleFavPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ArticleFavPage, ArtFavComponent],
            entryComponents: [ArtFavComponent]
        })
    ], ArticleFavPageModule);
    return ArticleFavPageModule;
}());
export { ArticleFavPageModule };
//# sourceMappingURL=article-fav.module.js.map