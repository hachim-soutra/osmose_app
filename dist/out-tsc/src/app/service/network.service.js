import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { SuperService } from './super.service';
import { AlertController, Events } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
export var ConnectionStatusEnum;
(function (ConnectionStatusEnum) {
    ConnectionStatusEnum[ConnectionStatusEnum["Online"] = 0] = "Online";
    ConnectionStatusEnum[ConnectionStatusEnum["Offline"] = 1] = "Offline";
})(ConnectionStatusEnum || (ConnectionStatusEnum = {}));
var NetworkService = /** @class */ (function () {
    function NetworkService(superP, alertCtrl, network, eventCtrl) {
        this.superP = superP;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.eventCtrl = eventCtrl;
        this.previousStatus = ConnectionStatusEnum.Online;
    }
    NetworkService.prototype.initializeNetworkEvents = function () {
        var _this = this;
        this.network.onDisconnect().subscribe(function () {
            if (_this.previousStatus === ConnectionStatusEnum.Online) {
                _this.eventCtrl.publish('network:offline');
                _this.superP.Connected = false;
            }
            _this.previousStatus = ConnectionStatusEnum.Offline;
        });
        this.network.onConnect().subscribe(function () {
            if (_this.previousStatus === ConnectionStatusEnum.Offline) {
                _this.eventCtrl.publish('network:online');
                _this.superP.Connected = true;
            }
            _this.previousStatus = ConnectionStatusEnum.Online;
        });
    };
    NetworkService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [SuperService, AlertController, Network, Events])
    ], NetworkService);
    return NetworkService;
}());
export { NetworkService };
//# sourceMappingURL=network.service.js.map