import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FavPage } from './fav.page';
import { FavArtComponent } from 'src/app/component/fav-art/fav-art.component';
var routes = [
    {
        path: '',
        component: FavPage
    }
];
var FavPageModule = /** @class */ (function () {
    function FavPageModule() {
    }
    FavPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [FavPage, FavArtComponent],
            entryComponents: [FavArtComponent]
        })
    ], FavPageModule);
    return FavPageModule;
}());
export { FavPageModule };
//# sourceMappingURL=fav.module.js.map