import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
var VerifierPage = /** @class */ (function () {
    function VerifierPage(globalProv, superP, storage, navParams, navCtrl) {
        var _this = this;
        this.globalProv = globalProv;
        this.superP = superP;
        this.storage = storage;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.animationSpeed = 1;
        this.navParams.paramMap.subscribe(function (para) {
            _this.id_pre_commande = para.get('id');
        });
        this.lottieConfig = {
            path: 'https://assets1.lottiefiles.com/packages/lf20_IwfCpp.json',
            renderer: 'canvas',
            autoplay: true,
        };
    }
    VerifierPage.prototype.ngOnInit = function () {
    };
    VerifierPage.prototype.verifier = function () {
        var _this = this;
        var self = this;
        this.globalProv.checkPayment(this.id_pre_commande, 5555).subscribe(function (res) {
            var obj = [];
            obj = res;
            console.log('obj : ', JSON.stringify(obj));
            if (obj.status == "200") {
                _this.storage.remove('panier' + self.superP.id_contact);
                _this.storage.remove('result');
                _this.superP.collecteurPanier = "";
                _this.globalProv.presentToast(obj.result, 4000, "bottom");
                _this.navCtrl.navigateForward("cmd");
            }
            else {
                _this.globalProv.presentToast(obj.result, 4000, "bottom");
                _this.navCtrl.navigateForward("panier");
            }
        });
    };
    VerifierPage = tslib_1.__decorate([
        Component({
            selector: 'app-verifier',
            templateUrl: './verifier.page.html',
            styleUrls: ['./verifier.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [GlobalService,
            SuperService,
            Storage,
            ActivatedRoute,
            NavController])
    ], VerifierPage);
    return VerifierPage;
}());
export { VerifierPage };
//# sourceMappingURL=verifier.page.js.map