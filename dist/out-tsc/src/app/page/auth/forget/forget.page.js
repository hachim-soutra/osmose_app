import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { NavController } from '@ionic/angular';
import { SuperService } from 'src/app/service/super.service';
var ForgetPage = /** @class */ (function () {
    function ForgetPage(globalProv, superP, navCtrl) {
        this.globalProv = globalProv;
        this.superP = superP;
        this.navCtrl = navCtrl;
    }
    ForgetPage.prototype.ngOnInit = function () {
    };
    ForgetPage.prototype.send = function () {
        var self = this;
        console.log(this.email);
        self.globalProv.sendEmail(this.email).subscribe(function (res) {
            console.log('res  : ', JSON.stringify(res));
            var obj = [];
            obj = res;
            if (obj.status == "200") {
                self.globalProv.presentToast(obj.result, 3000, 'bottom');
            }
            else {
                self.navCtrl.navigateForward("signin");
                self.globalProv.presentToast(obj.result, 3000, 'bottom');
            }
        });
    };
    ForgetPage = tslib_1.__decorate([
        Component({
            selector: 'app-forget',
            templateUrl: './forget.page.html',
            styleUrls: ['./forget.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [GlobalService,
            SuperService,
            NavController])
    ], ForgetPage);
    return ForgetPage;
}());
export { ForgetPage };
//# sourceMappingURL=forget.page.js.map