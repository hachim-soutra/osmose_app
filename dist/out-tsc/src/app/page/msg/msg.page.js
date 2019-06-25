import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { NavController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { MsgComponent } from 'src/app/component/msg/msg.component';
var MsgPage = /** @class */ (function () {
    function MsgPage(storage, globalProv, superP, navCtrl, modal) {
        this.storage = storage;
        this.globalProv = globalProv;
        this.superP = superP;
        this.navCtrl = navCtrl;
        this.modal = modal;
        this.result = [];
    }
    MsgPage.prototype.ngOnInit = function () { };
    MsgPage.prototype.ionViewDidEnter = function () {
        this.init();
    };
    MsgPage.prototype.init = function () {
        var _this = this;
        var self = this;
        this.storage.ready().then(function () {
            _this.storage.get("id_contact").then(function (id_contact) {
                if (self.superP.Connected) {
                    self.globalProv.getMessage(id_contact).subscribe(function (Data) {
                        if (Data) {
                            self.result = Data;
                            console.log('data : ', self.result);
                        }
                    });
                }
            });
        });
    };
    MsgPage.prototype.goToDetailMessage = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: MsgComponent,
                            componentProps: { value: id }
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
    MsgPage.prototype.supprierMessage = function (id, statut) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get("id_contact").then(function (id_contact) {
                _this.globalProv.supprimerMessage(id_contact, id, statut).subscribe(function (Data) {
                    if (Data) {
                        var obj = [];
                        obj = Data;
                        if (obj.status == "200") {
                            _this.globalProv.presentToast(obj.result, 3000, "bottom");
                        }
                        else {
                            _this.globalProv.presentToast(obj.result, 3000, "bottom");
                        }
                    }
                });
            });
        });
    };
    MsgPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        setTimeout(function () {
            _this.init();
            refresher.target.complete();
        }, 1000);
    };
    MsgPage = tslib_1.__decorate([
        Component({
            selector: 'app-msg',
            templateUrl: './msg.page.html',
            styleUrls: ['./msg.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Storage,
            GlobalService,
            SuperService,
            NavController,
            ModalController])
    ], MsgPage);
    return MsgPage;
}());
export { MsgPage };
//# sourceMappingURL=msg.page.js.map