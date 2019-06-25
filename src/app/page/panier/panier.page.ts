import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { PayemnetComponent } from 'src/app/component/payemnet/payemnet.component';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { SuperService } from 'src/app/service/super.service';
import { Storage } from '@ionic/storage';
import { GlobalService } from 'src/app/service/global.service';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  PanierObj:any = [];
  total:any;
  constructor(
    public modalController: ModalController,
    private storage: Storage,
    public superP: SuperService,
    private navCtrl: NavController,
    private globalProv: GlobalService,
    private alertCtrl: AlertController
    ) { 
  }

  ngOnInit() {
    this.showPanierContent();
    this.storage.get("id_contact").then((data) => {
      if(data){
        console.log('panier : ', data);
      } else {
        this.globalProv.presentToast(this.superP.globalLanguages.alert_login_must_be_connetced,2000,'bottom');
        this.PanierObj = [];
        this.storage.remove('panier');
        //this.navCtrl.navigateForward("signin");  
      }
    })
  }

  showPanierContent(){
    let self = this;
    self.total=0;
    this.storage.ready().then(() => {
      this.storage.get("panier").then((data) => {
        if(data){
          console.log('panier : ', data);
          self.PanierObj = data;
          self.superP.collecteurPanier = data;
          for(let i=0; i< data.length ;i++) {
              this.total = parseFloat(this.total)+parseFloat(data[i].prix)*parseFloat(data[i].quantite);           
          }
        } else {
          self.PanierObj = [];
        }
      }).catch((err) => {
          console.error("error : ",err);
      })  
    })
  }

  goToCheckout() {
    this.storage.ready().then(() => {
      this.storage.get("id_contact").then((id_contact) => {
          if(id_contact == null) {
            this.globalProv.presentToast(this.superP.globalLanguages.alert_login_must_be_connetced,2000,'bottom');
          } else {
            this.navCtrl.navigateForward("checkout");  
          }
      })
    })
  }

  removeItem(id ){
    let self = this;
    // let i = x;
    self.storage.ready().then(() => {
      self.storage.get("panier").then((data) => {
        if(data) {
          console.log('data : ',data);
          let cnt=0;
          data.forEach(element => {
            // if(i == "id"){
            //   if(element.id == id){
            //       console.log('inside if : ', id);
            //       self.superP.collecteurPanier.splice(cnt, 1);
            //       console.log('inside collecteur : ', JSON.stringify(self.superP.collecteurPanier));
            //   }
            // }else{
                            // }

              if(element.id_produit_declinaison == id){
                console.log('inside if 2 : ', id);
                self.superP.collecteurPanier.splice(cnt, 1);
                console.log('inside collecteur 2: ', JSON.stringify(self.superP.collecteurPanier));
                self.storage.set("panier", self.superP.collecteurPanier);
                self.showPanierContent();
                self.globalProv.presentToast(this.superP.globalLanguages.alert_supprimer_au_panier,3000,'bottom');
              }
            cnt++;
            })  
          }
        })
      })
  }

  removeItemid(id){
    let self = this;
    // let i = x;
    self.storage.ready().then(() => {
      self.storage.get("panier").then((data) => {
        if(data) {
          console.log('data : ',data);
          let cnt=0;
          data.forEach(element => {
            // if(i == "id"){
              if(element.id == id){
                  console.log('inside if : ', id);
                  self.superP.collecteurPanier.splice(cnt, 1);
                  console.log('inside collecteur : ', JSON.stringify(self.superP.collecteurPanier));
                  self.storage.set("panier", self.superP.collecteurPanier);
                  self.showPanierContent();
                  self.globalProv.presentToast(this.superP.globalLanguages.alert_supprimer_au_panier,3000,'bottom');

                }
                cnt++;
            // }else{
              // if(element.id_produit_declinaison == id){
              //   console.log('inside if 2 : ', id);
              //   self.superP.collecteurPanier.splice(cnt, 1);
              //   console.log('inside collecteur 2: ', JSON.stringify(self.superP.collecteurPanier));
              // }
            // }
            })  
          }
        })
      })
  }
  async showConfirm(id:any) {
    let confirm = await this.alertCtrl.create({
      header : this.superP.globalLanguages.panier_header_confirmation,
      message: this.superP.globalLanguages.panier_msg_confirmation,
      buttons: [
        {
          text: 'No',
          handler: () => {}
        },
        {
          text: 'Oui',
          handler: () => {
            this.removeItem(id);
          }
        }
      ]
    });
    await confirm.present();
  }

  async showConfirmid(id:any) {
    let confirm = await this.alertCtrl.create({
      header : this.superP.globalLanguages.panier_header_confirmation,
      message: this.superP.globalLanguages.panier_msg_confirmation,
      buttons: [
        {
          text: 'No',
          handler: () => {}
        },
        {
          text: 'Oui',
          handler: () => {
            this.removeItemid(id);
          }
        }
      ]
    });
    await confirm.present();
  }

  moins(id,x) {
    let i = x;
      let self = this;
      console.log('res : ', JSON.stringify(id))
      this.storage.ready().then(() => {
        this.storage.get("panier").then((data) => {
          let cnt = 0;
          data.forEach(element => { 
            if( i == "id"){
              if(element.id == id){
                  if(self.superP.collecteurPanier[cnt].quantite > 1) {
                    self.superP.collecteurPanier[cnt].quantite--;
                    console.log('collecteur 1 : ', JSON.stringify(self.superP.collecteurPanier))
                  }
                }
              }else{
                if(self.superP.collecteurPanier[cnt].quantite > 1) {
                  self.superP.collecteurPanier[cnt].quantite--;
                  console.log('collecteur 2 : ', JSON.stringify(self.superP.collecteurPanier))
                }
              }
              self.storage.set("panier", self.superP.collecteurPanier);
              self.globalProv.presentToast(this.superP.globalLanguages.msg_quantite_mise_jour,2000,'bottom');
              self.showPanierContent();
            cnt++;
          });
      })
    })
  }

  plus(id,x) {
    console.log(x);
    let i = x;
      let self = this;
      this.storage.ready().then(() => {
        this.storage.get("panier").then((data) => {
          let cnt = 0;
          data.forEach(element => {
            console.log(JSON.stringify(element));
            if(i == "id"){
              // if(element.id == id){
                console.log('elemnt : '+element.id+" res : "+id);
                self.superP.collecteurPanier[cnt].quantite++;
                console.log('collecteur 1 : ', JSON.stringify(self.superP.collecteurPanier))
              // }
            }else{
              // if(element.id_produit_declinaison == id){
                console.log('elemnt : '+element.id+" res : "+id);
                self.superP.collecteurPanier[cnt].quantite++;
                console.log('collecteur 2 : ', JSON.stringify(self.superP.collecteurPanier))
              // }
            }
                self.storage.set("panier", self.superP.collecteurPanier);
                self.globalProv.presentToast(this.superP.globalLanguages.msg_quantite_mise_jour,2000,'bottom');
                self.showPanierContent();
            cnt++;
          });
      })
    })
  }
  doRefresh(refresher) {
    setTimeout(() => {
      this.ngOnInit();
      refresher.target.complete();
    }, 500);
  } 
}
