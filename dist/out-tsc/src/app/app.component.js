import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform, NavController, MenuController, ModalController, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { SuperService } from './service/super.service';
import { GlobalService } from './service/global.service';
import { FCM } from '@ionic-native/fcm/ngx';
import { LoginComponent } from './component/login/login.component';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { NetworkService } from './service/network.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, storage, menu, superP, nav, events, networkProvider, fcm, modalCntl, globalProv, screenOrientation) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.storage = storage;
        this.menu = menu;
        this.superP = superP;
        this.nav = nav;
        this.events = events;
        this.networkProvider = networkProvider;
        this.fcm = fcm;
        this.modalCntl = modalCntl;
        this.globalProv = globalProv;
        this.screenOrientation = screenOrientation;
        this.socials = [];
        this.initializeApp();
        this.checkingConnexion();
        this.fillUser();
        this.screenOrientation.lock('portrait');
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getLiens();
        this.getFileLanguage();
        this.fillUser();
    };
    AppComponent.prototype.getLiens = function () {
        var self = this;
        var obj = [];
        self.globalProv.getLiens().subscribe(function (Data) {
            if (Data) {
                obj = Data;
                console.log("les liens : " + JSON.stringify(Data));
                obj.forEach(function (element) {
                    self.socials.push({ title: element.titre, href: element.lien, icon: element.icone, color: element.color });
                });
            }
        });
    };
    AppComponent.prototype.checkingConnexion = function () {
        var _this = this;
        var self = this;
        this.networkProvider.initializeNetworkEvents();
        this.events.subscribe('network:offline', function () {
            self.globalProv.presentToast("y a pas de connexion réseau essayez de vous reconnecter", 3000, 'top');
            _this.nav.navigateRoot('favorite');
        });
        this.events.subscribe('network:online', function () {
            self.globalProv.presentToast("Bien connecter!", 3000, 'top');
        });
    };
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // this.statusBar.styleDefault();
            // this.statusBar.overlaysWebView(false);
            _this.statusBar.overlaysWebView(true);
            _this.statusBar.backgroundColorByHexString("#d4509a");
            _this.splashScreen.hide();
            /**FCM Topic - Token & Receive Notifications */
            console.log("token :" + _this.superP.Token);
            // if (this.platform.is('cordova')) {
            _this.fcm.subscribeToTopic(_this.superP.Topic);
            // this.fcm.onTokenRefresh().subscribe(token => {
            //   this.settingToken(token);
            // });y
            _this.fcm.getToken().then(function (token) {
                console.log("token :" + token);
                _this.settingToken(token);
            });
            _this.fcm.onNotification().subscribe(function (data) {
                if (data.wasTapped) {
                    _this.nav.navigateRoot(data.lien);
                }
                else {
                    _this.nav.navigateRoot(data.lien);
                }
                ;
            });
            // }
        });
    };
    AppComponent.prototype.openPage = function (page) {
        var _this = this;
        this.storage.get("id_contact").then(function (id_contact) {
            if (page.component == "msg" || page.component == "fav" || page.component == "compte" || page.component == "cmd") {
                if (id_contact != null) {
                    _this.nav.navigateForward(page.component);
                    _this.menu.close();
                }
                else {
                    _this.globalProv.presentToast(_this.superP.globalLanguages.alert_login_must_be_connetced, 2000, 'bottom');
                    _this.globalProv.presentModal('login');
                }
            }
            else {
                _this.nav.navigateForward(page.component);
                _this.menu.close();
            }
        });
    };
    AppComponent.prototype.logout = function () {
        this.superP.id_contact = null;
        this.storage.remove('id_contact');
        this.storage.remove('user');
        this.openPage("home");
        this.superP.collecteurPanier = [];
    };
    AppComponent.prototype.settingToken = function (token) {
        var _this = this;
        this.storage.ready().then(function () {
            var tok = token;
            _this.superP.Token = tok;
            _this.storage.set('token', tok);
        });
    };
    AppComponent.prototype.fillUser = function () {
        var _this = this;
        var self = this;
        self.storage.get("user").then(function (user) {
            console.log("token :" + _this.superP.Token);
            if (user != null) {
                self.superP.User = user;
            }
        });
        self.storage.get("id_contact").then(function (id_contact) {
            if (id_contact != null) {
                self.superP.id_contact = id_contact;
            }
        });
        console.log('user :' + JSON.stringify(self.superP.User));
    };
    AppComponent.prototype.getFileLanguage = function () {
        var _this = this;
        this.globalProv.getFileLanguage().subscribe(function (data) {
            if (data) {
                _this.storage.set('langue', data);
                _this.superP.globalLanguages = data;
                _this.pages = [
                    { title: _this.superP.globalLanguages.menu_accueil, component: "home", iconMd: "md-home", iconIos: "ios-home" },
                    { title: _this.superP.globalLanguages.menu_boutique_enligne, component: "categories-page", iconMd: "basket", iconIos: "basket" },
                    // { title: this.superP.globalLanguages.menu_boutique_offres, component: "offre", iconMd: "pricetag" ,iconIos: "pricetag"},
                    // { title: this.superP.globalLanguages.menu_RDV ,component:"rdv", iconMd:"calendar" ,iconIos:"calendar"},
                    { title: _this.superP.globalLanguages.menu_evenement, component: "evenement", iconMd: "md-eye", iconIos: "ios-eye" },
                    { title: _this.superP.globalLanguages.menu_actualite, component: "catalogue", iconMd: "md-flame", iconIos: "ios-flame" },
                    { title: _this.superP.globalLanguages.menu_lieux, component: "lieu", iconMd: "md-pin", iconIos: "ios-pin" },
                    { title: _this.superP.globalLanguages.menu_messages, component: "msg", iconMd: "md-mail-open", iconIos: "ios-mail-open" },
                    { title: _this.superP.globalLanguages.menu_apropos, component: "about", iconMd: "help-circle", iconIos: "ios-help-circle" },
                    { title: _this.superP.globalLanguages.menu_galerie, component: "galerie", iconMd: "md-images", iconIos: "ios-images" },
                    { title: _this.superP.globalLanguages.menu_favoris, component: "fav", iconMd: "heart", iconIos: "ios-heart-outline" },
                    // { title: this.superP.globalLanguages.menu_visitevirtuel, component: "detailvisite", iconMd: "md-calendar", iconIos: "ios-calendar" },
                    { title: _this.superP.globalLanguages.menu_temoignage, component: "temiognage", iconMd: "md-shirt", iconIos: "ios-shirt" },
                    { title: _this.superP.globalLanguages.menu_shop, component: "shop", iconMd: "md-shirt", iconIos: "ios-shirt" },
                    { title: _this.superP.globalLanguages.menu_blog, component: "blog", iconMd: "md-shirt", iconIos: "ios-shirt" },
                    { title: _this.superP.globalLanguages.menu_tarif, component: "tarif", iconMd: "md-shirt", iconIos: "ios-shirt" },
                    // { title: this.superP.globalLanguages.menu_boutique_enligne, component: "MultilevelsPage", iconMd: "md-shirt", iconIos: "ios-shirt" },
                    // { title: this.superP.globalLanguages.menu_creation, component: "CreationPage", iconMd: "md-images", iconIos: "ios-images" },
                    // { title: this.superP.globalLanguages.menu_visitevirtuel, component: "VisitevirtuelPage", iconMd: "md-calendar", iconIos: "ios-calendar" },
                    // { title: this.superP.globalLanguages.menu_lookbook, component: "LookbookPage", iconMd: "md-eye", iconIos: "ios-eye" },
                    { title: _this.superP.globalLanguages.menu_mon_profil, component: "compte", iconMd: "md-person", iconIos: "ios-person" },
                    // { title: this.superP.globalLanguages.menu_condition_general, component: "cgv", iconMd: "md-information-circle", iconIos: "ios-information-circle" },
                    { title: _this.superP.globalLanguages.menu_commandes, component: "cmd", iconMd: "md-filing", iconIos: "ios-filing" },
                ];
            }
        });
    };
    AppComponent.prototype.onClick = function (x) {
        this.menu.close();
        this.nav.navigateForward(x);
    };
    AppComponent.prototype.openModal = function (tab) {
        var _this = this;
        this.storage.get("id_contact").then(function (id_contact) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var modal, modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(tab == "fav" || tab == "profil")) return [3 /*break*/, 4];
                        if (!(id_contact != null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.modalCntl.create({
                                component: tab.Component,
                                componentProps: { value: 1234 }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [3 /*break*/, 3];
                    case 2:
                        this.globalProv.presentToast(this.superP.globalLanguages.alert_login_must_be_connetced, 'bottom');
                        this.nav.navigateForward('login');
                        _a.label = 3;
                    case 3: return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.modalCntl.create({
                            component: LoginComponent,
                            componentProps: { value: 1234 }
                        })];
                    case 5:
                        modal = _a.sent();
                        modal.present();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); });
    };
    AppComponent.prototype.presentProfileModal = function () {
        this.globalProv.presentModal('ProfilePage');
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar,
            Storage,
            MenuController,
            SuperService,
            NavController,
            Events,
            NetworkService,
            FCM,
            ModalController,
            GlobalService,
            ScreenOrientation])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map