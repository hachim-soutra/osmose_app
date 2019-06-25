import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { Storage } from '@ionic/storage';
import { GlobalService } from 'src/app/service/global.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
var DemandeinfoPage = /** @class */ (function () {
    function DemandeinfoPage(superP, globalProv, storage, navParams, nav) {
        var _this = this;
        this.superP = superP;
        this.globalProv = globalProv;
        this.storage = storage;
        this.navParams = navParams;
        this.nav = nav;
        this.navParams.paramMap.subscribe(function (para) {
            _this.res = para.get('id');
        });
        console.log('res : b ' + this.res);
    }
    DemandeinfoPage.prototype.ngOnInit = function () {
    };
    DemandeinfoPage.prototype.send = function () {
        var _this = this;
        var self = this;
        if (self.description) {
            self.storage.ready().then(function () {
                self.storage.get("id_contact").then(function (id_contact) {
                    self.globalProv.sendDemandeInfoEboutique(id_contact, "191", self.description).subscribe(function (Data) {
                        if (Data) {
                            console.log('res demande : ', JSON.stringify(Data));
                            var obj = [];
                            obj = Data;
                            if (obj.status == "200") {
                                self.globalProv.presentToast(obj.result, 3000, "bottom");
                                _this.nav.navigateRoot("categories-page");
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
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], DemandeinfoPage.prototype, "value", void 0);
    DemandeinfoPage = tslib_1.__decorate([
        Component({
            selector: 'app-demandeinfo',
            templateUrl: './demandeinfo.page.html',
            styleUrls: ['./demandeinfo.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [SuperService,
            GlobalService,
            Storage,
            ActivatedRoute,
            NavController])
    ], DemandeinfoPage);
    return DemandeinfoPage;
}());
export { DemandeinfoPage };
//# sourceMappingURL=demandeinfo.page.js.map