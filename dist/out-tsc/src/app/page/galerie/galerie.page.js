import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { ZoomComponent } from 'src/app/component/zoom/zoom.component';
import { ModalController } from '@ionic/angular';
var GaleriePage = /** @class */ (function () {
    function GaleriePage(globalProv, superP, modalController) {
        this.globalProv = globalProv;
        this.superP = superP;
        this.modalController = modalController;
    }
    GaleriePage.prototype.ngOnInit = function () {
        this.init();
    };
    GaleriePage.prototype.init = function () {
        var self = this;
        self.globalProv.getGalerie().subscribe(function (Data) {
            if (Data) {
                self.result = Data;
            }
        });
    };
    GaleriePage.prototype.goToZoom = function (result, i) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: ZoomComponent,
                            componentProps: { value: result, position: i }
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
    GaleriePage = tslib_1.__decorate([
        Component({
            selector: 'app-galerie',
            templateUrl: './galerie.page.html',
            styleUrls: ['./galerie.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [GlobalService,
            SuperService,
            ModalController])
    ], GaleriePage);
    return GaleriePage;
}());
export { GaleriePage };
//# sourceMappingURL=galerie.page.js.map