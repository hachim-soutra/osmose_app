import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { Storage } from '@ionic/storage';
var RdvPage = /** @class */ (function () {
    function RdvPage(superP, globalProv, storage) {
        this.superP = superP;
        this.globalProv = globalProv;
        this.storage = storage;
    }
    RdvPage.prototype.ngOnInit = function () {
    };
    RdvPage.prototype.send = function () {
        var _this = this;
        var self = this;
        if (self.description) {
            self.storage.ready().then(function () {
                self.storage.get("id_contact").then(function (id_contact) {
                    if (id_contact != null) {
                        console.log('send  : ', id_contact);
                        self.globalProv.sendDemandeRdv(id_contact, _this.description, _this.date_resa).subscribe(function (Data) {
                            if (Data) {
                                console.log('res demande : ', JSON.stringify(Data));
                                var obj = [];
                                obj = Data;
                                if (obj.status == "200") {
                                    self.globalProv.presentToast(obj.result, 3000, "bottom");
                                    _this.date_resa = '';
                                    _this.description = '';
                                }
                                else {
                                    self.globalProv.presentToast(obj.result, 3000, "bottom");
                                }
                            }
                        });
                    }
                    else {
                        _this.globalProv.presentToast(_this.superP.globalLanguages.alert_login_must_be_connetced, 'bottom');
                    }
                });
            });
        }
        else {
            self.globalProv.presentToast(self.superP.globalLanguages.demandeinfo_vide_champs, 3000, "bottom");
        }
    };
    RdvPage = tslib_1.__decorate([
        Component({
            selector: 'app-rdv',
            templateUrl: './rdv.page.html',
            styleUrls: ['./rdv.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [SuperService,
            GlobalService,
            Storage])
    ], RdvPage);
    return RdvPage;
}());
export { RdvPage };
//# sourceMappingURL=rdv.page.js.map