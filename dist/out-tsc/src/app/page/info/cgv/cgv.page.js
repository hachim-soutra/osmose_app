import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
var CgvPage = /** @class */ (function () {
    function CgvPage(globalProv, superP) {
        this.globalProv = globalProv;
        this.superP = superP;
    }
    CgvPage.prototype.ngOnInit = function () {
        this.init();
    };
    CgvPage.prototype.init = function () {
        var self = this;
        console.log("connected : " + self.superP.Connected);
        if (self.superP.Connected) {
            self.globalProv.getCgv().subscribe(function (Data) {
                if (Data) {
                    self.result = Data;
                }
            });
        }
    };
    CgvPage = tslib_1.__decorate([
        Component({
            selector: 'app-cgv',
            templateUrl: './cgv.page.html',
            styleUrls: ['./cgv.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [GlobalService,
            SuperService])
    ], CgvPage);
    return CgvPage;
}());
export { CgvPage };
//# sourceMappingURL=cgv.page.js.map