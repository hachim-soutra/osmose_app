import { Component } from '@angular/core';
import { NavController, ModalController, MenuController } from '@ionic/angular';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { Storage } from '@ionic/storage';
import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  result: any;
  id_contact:any;
  slideOpts = {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 4000,
    },
    centeredSlides: true,
    speed: 400
    };
  constructor(
    private navCtrl: NavController,
    public superP:SuperService,
    private globalProv:GlobalService , 
    public modalCtrl : ModalController,
    private storage: Storage
     ){
      this.init();
      this.fillPanier();
     
     }

  ngOnInit(){
   
  }

  init() {
    let self = this;
    if(self.superP.Connected){
      self.globalProv.getaccueilEnLine().subscribe(Data => {
        if (Data) {
          self.result = Data;
        }
      });
    }
  }
  panier(){
    this.navCtrl.navigateForward('panier');
  }
  fillPanier(){
    let self = this;
      this.storage.get("panier").then((data) => {
        if(data){
          console.log('panier : ', data);
          self.superP.collecteurPanier = data;
        } else {
          self.superP.collecteurPanier = [];
        }
      }).catch((err) => {
          console.error("error : ",err);
      })  

  }
  
  doRefresh(refresher) {
    setTimeout(() => {
      this.init();
      refresher.target.complete();
    }, 500);
  }

}
