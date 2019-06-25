import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { PayemnetComponent } from 'src/app/component/payemnet/payemnet.component';
import { Validators, FormBuilder } from '@angular/forms';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { Storage } from '@ionic/storage';
var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(modalController, globalProv, superP, navCtrl, fb, storage) {
        this.modalController = modalController;
        this.globalProv = globalProv;
        this.superP = superP;
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.storage = storage;
        this.result = [];
        this.form = this.fb.group({
            nom: ["", Validators.compose([Validators.required])],
            prenom: ["", Validators.compose([Validators.required])],
            tel: ["", Validators.compose([Validators.required])],
            adresse: ["", Validators.compose([Validators.required])],
            code_postal: ["", Validators.compose([Validators.required])],
            ville: ["", Validators.compose([Validators.required])],
        });
    }
    CheckoutPage.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.storage.ready().then(function () {
            _this.storage.get("user").then(function (user) {
                self.result = user;
                console.log("user  : ", user);
            });
            _this.storage.get("id_contact").then(function (id_contact) {
                self.id_contact = id_contact;
                console.log("id_contact  : ", id_contact);
            });
        });
    };
    CheckoutPage.prototype.payement = function (res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: PayemnetComponent,
                            componentProps: { value: res }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckoutPage.prototype.save = function () {
        var _this = this;
        var self = this;
        var formulaire = this.form.value;
        formulaire['sexe'] = this.sexe;
        console.log("formulaire : ", formulaire);
        if (this.form.valid) {
            this.storage.ready().then(function () {
                _this.storage.get("panier").then(function (panier) {
                    if (panier) {
                        console.log('id contact  : ', self.id_contact);
                        self.globalProv.preCmd(self.id_contact, panier, formulaire).subscribe(function (res) {
                            var obj = [];
                            obj = res;
                            console.log('obj checkout : ', JSON.stringify(obj));
                            if (obj.status == "200") {
                                console.log('res : ' + JSON.stringify(obj));
                                _this.payement(obj);
                            }
                            else {
                                self.globalProv.presentToast(obj.result, 3000, "bottom");
                            }
                        });
                    }
                });
            });
        }
    };
    CheckoutPage = tslib_1.__decorate([
        Component({
            selector: 'app-checkout',
            templateUrl: './checkout.page.html',
            styleUrls: ['./checkout.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController, GlobalService,
            SuperService, NavController, FormBuilder, Storage])
    ], CheckoutPage);
    return CheckoutPage;
}());
export { CheckoutPage };
//# sourceMappingURL=checkout.page.js.map