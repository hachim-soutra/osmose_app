import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { ModalController, NavController, Platform } from '@ionic/angular';
var LieuPage = /** @class */ (function () {
    function LieuPage(platform, globalProv, modalController, superP, nav) {
        this.platform = platform;
        this.globalProv = globalProv;
        this.modalController = modalController;
        this.superP = superP;
        this.nav = nav;
        this.lottieConfig = {
            path: 'https://assets8.lottiefiles.com/datafiles/XMGcLL5xutviPDe/data.json',
            renderer: 'canvas',
            autoplay: true,
        };
    }
    LieuPage.prototype.ngOnInit = function () {
        this.init();
    };
    LieuPage.prototype.init = function () {
        var self = this;
        self.globalProv.getLieux().subscribe(function (Data) {
            if (Data) {
                self.result = Data;
            }
        });
    };
    LieuPage.prototype.checkMap = function (result) {
        this.nav.navigateForward('map/' + result);
    };
    LieuPage = tslib_1.__decorate([
        Component({
            selector: 'app-lieu',
            templateUrl: './lieu.page.html',
            styleUrls: ['./lieu.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            GlobalService,
            ModalController,
            SuperService,
            NavController])
    ], LieuPage);
    return LieuPage;
}());
export { LieuPage };
//# sourceMappingURL=lieu.page.js.map