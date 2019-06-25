import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListDemandeServicesPage } from './list-demande-services.page';
import { ProFavComponent } from 'src/app/component/pro-fav/pro-fav.component';
var routes = [
    {
        path: '',
        component: ListDemandeServicesPage
    }
];
var ListDemandeServicesPageModule = /** @class */ (function () {
    function ListDemandeServicesPageModule() {
    }
    ListDemandeServicesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ListDemandeServicesPage, ProFavComponent],
            entryComponents: [ProFavComponent]
        })
    ], ListDemandeServicesPageModule);
    return ListDemandeServicesPageModule;
}());
export { ListDemandeServicesPageModule };
//# sourceMappingURL=list-demande-services.module.js.map