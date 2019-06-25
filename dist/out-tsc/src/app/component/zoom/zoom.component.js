import * as tslib_1 from "tslib";
import { Component, ViewChild, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
var ZoomComponent = /** @class */ (function () {
    function ZoomComponent(modal, navParams) {
        var _this = this;
        this.modal = modal;
        this.navParams = navParams;
        this.slideOpts = {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            slideTo: 5
        };
        this.media = [];
        this.setMediaLoaded = function () {
            setTimeout(function () {
                _this.mediaLoaded = true;
            }, 200);
        };
        this.media = this.navParams.get("value");
        this.index = this.navParams.get("position");
        console.log('res : ', this.media + this.index);
    }
    ZoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.slides.slideTo(_this.index, 500);
        }, 500);
    };
    ZoomComponent.prototype.closeModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ZoomComponent.prototype.tapImg = function (event) {
        console.log('tap : ', event);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ZoomComponent.prototype, "value", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], ZoomComponent.prototype, "position", void 0);
    tslib_1.__decorate([
        ViewChild('slides'),
        tslib_1.__metadata("design:type", Object)
    ], ZoomComponent.prototype, "slides", void 0);
    ZoomComponent = tslib_1.__decorate([
        Component({
            selector: 'app-zoom',
            templateUrl: './zoom.component.html',
            styleUrls: ['./zoom.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            NavParams])
    ], ZoomComponent);
    return ZoomComponent;
}());
export { ZoomComponent };
//# sourceMappingURL=zoom.component.js.map