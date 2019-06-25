import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { Storage } from '@ionic/storage';
import { GlobalService } from 'src/app/service/global.service';
import { NavController } from '@ionic/angular';
var MesParticipentPage = /** @class */ (function () {
    function MesParticipentPage(superP, storage, globalProv, navCtrl) {
        this.superP = superP;
        this.storage = storage;
        this.globalProv = globalProv;
        this.navCtrl = navCtrl;
        this.result = [];
    }
    MesParticipentPage.prototype.ngOnInit = function () {
        this.init();
    };
    MesParticipentPage.prototype.init = function () {
        var _this = this;
        var self = this;
        this.storage.ready().then(function () {
            _this.storage.get("id_contact").then(function (id_contact) {
                self.globalProv.getListParticipations(id_contact).subscribe(function (Data) {
                    if (Data) {
                        _this.obj = Data;
                        if (_this.obj.status == "200") {
                            _this.result = _this.obj.result;
                            console.log('mes participation : ', _this.result);
                        }
                        else if (_this.obj.status == "500") {
                            _this.result = [];
                            console.log('mes 1 participation : ', _this.result);
                        }
                    }
                });
            });
        });
    };
    MesParticipentPage.prototype.goToDetailEvent = function (id) {
        this.navCtrl.navigateForward("evenement-detail/" + id);
    };
    MesParticipentPage = tslib_1.__decorate([
        Component({
            selector: 'app-mes-participent',
            templateUrl: './mes-participent.page.html',
            styleUrls: ['./mes-participent.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [SuperService, Storage, GlobalService,
            NavController])
    ], MesParticipentPage);
    return MesParticipentPage;
}());
export { MesParticipentPage };
//# sourceMappingURL=mes-participent.page.js.map