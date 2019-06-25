import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { ModalController, NavController } from '@ionic/angular';
import { OffrePComponent } from 'src/app/component/offre-p/offre-p.component';
var OffrePage = /** @class */ (function () {
    function OffrePage(superP, globalProv, modalController, nav) {
        this.superP = superP;
        this.globalProv = globalProv;
        this.modalController = modalController;
        this.nav = nav;
        this.services = [];
        this.produits = [];
    }
    OffrePage.prototype.ngOnInit = function () {
        this.listOffresServices();
    };
    OffrePage.prototype.listOffresProduits = function () {
        var self = this;
        self.globalProv.listOffresProduits().subscribe(function (Data) {
            //let Obj:any = [];
            //Obj = Data;
            console.log("res services : ", Data);
            // if(Obj.status == "200"){
            self.produits = Data;
            console.log("res services : ", self.services);
            // }else if(Obj.status == "500"){
            //     this.produits = [];
            // }
        });
    };
    OffrePage.prototype.listOffresServices = function () {
        var _this = this;
        var self = this;
        self.globalProv.listOffresServices().subscribe(function (Data) {
            console.log("res services : ", Data);
            _this.services = Data;
            console.log("res services : ", self.services);
        });
    };
    OffrePage.prototype.openProduit = function (x) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: OffrePComponent,
                            componentProps: { value: x }
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
    OffrePage = tslib_1.__decorate([
        Component({
            selector: 'app-offre',
            templateUrl: './offre.page.html',
            styleUrls: ['./offre.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [SuperService,
            GlobalService,
            ModalController,
            NavController])
    ], OffrePage);
    return OffrePage;
}());
export { OffrePage };
//# sourceMappingURL=offre.page.js.map