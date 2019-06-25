import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var SuperService = /** @class */ (function () {
    function SuperService(http) {
        this.http = http;
        this.URL = "https://oryal2.mobigo.ch/";
        this.WebSite = 'https:///tsarine.mobigo.ch/api/';
        this.Topic = "topictsarine";
        this.Token = null;
        this.collecteurPanier = [];
        this.Connected = true;
    }
    SuperService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], SuperService);
    return SuperService;
}());
export { SuperService };
//# sourceMappingURL=super.service.js.map