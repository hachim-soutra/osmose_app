import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { ActivatedRoute } from '@angular/router';
var ServicesProPage = /** @class */ (function () {
    function ServicesProPage(superP, globalProv, navParams) {
        var _this = this;
        this.superP = superP;
        this.globalProv = globalProv;
        this.navParams = navParams;
        this.navParams.paramMap.subscribe(function (para) {
            console.log(para);
            //this.res = para.get('res');
            _this.setExtras(para['res']);
        });
    }
    ServicesProPage.prototype.ngOnInit = function () {
        this.res = this.navParams.snapshot.paramMap.get('res');
    };
    ServicesProPage.prototype.setExtras = function (data) {
        this.extras = data;
    };
    ServicesProPage.prototype.getExtras = function () {
        return this.extras;
    };
    ServicesProPage = tslib_1.__decorate([
        Component({
            selector: 'app-services-pro',
            templateUrl: './services-pro.page.html',
            styleUrls: ['./services-pro.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [SuperService,
            GlobalService,
            ActivatedRoute])
    ], ServicesProPage);
    return ServicesProPage;
}());
export { ServicesProPage };
//# sourceMappingURL=services-pro.page.js.map