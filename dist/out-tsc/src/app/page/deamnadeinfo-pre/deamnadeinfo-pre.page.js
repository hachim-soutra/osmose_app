import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { Storage } from '@ionic/storage';
import { GlobalService } from 'src/app/service/global.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
var DeamnadeinfoPrePage = /** @class */ (function () {
    function DeamnadeinfoPrePage(superP, globalProv, storage, navParams, nav, modal) {
        var _this = this;
        this.superP = superP;
        this.globalProv = globalProv;
        this.storage = storage;
        this.navParams = navParams;
        this.nav = nav;
        this.modal = modal;
        this.navParams.paramMap.subscribe(function (para) {
            _this.res = para.get('id');
        });
        console.log('res : b ', this.res);
    }
    DeamnadeinfoPrePage.prototype.ngOnInit = function () {
    };
    DeamnadeinfoPrePage.prototype.send = function () {
        var _this = this;
        var self = this;
        if (self.description) {
            self.storage.ready().then(function () {
                self.storage.get("id_contact").then(function (id_contact) {
                    console.log('send  : ', id_contact);
                    self.globalProv.sendDemandeInfoServices(id_contact, self.res, self.description, _this.date).subscribe(function (Data) {
                        if (Data) {
                            console.log('res demande : ', JSON.stringify(Data));
                            var obj = [];
                            obj = Data;
                            if (obj.status == "200") {
                                self.globalProv.presentToast(obj.result, 3000, "bottom");
                                _this.nav.navigateRoot("catalogue/" + _this.res);
                            }
                            else {
                                self.globalProv.presentToast(obj.result, 3000, "bottom");
                            }
                        }
                    });
                });
            });
        }
        else {
            self.globalProv.presentToast(self.superP.globalLanguages.demandeinfo_vide_champs, 3000, "bottom");
        }
    };
    DeamnadeinfoPrePage = tslib_1.__decorate([
        Component({
            selector: 'app-deamnadeinfo-pre',
            templateUrl: './deamnadeinfo-pre.page.html',
            styleUrls: ['./deamnadeinfo-pre.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [SuperService,
            GlobalService,
            Storage,
            ActivatedRoute,
            NavController,
            ModalController])
    ], DeamnadeinfoPrePage);
    return DeamnadeinfoPrePage;
}());
export { DeamnadeinfoPrePage };
//# sourceMappingURL=deamnadeinfo-pre.page.js.map