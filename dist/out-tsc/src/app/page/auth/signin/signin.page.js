import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { Validators, FormBuilder } from '@angular/forms';
//import { NativeStorage } from '@ionic-native/native-storage/ngx';
var SigninPage = /** @class */ (function () {
    function SigninPage(superP, globalProv, storage, navctrl, fb) {
        this.superP = superP;
        this.globalProv = globalProv;
        this.storage = storage;
        this.navctrl = navctrl;
        this.fb = fb;
        this.loginForm = this.fb.group({
            email: ["", Validators.compose([Validators.required, Validators.email])],
            password: ["", Validators.compose([Validators.required, Validators.minLength(5)])],
        });
    }
    SigninPage.prototype.ngOnInit = function () {
    };
    SigninPage.prototype.login = function () {
        var _this = this;
        var self = this;
        var FormValues = this.loginForm.value;
        FormValues['token'] = this.superP.Token;
        console.log(this.superP.Token);
        if (this.loginForm.valid) {
            self.globalProv.getlogin(FormValues).subscribe(function (res) {
                var obj = [];
                obj = res;
                if (obj.status == "200") {
                    console.log('user info :', obj.user);
                    self.storage.set('user', obj.user);
                    self.setidContact(obj.user.id_contact);
                    console.log('test ' + _this.storage.get('user'));
                    _this.globalProv.presentToast(_this.superP.globalLanguages.alert_login_success, 3000, 'bottom');
                    _this.navctrl.navigateForward('compte');
                }
                else if (obj.status == "508") {
                    _this.globalProv.presentToast(_this.superP.globalLanguages.alert_login_verification, 3000, 'bottom');
                }
            });
        }
    };
    SigninPage.prototype.setidContact = function (id_contact) {
        this.superP.id_contact = id_contact;
        this.storage.set('id_contact', id_contact);
    };
    SigninPage.prototype.onClick = function () {
        this.navctrl.navigateForward('signup');
    };
    SigninPage.prototype.forget = function () {
        this.navctrl.navigateForward('forget');
    };
    SigninPage = tslib_1.__decorate([
        Component({
            selector: 'app-signin',
            templateUrl: './signin.page.html',
            styleUrls: ['./signin.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [SuperService,
            GlobalService,
            Storage,
            NavController,
            FormBuilder])
    ], SigninPage);
    return SigninPage;
}());
export { SigninPage };
//# sourceMappingURL=signin.page.js.map