import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { ModalController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
var SousCatPage = /** @class */ (function () {
    function SousCatPage(globalProv, superP, modalController, navCtrl, navParams) {
        var _this = this;
        this.globalProv = globalProv;
        this.superP = superP;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.filtres = 'name';
        this.affichageType = 'grid';
        this.result = [];
        this.result1 = [];
        this.navParams.paramMap.subscribe(function (para) {
            if (!para.has('id')) {
                return;
            }
            _this.id_categorie = para.get('id');
            console.log(_this.id_categorie);
            _this.init();
        });
    }
    SousCatPage.prototype.ngOnInit = function () {
    };
    SousCatPage.prototype.segmentChanged = function (ev) {
        console.log('Segment changed', ev.detail);
        if (ev.detail.value == 'grid') {
            this.x = 0;
        }
        else {
            this.x = 1;
        }
    };
    SousCatPage.prototype.init = function () {
        var _this = this;
        var self = this;
        self.globalProv.getListProduits(this.id_categorie).subscribe(function (Data) {
            console.log('list produit  : ', JSON.stringify(Data));
            if (Data) {
                var Obj = [];
                Obj = Data;
                console.log('list produit  : ', Obj);
                if (Obj.status == "200") {
                    _this.result = Obj.result;
                }
                else if (Obj.status == "500") {
                    _this.result = [];
                }
            }
        });
    };
    SousCatPage.prototype.gotoDetails = function (res) {
        this.navCtrl.navigateForward("article/" + res.id_product);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SousCatPage.prototype, "res", void 0);
    SousCatPage = tslib_1.__decorate([
        Component({
            selector: 'app-sous-cat',
            templateUrl: './sous-cat.page.html',
            styleUrls: ['./sous-cat.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [GlobalService,
            SuperService,
            ModalController,
            NavController,
            ActivatedRoute])
    ], SousCatPage);
    return SousCatPage;
}());
export { SousCatPage };
//# sourceMappingURL=sous-cat.page.js.map