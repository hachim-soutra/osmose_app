import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  imagePath:any;
  random:any;
  constructor(
    public globalProv: GlobalService,
    public superP: SuperService,
    private storage: Storage,
    private navCtrl: NavController
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
navigate(){
  this.navCtrl.navigateForward('list-demande-services');

}
editprofil(){
  this.navCtrl.navigateForward('editprofil');

}
listdemande(){
  this.navCtrl.navigateForward('list-demande');
}
mesparticipent(){
  this.navCtrl.navigateForward('mes-participent');
}
}
