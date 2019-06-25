import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { ActivatedRoute } from '@angular/router';
var CmdDetailPage = /** @class */ (function () {
    function CmdDetailPage(navParams, superP, globalProv) {
        var _this = this;
        this.navParams = navParams;
        this.superP = superP;
        this.globalProv = globalProv;
        this.navParams.paramMap.subscribe(function (para) {
            if (!para.has('id')) {
                return;
            }
            _this.id = para.get('id');
        });
    }
    CmdDetailPage.prototype.ngOnInit = function () {
    };
    CmdDetailPage.prototype.ionViewDidEnter = function () {
        this.init();
    };
    CmdDetailPage.prototype.init = function () {
        var _this = this;
        this.globalProv.commandesCmdDetail(this.id).subscribe(function (Data) {
            if (Data) {
                var obj = [];
                obj = Data;
                console.log('DETAIL data : ', Data);
                if (obj.status == "200") {
                    _this.result = obj.result;
                }
                else {
                    _this.result = [];
                }
            }
        });
    };
    CmdDetailPage.prototype.goToDetailProduct = function (res, id_wishlist) {
        console.log('res : ', res);
        //.navCtrl.push('ComandedetailproductPage', {res : res, id_wishlist : id_wishlist})
    };
    CmdDetailPage = tslib_1.__decorate([
        Component({
            selector: 'app-cmd-detail',
            templateUrl: './cmd-detail.page.html',
            styleUrls: ['./cmd-detail.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            SuperService,
            GlobalService])
    ], CmdDetailPage);
    return CmdDetailPage;
}());
export { CmdDetailPage };
//# sourceMappingURL=cmd-detail.page.js.map