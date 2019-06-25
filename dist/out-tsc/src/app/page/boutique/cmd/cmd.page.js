import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { ModalController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
var CmdPage = /** @class */ (function () {
    function CmdPage(superP, storage, modalCtrl, globalProv, navCtrl) {
        this.superP = superP;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.globalProv = globalProv;
        this.navCtrl = navCtrl;
        this.result = [];
    }
    CmdPage.prototype.ionViewDidEnter = function () {
        this.init();
    };
    CmdPage.prototype.init = function () {
        var _this = this;
        var self = this;
        this.storage.ready().then(function () {
            _this.storage.get("id_contact").then(function (id_contact) {
                self.globalProv.commandesList(id_contact).subscribe(function (Data) {
                    if (Data) {
                        var obj = [];
                        obj = Data;
                        console.log('data : ', Data);
                        _this.result = obj.result;
                    }
                });
            });
        });
    };
    CmdPage.prototype.ngOnInit = function () {
    };
    CmdPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        setTimeout(function () {
            _this.init();
            refresher.complete();
        }, 1000);
    };
    CmdPage.prototype.goToDetail = function (id_cmd) {
        this.navCtrl.navigateForward("cmd-detail/" + id_cmd);
    };
    CmdPage = tslib_1.__decorate([
        Component({
            selector: 'app-cmd',
            templateUrl: './cmd.page.html',
            styleUrls: ['./cmd.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [SuperService,
            Storage,
            ModalController,
            GlobalService,
            NavController])
    ], CmdPage);
    return CmdPage;
}());
export { CmdPage };
//# sourceMappingURL=cmd.page.js.map