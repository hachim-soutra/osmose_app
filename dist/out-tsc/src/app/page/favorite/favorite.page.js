import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { NetworkService } from 'src/app/service/network.service';
import { Network } from '@ionic-native/network/ngx';
import { Events, NavController } from '@ionic/angular';
var FavoritePage = /** @class */ (function () {
    function FavoritePage(nav, superP, networkProvider, events, network, globalProv) {
        this.nav = nav;
        this.superP = superP;
        this.networkProvider = networkProvider;
        this.events = events;
        this.network = network;
        this.globalProv = globalProv;
    }
    FavoritePage.prototype.ngOnInit = function () {
        this.init();
    };
    FavoritePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        setTimeout(function () {
            _this.init();
            refresher.target.complete();
        }, 500);
    };
    FavoritePage.prototype.init = function () {
        var _this = this;
        var self = this;
        this.networkProvider.initializeNetworkEvents();
        this.events.subscribe('network:offline', function () {
            self.globalProv.presentToast("y a pas de connexion réseau essayez de vous reconnecter", 3000, 'top');
            _this.nav.navigateRoot('favorite');
        });
        this.events.subscribe('network:online', function () {
            self.globalProv.presentToast("Bien connecter!", 3000, 'top');
            _this.nav.navigateRoot('home');
        });
    };
    FavoritePage = tslib_1.__decorate([
        Component({
            selector: 'app-favorite',
            templateUrl: './favorite.page.html',
            styleUrls: ['./favorite.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            SuperService,
            NetworkService,
            Events,
            Network,
            GlobalService])
    ], FavoritePage);
    return FavoritePage;
}());
export { FavoritePage };
//# sourceMappingURL=favorite.page.js.map