import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { SuperService } from 'src/app/service/super.service';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { GlobalService } from 'src/app/service/global.service';
import { Storage } from '@ionic/storage';
import { RegisterComponent } from '../register/register.component';
import { ForgetComponent } from '../forget/forget.component';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(modal, superP, builder, storage, globalProv, navctrl) {
        this.modal = modal;
        this.superP = superP;
        this.builder = builder;
        this.storage = storage;
        this.globalProv = globalProv;
        this.navctrl = navctrl;
        this.myForm = this.builder.group({
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            passsword: new FormControl('', Validators.required)
        });
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.closeModal = function () {
        this.modal.dismiss();
    };
    LoginComponent.prototype.registerModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.closeModal();
                        return [4 /*yield*/, this.modal.create({
                                component: RegisterComponent,
                                componentProps: { value: 1234 }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.forgetModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.closeModal();
                        return [4 /*yield*/, this.modal.create({
                                component: ForgetComponent,
                                componentProps: { value: 1234 }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.login = function (formData) {
        var _this = this;
        var self = this;
        var FormValues = formData.value;
        FormValues['token'] = this.superP.Token;
        console.log(this.superP.Token);
        if (formData.valid) {
            self.globalProv.getlogin(FormValues).subscribe(function (res) {
                var obj = [];
                obj = res;
                if (obj.status == "200") {
                    self.storage.set('user', obj.user);
                    _this.superP.User = obj.user;
                    self.setidContact(obj.user.id_contact);
                    _this.storage.ready().then(function () {
                        _this.storage.get("panier").then(function (panier) {
                            _this.superP.collecteurPanier = panier;
                        });
                    });
                    _this.closeModal();
                    _this.navctrl.navigateRoot('home');
                    _this.globalProv.presentToast(_this.superP.globalLanguages.alert_login_success, 3000, 'bottom');
                }
                else if (obj.status == "508") {
                    _this.globalProv.presentToast(_this.superP.globalLanguages.alert_login_verification, 3000, 'bottom');
                }
            });
        }
    };
    LoginComponent.prototype.setidContact = function (id_contact) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.superP.id_contact = id_contact;
            _this.storage.set('id_contact', id_contact);
        });
        this.storage.ready().then(function () {
            _this.storage.get('panier').then(function (panier) {
                if (panier != null) {
                    _this.superP.collecteurPanier = panier;
                }
                else {
                    _this.storage.set('panier', "");
                    _this.superP.collecteurPanier = [];
                }
            });
        });
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            SuperService,
            FormBuilder,
            Storage,
            GlobalService,
            NavController])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map