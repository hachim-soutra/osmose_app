import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
var ProfilePage = /** @class */ (function () {
    function ProfilePage(globalProv, superP, storage, navCtrl) {
        this.globalProv = globalProv;
        this.superP = superP;
        this.storage = storage;
        this.navCtrl = navCtrl;
    }
    ProfilePage.prototype.ngOnInit = function () {
        this.init();
    };
    ProfilePage.prototype.init = function () {
        var _this = this;
        var self = this;
        this.storage.ready().then(function () {
            _this.storage.get("user").then(function (user) {
                if (user) {
                    if (user.photo_profil) {
                        self.imagePath = user.photo_profil;
                        var d = new Date();
                        self.random = d.getTime();
                    }
                    else {
                        self.imagePath = null;
                    }
                    self.superP.User = user;
                }
            });
        });
    };
    ProfilePage.prototype.logout = function () {
        this.superP.id_contact = null;
        this.storage.remove('id_contact');
        this.storage.remove('user');
        this.storage.remove('panier');
        this.navCtrl.navigateForward('home');
    };
    ProfilePage.prototype.navigate = function () {
        this.navCtrl.navigateForward('list-demande-services');
    };
    ProfilePage.prototype.editprofil = function () {
        this.navCtrl.navigateForward('editprofil');
    };
    ProfilePage.prototype.listdemande = function () {
        this.navCtrl.navigateForward('list-demande');
    };
    ProfilePage.prototype.mesparticipent = function () {
        this.navCtrl.navigateForward('mes-participent');
    };
    ProfilePage = tslib_1.__decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.page.html',
            styleUrls: ['./profile.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [GlobalService,
            SuperService,
            Storage,
            NavController])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map