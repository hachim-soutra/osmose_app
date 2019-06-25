import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Storage } from '@ionic/storage';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
var PayemnetComponent = /** @class */ (function () {
    function PayemnetComponent(modalController, navCtrl, nav, iab, superP, globalProv, payPal, storage) {
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.iab = iab;
        this.superP = superP;
        this.globalProv = globalProv;
        this.payPal = payPal;
        this.storage = storage;
        this.result = [];
        this.PanierObj = [];
        this.result = this.nav.get('value');
        console.log('result in check out detail : ', JSON.stringify(this.result));
    }
    PayemnetComponent.prototype.test = function () {
        var _this = this;
        this.payPal.init({
            PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
            PayPalEnvironmentSandbox: 'AWCc22yop0_s3hMf4yElHoWjv7JdSOOx6C91pRdXQYnrOhEpGVeakyYdK4ERScqdCLBf_2lKLwJ2rGd-',
        }).then(function () {
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            _this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
            // Only needed if you get an "Internal Service Error" after PayPal login!
            //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
            })).then(function () {
                var payment = new PayPalPayment(_this.result.prix_total, _this.superP.globalLanguages.capitale, 'Description', 'sale');
                _this.payPal.renderSinglePaymentUI(payment).then(function (res) {
                    // Successfully paid
                    if (res.response.state) {
                        _this.closeLink();
                    }
                    // Example sandbox response
                    //
                    // {
                    //   "client": {
                    //     "environment": "sandbox",
                    //     "product_name": "PayPal iOS SDK",
                    //     "paypal_sdk_version": "2.16.0",
                    //     "platform": "iOS"
                    //   },
                    //   "response_type": "payment",
                    //   "response": {
                    //     "id": "PAY-1AB23456CD789012EF34GHIJ",
                    //     "state": "approved",
                    //     "create_time": "2016-10-03T13:33:33Z",
                    //     "intent": "sale"
                    //   }
                    // }
                }, function (err) {
                    // Error or render dialog closed without being successful
                    _this.globalProv.presentToast("payemnt not complet", 3000, "bottom");
                });
            }, function (x) {
                // Error in configuration
                console.log(x);
                _this.globalProv.presentToast(x, 3000, "bottom");
            });
        }, function (er) {
            _this.globalProv.presentToast(er, 3000, "bottom");
            // Error in initialization, maybe PayPal isn't supported or something else
        });
    };
    PayemnetComponent.prototype.ngOnInit = function () {
        this.showPanierContent();
    };
    PayemnetComponent.prototype.closeModal = function () {
        this.modalController.dismiss();
    };
    PayemnetComponent.prototype.goToCheckout = function () {
        this.closeModal();
        this.navCtrl.navigateForward("home");
    };
    PayemnetComponent.prototype.showPanierContent = function () {
        var _this = this;
        var self = this;
        self.total = 0;
        this.storage.ready().then(function () {
            _this.storage.get("panier").then(function (data) {
                if (data) {
                    console.log('panier : ', JSON.stringify(data));
                    self.PanierObj = data;
                    console.log('panier obj : ', JSON.stringify(_this.PanierObj));
                    for (var i = 0; i < data.length; i++) {
                        _this.total = parseFloat(_this.total) + parseFloat(data[i].prix) * parseFloat(data[i].quantite);
                    }
                }
                else {
                    self.PanierObj = [];
                }
            }).catch(function (err) {
                console.error("error : ", err);
            });
        });
    };
    PayemnetComponent.prototype.openLink = function () {
        var _this = this;
        this.globalProv.presentToast("produit bien ", 3000, "bottom");
        var browser = this.iab.create(this.superP.URL + 'api/payment/index.php?action=postfinance&id_pre_cmd=' + this.result.id_pre_cmd, '_blank', {
            location: 'yes',
            clearcache: 'yes',
            toolbar: 'yes',
            closebuttoncaption: ' X '
        });
        this.closeModal();
        this.navCtrl.navigateForward("verifier/" + this.result.id_pre_cmd);
        browser.show();
        browser.on('exit').subscribe(function (data) {
            _this.closeLink();
            console.log('close link');
        });
        this.navCtrl.navigateForward("verifier/" + this.result.id_pre_cmd);
        this.closeModal();
    };
    PayemnetComponent.prototype.closeLink = function () {
        var _this = this;
        this.globalProv.checkPayment(this.result.id_pre_cmd, 55555).subscribe(function (res) {
            var obj = [];
            obj = res;
            console.log('obj : ', JSON.stringify(obj));
            if (obj.status == "200") {
                _this.storage.remove('panier');
                _this.storage.remove('result');
                _this.superP.collecteurPanier = [];
                _this.closeModal();
                _this.globalProv.presentToast(obj.result, 3000, "bottom");
                // go to list commandes here
            }
            else {
                _this.globalProv.presentToast(obj.result, 3000, "bottom");
            }
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], PayemnetComponent.prototype, "value", void 0);
    PayemnetComponent = tslib_1.__decorate([
        Component({
            selector: 'app-payemnet',
            templateUrl: './payemnet.component.html',
            styleUrls: ['./payemnet.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController, NavController,
            NavParams, InAppBrowser,
            SuperService,
            GlobalService,
            PayPal,
            Storage])
    ], PayemnetComponent);
    return PayemnetComponent;
}());
export { PayemnetComponent };
//# sourceMappingURL=payemnet.component.js.map