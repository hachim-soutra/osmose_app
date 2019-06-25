import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { Storage } from '@ionic/storage';
import { GlobalService } from 'src/app/service/global.service';
import { DemmandesListComponent } from 'src/app/component/demmandes-list/demmandes-list.component';
import { ModalController } from '@ionic/angular';
var ListDemandePage = /** @class */ (function () {
    function ListDemandePage(superP, storage, globalProv, modalController) {
        this.superP = superP;
        this.storage = storage;
        this.globalProv = globalProv;
        this.modalController = modalController;
        this.colors = [
            "#ff0000",
            "#008000",
            "#800080"
        ];
    }
    ListDemandePage.prototype.ngOnInit = function () {
        this.init();
    };
    ListDemandePage.prototype.init = function () {
        var _this = this;
        var self = this;
        this.storage.ready().then(function () {
            _this.storage.get("id_contact").then(function (id_contact) {
                self.globalProv.listDemandeInfo(id_contact).subscribe(function (Data) {
                    if (Data) {
                        _this.result = Data;
                        console.log('mes participation : ', _this.result);
                    }
                });
            });
        });
    };
    ListDemandePage.prototype.annuler = function (id) {
        var _this = this;
        var self = this;
        self.globalProv.removeDemandeInfo(id).subscribe(function (Data) {
            if (Data) {
                var obj = [];
                obj = Data;
                console.log('remove : ', Data);
                if (obj.status == "200") {
                    _this.globalProv.presentToast(obj.result, 3000, 'bottom');
                }
                else {
                    _this.globalProv.presentToast(obj.result, 3000, 'bottom');
                }
            }
        });
    };
    ListDemandePage.prototype.Details = function (res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: DemmandesListComponent,
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
    ListDemandePage = tslib_1.__decorate([
        Component({
            selector: 'app-list-demande',
            templateUrl: './list-demande.page.html',
            styleUrls: ['./list-demande.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [SuperService, Storage, GlobalService, ModalController])
    ], ListDemandePage);
    return ListDemandePage;
}());
export { ListDemandePage };
//# sourceMappingURL=list-demande.page.js.map