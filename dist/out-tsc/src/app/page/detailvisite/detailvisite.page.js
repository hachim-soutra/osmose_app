import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { NavController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
var DetailvisitePage = /** @class */ (function () {
    function DetailvisitePage(sanitizer, superP, navCtrl) {
        this.sanitizer = sanitizer;
        this.superP = superP;
        this.navCtrl = navCtrl;
        this.markers = [];
        // this.res = navParams.get('res');
        this.res = "https://www.google.com/maps/embed?pb=!4v1539702468009!6m8!1m7!1spzKZ3oxYQUsAAAQWs8S4Xg!2m2!1d46.20267963881727!2d6.144632516771026!3f282.70950213404217!4f-1.6716782010350215!5f0.4000000000000002";
        console.log('res : ', JSON.stringify(this.res));
    }
    DetailvisitePage.prototype.photoURL = function (v) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(v);
    };
    DetailvisitePage.prototype.ngOnInit = function () {
        //this.createMap(46.5111378,6.636625);  
    };
    DetailvisitePage = tslib_1.__decorate([
        Component({
            selector: 'app-detailvisite',
            templateUrl: './detailvisite.page.html',
            styleUrls: ['./detailvisite.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [DomSanitizer, SuperService, NavController])
    ], DetailvisitePage);
    return DetailvisitePage;
}());
export { DetailvisitePage };
//# sourceMappingURL=detailvisite.page.js.map