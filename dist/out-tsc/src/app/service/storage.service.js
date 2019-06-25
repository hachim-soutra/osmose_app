import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
var StoragesService = /** @class */ (function () {
    function StoragesService(http, storage) {
        this.http = http;
        this.storage = storage;
        console.log('Hello StoragesProvider Provider');
    }
    StoragesService.prototype.setValue = function (key, value) {
        return this.storage.set(key, value);
    };
    StoragesService.prototype.getValue = function (key) {
        return this.storage.get(key).then(function (val) {
            return val;
        });
    };
    StoragesService.prototype.removeValue = function (key) {
        return this.storage.remove(key).then(function (val) {
            return val;
        });
    };
    StoragesService.prototype.allKeys = function () {
        return this.storage.keys();
    };
    StoragesService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, Storage])
    ], StoragesService);
    return StoragesService;
}());
export { StoragesService };
//# sourceMappingURL=storage.service.js.map