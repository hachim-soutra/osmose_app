import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListDemandePage } from './list-demande.page';
import { DemmandesListComponent } from 'src/app/component/demmandes-list/demmandes-list.component';
var routes = [
    {
        path: '',
        component: ListDemandePage
    }
];
var ListDemandePageModule = /** @class */ (function () {
    function ListDemandePageModule() {
    }
    ListDemandePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ListDemandePage, DemmandesListComponent],
            entryComponents: [DemmandesListComponent]
        })
    ], ListDemandePageModule);
    return ListDemandePageModule;
}());
export { ListDemandePageModule };
//# sourceMappingURL=list-demande.module.js.map