import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { Storage } from '@ionic/storage';
import { NavController, ModalController } from '@ionic/angular';
import { ArtFavComponent } from 'src/app/component/art-fav/art-fav.component';
var ArticleFavPage = /** @class */ (function () {
    function ArticleFavPage(globalProv, superP, storage, nav, modalController) {
        this.globalProv = globalProv;
        this.superP = superP;
        this.storage = storage;
        this.nav = nav;
        this.modalController = modalController;
        this.init();
    }
    ArticleFavPage.prototype.ngOnInit = function () {
    };
    ArticleFavPage.prototype.init = function () {
        var _this = this;
        var self = this;
        var obj = [];
        this.storage.ready().then(function () {
            _this.storage.get("id_contact").then(function (id_contact) {
                console.log(id_contact);
                self.globalProv.getArticleFavoris(id_contact).subscribe(function (Data) {
                    console.log(Data);
                    if (Data) {
                        obj = Data;
                        if (obj.status == '200') {
                            self.result = obj.result;
                        }
                        else if (obj.status == '500') {
                            self.result = [];
                        }
                    }
                });
            });
        });
    };
    ArticleFavPage.prototype.gotoDetails = function (res) {
        console.log(res);
    };
    ArticleFavPage.prototype.Details = function (res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: ArtFavComponent,
                            componentProps: { value: res }
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
    ArticleFavPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        setTimeout(function () {
            _this.init();
            refresher.target.complete();
        }, 500);
    };
    ArticleFavPage = tslib_1.__decorate([
        Component({
            selector: 'app-article-fav',
            templateUrl: './article-fav.page.html',
            styleUrls: ['./article-fav.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [GlobalService, SuperService, Storage,
            NavController, ModalController])
    ], ArticleFavPage);
    return ArticleFavPage;
}());
export { ArticleFavPage };
//# sourceMappingURL=article-fav.page.js.map