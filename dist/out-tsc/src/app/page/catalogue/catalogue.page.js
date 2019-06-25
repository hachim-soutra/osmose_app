import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
var CataloguePage = /** @class */ (function () {
    function CataloguePage(globalProv, superP) {
        this.globalProv = globalProv;
        this.superP = superP;
        this.result = [];
    }
    CataloguePage.prototype.ngOnInit = function () {
        this.init();
    };
    CataloguePage.prototype.init = function () {
        var self = this;
        self.globalProv.getCatalogueCategories().subscribe(function (Data) {
            if (Data) {
                self.result = Data;
            }
        });
    };
    CataloguePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        setTimeout(function () {
            _this.init();
            refresher.target.complete();
        }, 500);
    };
    CataloguePage = tslib_1.__decorate([
        Component({
            selector: 'app-catalogue',
            templateUrl: './catalogue.page.html',
            styleUrls: ['./catalogue.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [GlobalService,
            SuperService])
    ], CataloguePage);
    return CataloguePage;
}());
export { CataloguePage };
//# sourceMappingURL=catalogue.page.js.map