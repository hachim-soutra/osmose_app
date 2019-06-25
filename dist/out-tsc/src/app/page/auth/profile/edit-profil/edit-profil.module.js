import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EditProfilPage } from './edit-profil.page';
var routes = [
    {
        path: '',
        component: EditProfilPage
    }
];
var EditProfilPageModule = /** @class */ (function () {
    function EditProfilPageModule() {
    }
    EditProfilPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EditProfilPage]
        })
    ], EditProfilPageModule);
    return EditProfilPageModule;
}());
export { EditProfilPageModule };
//# sourceMappingURL=edit-profil.module.js.map