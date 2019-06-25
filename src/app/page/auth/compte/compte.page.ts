import { Component, OnInit, Renderer, ChangeDetectorRef } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { NavController, LoadingController, ActionSheetController, ToastController, Platform, MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Camera } from '@ionic-native/Camera/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/File/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

declare var cordova;
@Component({
  selector: 'app-compte',
  templateUrl: './compte.page.html',
  styleUrls: ['./compte.page.scss'],
})
export class ComptePage implements OnInit {

  tabs: any = 'command';
  loading: any;
  lastImage: any;
  user: any;
  segment: any = 'load';
  correctPath: any;
  currentName: any;
  imagePath:any;
  Path:any;
  random:any;
  constructor(
    public globalProv: GlobalService,
    public superP: SuperService,private file: File,
    private storage: Storage,private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private camera: Camera,
    private transfer: FileTransfer, 
    private filePath: FilePath ,
    public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController, public platform: Platform, 
    public menuCtrl: MenuController,
    public renderer: Renderer, public ref : ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.init();
 }

  init () {
    let self = this;
    this.storage.ready().then(() => {
      this.storage.get("user").then((user) => {
        if (user) {
          if(user.photo_profil) {
            self.imagePath = user.photo_profil;
            let d = new Date();
            self.random = d.getTime();
          } else {
            self.imagePath = null;
          }
          self.superP.User = user;
        }
      })
    })
  }

  logout() {
    this.superP.id_contact = null;
    this.storage.remove('id_contact');
    this.storage.remove('user');
    this.storage.remove('panier');
    this.navCtrl.navigateForward('home');
  }
  navigate(x){
    this.navCtrl.navigateRoot(x);
  }
  edit(){
    this.navCtrl.navigateRoot('edit-profil');
  }
  participent(){
    this.navCtrl.navigateRoot('mes-participent');
  }
  MesarticlefavorisPage(){
    this.navCtrl.navigateRoot('article-fav');
  }
  listdemande(){
    this.navCtrl.navigateRoot('list-demande');
  }
  demmandeService(){
    this.navCtrl.navigateRoot('produitSer');
  }
  
  
  uploadFile() {
    let self = this;
    console.log("id contact : ", this.superP.User.id_contact)
      setTimeout(() => {
        var url = this.superP.URL+"/api/photo-profil.php";
        var targetPath = self.pathForImage(self.lastImage);
        var filename = self.lastImage;
        var options : FileUploadOptions = {
          fileKey: "file",
          fileName: filename,  
          httpMethod : 'POST',
          chunkedMode: false,
          mimeType: "multipart/form-data",
          params: {'id_contact':self.superP.User.id_contact},
        };
        const fileTransfer: FileTransferObject = self.transfer.create();
        alert('11111');

        // this.loading =  self.loadingCtrl.create({
        //   message: 'Uploading...',
        // });
        // this.loading.present();
        //this.presentLoading();
        fileTransfer.upload(targetPath, url, options).then(data => {
          this.loading.dismissAll();
          let res = JSON.parse(data.response);
          if(res.status == "200") {
            self.storage.ready().then(() => {
              self.storage.get("user").then((user) => {
                self.imagePath = this.superP.URL+"/admin/files_perso/contact/"+res.photo_profil;
                user.photo_profil = res.photo_profil;
                self.storage.ready().then(() => {
                  self.storage.set('user', user);
                  self.init();
                  this.ref.markForCheck();
                  alert('11111');
                  //this.navCtrl.setDirection(this.navCtrl.getActive().component);
                  //this.navCtrl.navigateRoot('compte');
                })      
                self.globalProv.presentToast(this.superP.globalLanguages.profile_error_uploaded_successfully, 3000, "bottom");
              })
            })
          } else {
            self.globalProv.presentToast(this.superP.globalLanguages.profile_problem_survenu, 3000, "bottom");
          }
        }, err => {
          this.loading.dismissAll();
          self.globalProv.presentToast(this.superP.globalLanguages.profile_error_upload_from_galerie, 3000, "bottom");
          console.log('err : ', JSON.stringify(err))
        });
      }, 500)
  }
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return cordova.file.dataDirectory + img;
    }
  }
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      this.lastImage = currentName;
      console.log('last image  : ', this.lastImage)
      console.log('succes : ', success)
    }, error => {
      this.globalProv.presentToast(this.superP.globalLanguages.profile_error_storing_from_galerie, 3000, "bottom");
    });
  }

  private createFileName() { 
    let newFileName = this.currentName;
  return newFileName;
  }

  takePicture(sourceType) {
    let options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };
    
    this.camera.getPicture(options).then(imagePath => {
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath).then(filePath => {
            this.correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            this.currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            //this.copyFileToLocalDir(this.correctPath, this.currentName, this.createFileName());
            //this.uploadFile(); 
          }).catch( x =>{
            alert (x)
          });
      }
    }, (err) => {
      this.globalProv.presentToast(this.superP.globalLanguages.profile_error_upload_from_galerie, 3000, "bottom");
    }); 
  }
  async addphoto() {
    let actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: this.superP.globalLanguages.profile_btn_upload_from_galerie,
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        }
        // {
        //   text: 'Utiliser la caméra',
        //   handler: () => {
        //     this.takePicture(this.camera.PictureSourceType.CAMERA);
        //   }
        // }
      ]
    });
    actionSheet.present();
  }
  async presentLoading() {
    // const loadingController = document.querySelector('ion-loading-controller');
    // await loadingController.componentOnReady();
  
    this.loading = await this.loadingCtrl.create({
      message: 'Uploading...',
    });
    return await this.loading.present();
  }
}
