import { Component, OnInit, Input } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController, NavParams, NavController } from '@ionic/angular';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';


@Component({
  selector: 'app-art-fav',
  templateUrl: './art-fav.component.html',
  styleUrls: ['./art-fav.component.scss'],
})
export class ArtFavComponent implements OnInit {
  @Input()value: object;
  res:any;
  panierObj:any;
  btnAddFavoris:boolean;
  showAdd:boolean;
  showDelete:boolean;
  constructor(
    private modal: ModalController,
    private nav: NavParams,
    public superP : SuperService,
    private navCtrl: NavController,
    private globalProv: GlobalService,
    private storage: Storage ,
  ) { 
    this.res = this.nav.get('value');
    this.showAdd = true;
    console.log('result detail : ', JSON.stringify(this.res));
    this.btnAddFavoris =true;
  }

  ngOnInit() { 
    this.checkCatalogueFavorie(this.res.id_catalogue)
    console.log('detail catalogue  : ', this.res.id_catalogue)
  }

  onClick(){
    this.navCtrl.navigateForward('panier');
    this.closeModal();
  }
  checkCatalogueFavorie(id_catalogue) {
    let self = this;
    this.storage.ready().then(() => {
      this.storage.get("id_contact").then((id_contact) => {
          console.log("id contact  : ", id_contact);
          self.globalProv.checkCatalogueFavoris(id_contact, id_catalogue).subscribe(Data => {
            if (Data) {
              console.log('check favoris : ', JSON.stringify(self.res));
              let obj:any = [];
              obj = Data;
              if(obj.status == '200') {
                  self.showAdd = false;
                  return true;
              }else {
                  self.showAdd = true;
                  return false;
              }
            }
          })
      })
    })
  }

  async closeModal() {
    await this.modal.dismiss();
  }

  addToFavoris(id_catalogue) {
    let self = this;
    this.storage.ready().then(() => {
      this.storage.get("id_contact").then((id_contact) => {
          if(id_contact != null) {
            if(self.superP.Connected){
              console.log("id contact  : ", id_contact);
              self.globalProv.addCatalogueFavoris(id_contact ,id_catalogue).subscribe(Data => {
                if (Data) {
                  console.log('cataalogue : ', JSON.stringify(Data))
                  self.showAdd = false ;
                  self.globalProv.presentToast(this.superP.globalLanguages.actualite_detailproduit_welladded_tofavoris,3000,'bottom');
                  console.log('add favoris : ', JSON.stringify(self.res));
                }
              })
            }
          } else {
            this.globalProv.presentToast(this.superP.globalLanguages.alert_login_must_be_connetced,2000,'bottom');
          }
      })
    })
   }

  removeFromFavoris(id_catalogue) {
    let self = this;
    this.storage.ready().then(() => {
      this.storage.get("id_contact").then((id_contact) => {
        if(id_contact != null) {
            if(self.superP.Connected){
              console.log("id contact  : ", id_contact);
              self.globalProv.deleteCatalogueFavoris(id_contact ,id_catalogue).subscribe(Data => {
                if (Data) {
                  self.showAdd = true ;
                  self.globalProv.presentToast(this.superP.globalLanguages.actualite_detailproduit_deleted_tofavoris,3000,'bottom');
                  console.log('delate favoris : ', JSON.stringify(this.res));
                }
              })
            }
        } else {
          this.globalProv.presentToast(this.superP.globalLanguages.alert_login_must_be_connetced,2000,'bottom');
        }
      })
    })
  }

  demandeInfo(x){
    this.navCtrl.navigateForward("demandeinfo/cataloge/"+x );
    this.closeModal();

  }

}
