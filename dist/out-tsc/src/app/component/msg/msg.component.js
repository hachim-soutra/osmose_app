import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { NavController, ModalController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';
var MsgComponent = /** @class */ (function () {
    function MsgComponent(storage, globalProv, superP, navCtrl, modal, nav) {
        this.storage = storage;
        this.globalProv = globalProv;
        this.superP = superP;
        this.navCtrl = navCtrl;
        this.modal = modal;
        this.nav = nav;
        this.res = this.nav.get('value');
        console.log(this.res);
    }
    MsgComponent.prototype.ngOnInit = function () {
        this.updateStatusMessage(this.res.id_msg, 2);
    };
    MsgComponent.prototype.closeModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MsgComponent.prototype.updateStatusMessage = function (id, statut) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get("id_contact").then(function (id_contact) {
                _this.globalProv.supprimerMessage(id_contact, id, statut).subscribe(function (Data) { });
            });
        });
    };
    MsgComponent.prototype.supprierMessage = function (id, statut) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get("id_contact").then(function (id_contact) {
                _this.globalProv.supprimerMessage(id_contact, id, statut).subscribe(function (Data) {
                    if (Data) {
                        var obj = [];
                        obj = Data;
                        if (obj.status == "200") {
                            _this.globalProv.presentToast(obj.result, 3000, "bottom");
                            _this.navCtrl.navigateRoot("msg");
                        }
                        else {
                            _this.globalProv.presentToast(obj.result, 3000, "bottom");
                        }
                    }
                });
            });
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], MsgComponent.prototype, "value", void 0);
    MsgComponent = tslib_1.__decorate([
        Component({
            selector: 'app-msg',
            templateUrl: './msg.component.html',
            styleUrls: ['./msg.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Storage, GlobalService,
            SuperService, NavController,
            ModalController, NavParams])
    ], MsgComponent);
    return MsgComponent;
}());
export { MsgComponent };
//# sourceMappingURL=msg.component.js.map