import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
var EditProfilPage = /** @class */ (function () {
    function EditProfilPage(superP, globalProv, navCtrl, http, storage, fb) {
        this.superP = superP;
        this.globalProv = globalProv;
        this.navCtrl = navCtrl;
        this.http = http;
        this.storage = storage;
        this.fb = fb;
        this.result = [];
        this.form = this.fb.group({
            nom: ["", Validators.compose([Validators.required])],
            prenom: ["", Validators.compose([Validators.required])],
            email: [""],
            adresse: ["",],
            tel: ["", Validators.compose([Validators.required])],
        });
        this.form.setErrors(['adresse', 'ffff']);
    }
    EditProfilPage.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.storage.ready().then(function () {
            _this.storage.get("user").then(function (user) {
                console.log("user  : ", user);
                self.result = user;
                self.superP.User = user;
            });
        });
    };
    EditProfilPage.prototype.save = function () {
        var _this = this;
        var self = this;
        var userData = this.form.value;
        this.storage.ready().then(function () {
            if (_this.form.valid) {
                self.storage.get("user").then(function (user) {
                    userData['id'] = user.id_contact;
                    console.log(userData);
                    _this.globalProv.editProfil(userData).subscribe(function (Data) {
                        console.log(Data);
                        if (Data) {
                            var obj = [];
                            obj = Data;
                            if (obj.status == "200") {
                                self.globalProv.presentToast(obj.result, 3000, 'bottom');
                                console.log('result edit profil : ', JSON.stringify(self.result));
                                user.prenom = userData.prenom;
                                user.nom = userData.nom;
                                user.tel = userData.tel;
                                user.adresse = userData.adresse;
                                user.email = userData.email;
                                _this.storage.set("user", user);
                                _this.navCtrl.navigateRoot('compte');
                            }
                            else {
                                self.globalProv.presentToast(obj.result, 3000, 'bottom');
                            }
                        }
                        _this.globalProv.presentToast(" user" + _this.result.id_contact, 3000, 'bottom');
                    });
                });
            }
            else {
                _this.globalProv.presentToast("form invalid", 3000, 'bottom');
            }
        });
    };
    EditProfilPage = tslib_1.__decorate([
        Component({
            selector: 'app-edit-profil',
            templateUrl: './edit-profil.page.html',
            styleUrls: ['./edit-profil.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [SuperService,
            GlobalService,
            NavController,
            HttpClient,
            Storage,
            FormBuilder])
    ], EditProfilPage);
    return EditProfilPage;
}());
export { EditProfilPage };
//# sourceMappingURL=edit-profil.page.js.map