import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { ToastController, NavController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(storage, toastCtrl, navCtrl, globalProv, navParams, superP) {
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.globalProv = globalProv;
        this.navParams = navParams;
        this.superP = superP;
        this.x = false;
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.save = function () {
        var self = this;
        var Data = [this.prenom, this.name, this.email, this.password, this.reapet_password];
        Data['token'] = this.superP.Token;
        if (this.password == this.reapet_password) {
            self.globalProv.getInscription(Data).subscribe(function (res) {
                console.log('Data : ', JSON.stringify(Data));
                var obj = [];
                obj = res;
                console.log("response inscription: " + JSON.stringify(res));
                if (obj.status == "200") {
                    self.globalProv.presentToast(obj.result, 3000, 'bottom');
                    self.navCtrl.navigateForward("loginT");
                }
                else {
                    self.globalProv.presentToast(obj.result, 3000, 'bottom');
                    return false;
                }
            });
        }
        else {
            self.globalProv.presentToast('password not match', 3000, 'bottom');
        }
    };
    RegisterPage = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Storage,
            ToastController,
            NavController,
            GlobalService,
            NavParams,
            SuperService])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.page.js.map