import * as tslib_1 from "tslib";
import { Component, Injectable } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { NavController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
var SignupPage = /** @class */ (function () {
    function SignupPage(navctrl, superP, globalProv, navCtrl, fb) {
        this.navctrl = navctrl;
        this.superP = superP;
        this.globalProv = globalProv;
        this.navCtrl = navCtrl;
        this.fb = fb;
    }
    SignupPage.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            nom: ["", Validators.compose([Validators.required])],
            prenom: ["", Validators.compose([Validators.required])],
            email: ["", Validators.compose([Validators.required, Validators.email])],
            password: ["", Validators.compose([Validators.required, Validators.minLength(5)])],
            repassword: ["", Validators.compose([Validators.required])]
        });
        // this.form.error('email', '', 'remplire le champs email');
        // this.form.setErrorMessage('password', '', 'remplire le champs mot de passe');
        // this.form.setErrorMessage('repassword', '', 'rentrer le mot de passe');
        // this.form.setErrorMessage('nom', '', 'remplire le champs nom');
        // this.form.setErrorMessage('prenom', '', 'remplire le champs prenom');
    };
    SignupPage.prototype.save = function () {
        var self = this;
        var Data;
        Data = this.form.value;
        console.log(Data);
        if (this.form.valid) {
            Data['token'] = this.superP.Token;
            self.globalProv.getInscription(Data).subscribe(function (res) {
                console.log('Data : ', JSON.stringify(Data));
                var obj = [];
                obj = res;
                console.log("response inscription: " + JSON.stringify(res));
                if (obj.status == "200") {
                    self.globalProv.presentToast(obj.result, 3000, 'bottom');
                    self.navCtrl.navigateForward("signin");
                }
                else {
                    self.globalProv.presentToast(obj.result, 3000, 'bottom');
                    return false;
                }
            });
        }
    };
    SignupPage.prototype.signin = function () {
        this.navctrl.navigateForward('signin');
    };
    SignupPage = tslib_1.__decorate([
        Injectable(),
        Component({
            selector: 'app-signup',
            templateUrl: './signup.page.html',
            styleUrls: ['./signup.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            SuperService, GlobalService, NavController, FormBuilder])
    ], SignupPage);
    return SignupPage;
}());
export { SignupPage };
//# sourceMappingURL=signup.page.js.map