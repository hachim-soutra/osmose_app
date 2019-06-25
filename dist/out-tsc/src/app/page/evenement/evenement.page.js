import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { NavController } from '@ionic/angular';
var EvenementPage = /** @class */ (function () {
    function EvenementPage(globalProv, superP, navCtrl) {
        this.globalProv = globalProv;
        this.superP = superP;
        this.navCtrl = navCtrl;
    }
    EvenementPage.prototype.ngOnInit = function () {
        this.init();
    };
    EvenementPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        setTimeout(function () {
            _this.init();
            refresher.target.complete();
        }, 500);
    };
    EvenementPage.prototype.init = function () {
        var self = this;
        self.globalProv.getEvents().subscribe(function (Data) {
            if (Data) {
                console.log(Data);
                self.result = Data;
            }
        });
    };
    EvenementPage.prototype.goToDetailEvent = function (id) {
        this.navCtrl.navigateForward("evenement-detail/" + id);
    };
    EvenementPage = tslib_1.__decorate([
        Component({
            selector: 'app-evenement',
            templateUrl: './evenement.page.html',
            styleUrls: ['./evenement.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [GlobalService,
            SuperService,
            NavController])
    ], EvenementPage);
    return EvenementPage;
}());
export { EvenementPage };
//# sourceMappingURL=evenement.page.js.map