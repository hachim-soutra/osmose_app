import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
var AboutPage = /** @class */ (function () {
    function AboutPage(globalProv, superP) {
        this.globalProv = globalProv;
        this.superP = superP;
    }
    AboutPage.prototype.ngOnInit = function () {
        this.init();
    };
    AboutPage.prototype.init = function () {
        var self = this;
        self.globalProv.getAboutus().subscribe(function (Data) {
            if (Data) {
                self.result = Data;
            }
        });
    };
    AboutPage = tslib_1.__decorate([
        Component({
            selector: 'app-about',
            templateUrl: './about.page.html',
            styleUrls: ['./about.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [GlobalService,
            SuperService])
    ], AboutPage);
    return AboutPage;
}());
export { AboutPage };
//# sourceMappingURL=about.page.js.map