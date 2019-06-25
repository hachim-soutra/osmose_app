import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
var ProposPage = /** @class */ (function () {
    function ProposPage(storage, globalProv, superP, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.globalProv = globalProv;
        this.superP = superP;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.navParams.paramMap.subscribe(function (para) {
            _this.id = para.get("id");
            console.log(_this.id);
        });
        this.init();
    }
    ProposPage.prototype.ngOnInit = function () {
    };
    ProposPage.prototype.init = function () {
        var _this = this;
        var self = this;
        self.globalProv.getDetailMessage(this.id).subscribe(function (Data) {
            if (Data) {
                var obj = [];
                obj = Data;
                if (obj.status == "200") {
                    console.log('rdetail msg : ', self.result);
                    _this.result = obj.result[0];
                }
                else {
                    _this.result = [];
                }
            }
            console.log('rdetail msg : ', self.result);
        });
    };
    ProposPage.prototype.updateStatusMessage = function (id, statut) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get("id_contact").then(function (id_contact) {
                _this.globalProv.supprimerMessage(id_contact, id, statut).subscribe(function (Data) { });
            });
        });
    };
    ProposPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        setTimeout(function () {
            _this.init();
            refresher.complete();
        }, 1000);
    };
    ProposPage.prototype.supprierMessage = function (id, statut) {
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
    ProposPage = tslib_1.__decorate([
        Component({
            selector: 'app-propos',
            templateUrl: './propos.page.html',
            styleUrls: ['./propos.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Storage,
            GlobalService,
            SuperService,
            NavController,
            ActivatedRoute])
    ], ProposPage);
    return ProposPage;
}());
export { ProposPage };
//# sourceMappingURL=propos.page.js.map