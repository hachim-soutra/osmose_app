import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ActivatedRoute } from '@angular/router';
var EvenementDetailPage = /** @class */ (function () {
    function EvenementDetailPage(storage, globalProv, superP, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.globalProv = globalProv;
        this.superP = superP;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.navParams.paramMap.subscribe(function (para) {
            _this.idEvent = para.get("id");
        });
        console.log("id events : " + this.idEvent);
        this.toggle = true;
    }
    EvenementDetailPage.prototype.ngOnInit = function () {
        this.getEvents();
        this.checkParticipation(this.idEvent);
    };
    EvenementDetailPage.prototype.checkParticipation = function (id) {
        var _this = this;
        var self = this;
        this.storage.ready().then(function () {
            _this.storage.get("id_contact").then(function (id_contact) {
                self.globalProv.checkParticipation(id_contact, id).subscribe(function (data) {
                    var OBj = [];
                    OBj = data;
                    if (OBj.status == '200') {
                        self.toggle = false;
                    }
                    else if (OBj.status == '508') {
                        self.toggle = true;
                    }
                });
            });
        });
    };
    EvenementDetailPage.prototype.getEvents = function () {
        var self = this;
        self.globalProv.getEventsDetails(this.idEvent).subscribe(function (Data) {
            if (Data) {
                var OBj = [];
                OBj = Data;
                self.events = OBj.result;
            }
        });
    };
    EvenementDetailPage.prototype.participer = function (id_evenement) {
        var _this = this;
        var self = this;
        this.storage.ready().then(function () {
            _this.storage.get("id_contact").then(function (id_contact) {
                if (id_contact != null) {
                    self.globalProv.participerEvent(id_contact, id_evenement).subscribe(function (data) {
                        var OBj = [];
                        OBj = data;
                        if (OBj.status == '200') {
                            self.globalProv.presentToast(OBj.result, 3000, 'bottom');
                            self.toggle = false;
                        }
                        else if (OBj.status == '508') {
                            self.globalProv.presentToast(OBj.result, 3000, 'bottom');
                        }
                    });
                }
                else {
                    _this.globalProv.presentToast(_this.superP.globalLanguages.alert_login_must_be_connetced, 2000, 'bottom');
                    _this.globalProv.presentModal('SigninPage');
                }
            });
        });
    };
    EvenementDetailPage.prototype.noParticiper = function (id_evenement) {
        var _this = this;
        var self = this;
        this.storage.ready().then(function () {
            _this.storage.get("id_contact").then(function (id_contact) {
                self.globalProv.noParticiperEvent(id_contact, id_evenement).subscribe(function (data) {
                    var OBj = [];
                    OBj = data;
                    if (OBj.statut == '200') {
                        self.globalProv.presentToast(OBj.message, 3000, 'bottom');
                        self.toggle = true;
                    }
                    else {
                        self.globalProv.presentToast(OBj.message, 3000, 'bottom');
                    }
                });
            });
        });
    };
    EvenementDetailPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        setTimeout(function () {
            _this.getEvents();
            refresher.complete();
        }, 1000);
    };
    EvenementDetailPage = tslib_1.__decorate([
        Component({
            selector: 'app-evenement-detail',
            templateUrl: './evenement-detail.page.html',
            styleUrls: ['./evenement-detail.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Storage,
            GlobalService,
            SuperService,
            NavController,
            ActivatedRoute])
    ], EvenementDetailPage);
    return EvenementDetailPage;
}());
export { EvenementDetailPage };
//# sourceMappingURL=evenement-detail.page.js.map