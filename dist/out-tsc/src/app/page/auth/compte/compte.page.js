import * as tslib_1 from "tslib";
import { Component, Renderer, ChangeDetectorRef } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { NavController, LoadingController, ActionSheetController, ToastController, Platform, MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Camera } from '@ionic-native/Camera/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/File/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
var ComptePage = /** @class */ (function () {
    function ComptePage(globalProv, superP, file, storage, loadingCtrl, navCtrl, camera, transfer, filePath, actionSheetCtrl, toastCtrl, platform, menuCtrl, renderer, ref) {
        this.globalProv = globalProv;
        this.superP = superP;
        this.file = file;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.transfer = transfer;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.menuCtrl = menuCtrl;
        this.renderer = renderer;
        this.ref = ref;
        this.tabs = 'command';
        this.segment = 'load';
    }
    ComptePage.prototype.ngOnInit = function () {
        this.init();
    };
    ComptePage.prototype.init = function () {
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
    ComptePage.prototype.logout = function () {
        this.superP.id_contact = null;
        this.storage.remove('id_contact');
        this.storage.remove('user');
        this.storage.remove('panier');
        this.navCtrl.navigateForward('home');
    };
    ComptePage.prototype.navigate = function (x) {
        this.navCtrl.navigateRoot(x);
    };
    ComptePage.prototype.edit = function () {
        this.navCtrl.navigateRoot('edit-profil');
    };
    ComptePage.prototype.participent = function () {
        this.navCtrl.navigateRoot('mes-participent');
    };
    ComptePage.prototype.MesarticlefavorisPage = function () {
        this.navCtrl.navigateRoot('article-fav');
    };
    ComptePage.prototype.listdemande = function () {
        this.navCtrl.navigateRoot('list-demande');
    };
    ComptePage.prototype.demmandeService = function () {
        this.navCtrl.navigateRoot('produitSer');
    };
    ComptePage.prototype.uploadFile = function () {
        var _this = this;
        var self = this;
        console.log("id contact : ", this.superP.User.id_contact);
        setTimeout(function () {
            var url = _this.superP.URL + "/api/photo-profil.php";
            var targetPath = self.pathForImage(self.lastImage);
            var filename = self.lastImage;
            var options = {
                fileKey: "file",
                fileName: filename,
                httpMethod: 'POST',
                chunkedMode: false,
                mimeType: "multipart/form-data",
                params: { 'id_contact': self.superP.User.id_contact },
            };
            var fileTransfer = self.transfer.create();
            alert('11111');
            // this.loading =  self.loadingCtrl.create({
            //   message: 'Uploading...',
            // });
            // this.loading.present();
            //this.presentLoading();
            fileTransfer.upload(targetPath, url, options).then(function (data) {
                _this.loading.dismissAll();
                var res = JSON.parse(data.response);
                if (res.status == "200") {
                    self.storage.ready().then(function () {
                        self.storage.get("user").then(function (user) {
                            self.imagePath = _this.superP.URL + "/admin/files_perso/contact/" + res.photo_profil;
                            user.photo_profil = res.photo_profil;
                            self.storage.ready().then(function () {
                                self.storage.set('user', user);
                                self.init();
                                _this.ref.markForCheck();
                                alert('11111');
                                //this.navCtrl.setDirection(this.navCtrl.getActive().component);
                                //this.navCtrl.navigateRoot('compte');
                            });
                            self.globalProv.presentToast(_this.superP.globalLanguages.profile_error_uploaded_successfully, 3000, "bottom");
                        });
                    });
                }
                else {
                    self.globalProv.presentToast(_this.superP.globalLanguages.profile_problem_survenu, 3000, "bottom");
                }
            }, function (err) {
                _this.loading.dismissAll();
                self.globalProv.presentToast(_this.superP.globalLanguages.profile_error_upload_from_galerie, 3000, "bottom");
                console.log('err : ', JSON.stringify(err));
            });
        }, 500);
    };
    ComptePage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    ComptePage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = currentName;
            console.log('last image  : ', _this.lastImage);
            console.log('succes : ', success);
        }, function (error) {
            _this.globalProv.presentToast(_this.superP.globalLanguages.profile_error_storing_from_galerie, 3000, "bottom");
        });
    };
    ComptePage.prototype.createFileName = function () {
        var newFileName = this.currentName;
        return newFileName;
    };
    ComptePage.prototype.takePicture = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath).then(function (filePath) {
                    _this.correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    _this.currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    //this.copyFileToLocalDir(this.correctPath, this.currentName, this.createFileName());
                    //this.uploadFile(); 
                }).catch(function (x) {
                    alert(x);
                });
            }
        }, function (err) {
            _this.globalProv.presentToast(_this.superP.globalLanguages.profile_error_upload_from_galerie, 3000, "bottom");
        });
    };
    ComptePage.prototype.addphoto = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            buttons: [
                                {
                                    text: this.superP.globalLanguages.profile_btn_upload_from_galerie,
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                    }
                                }
                                // {
                                //   text: 'Utiliser la caméra',
                                //   handler: () => {
                                //     this.takePicture(this.camera.PictureSourceType.CAMERA);
                                //   }
                                // }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        actionSheet.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ComptePage.prototype.presentLoading = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // const loadingController = document.querySelector('ion-loading-controller');
                        // await loadingController.componentOnReady();
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Uploading...',
                            })];
                    case 1:
                        // const loadingController = document.querySelector('ion-loading-controller');
                        // await loadingController.componentOnReady();
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    ComptePage = tslib_1.__decorate([
        Component({
            selector: 'app-compte',
            templateUrl: './compte.page.html',
            styleUrls: ['./compte.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [GlobalService,
            SuperService, File,
            Storage, LoadingController,
            NavController,
            Camera,
            FileTransfer,
            FilePath,
            ActionSheetController,
            ToastController, Platform,
            MenuController,
            Renderer, ChangeDetectorRef])
    ], ComptePage);
    return ComptePage;
}());
export { ComptePage };
//# sourceMappingURL=compte.page.js.map