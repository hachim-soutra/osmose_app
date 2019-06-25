import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController, NavParams, NavController } from '@ionic/angular';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';


@Component({
  selector: 'app-pro-fav',
  templateUrl: './pro-fav.component.html',
  styleUrls: ['./pro-fav.component.scss'],
})
export class ProFavComponent implements OnInit {

  // slideOpts = {
  //   slidesPerView: 1,
  //   spaceBetween: 0,
  //   centeredSlides: true,
  //   slideTo : 5
  //   };
  // @ViewChild('slides') slides;
  @Input()value: object;
  res: any;
  showAdd: boolean;
  btnAddFavoris: boolean;
  constructor(
    private modal: ModalController, 
    private nav: NavParams,
    public superP : SuperService,
    private globalProv: GlobalService,
    private navCtrl: NavController,
    private storage: Storage
  ) { 
    this.res = this.nav.get('value');
    this.showAdd = true;
    console.log('result detail : ', JSON.stringify(this.res));
    this.btnAddFavoris =true;
  }

  ngOnInit() { 
    this.checkProduct(this.res.id_produit);
    this.checkFavorie(this.res.id_produit);
  }

  async closeModal() {
    await this.modal.dismiss();
  }

  async demandeInfo(x) {
    this.closeModal();
    this.navCtrl.navigateForward("demandeinfo/prestation/"+ x );
  }

   addToFavoris(id_catalogue) {
    let self = this;
    this.storage.ready().then(() => {
      this.storage.get("id_contact").then((id_contact) => {
          if(id_contact != null) {
            if(self.superP.Connected){
              console.log("id contact  : ", id_contact);
              self.globalProv. addFavoris(id_contact ,id_catalogue).subscribe(Data => {
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
              self.globalProv.deleteFavoris(id_contact ,id_catalogue).subscribe(Data => {
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

  checkProduct(id_produit){
    this.storage.ready().then(() => {
      this.storage.get("panier").then((data) => {
        if(data){
          this.superP.collecteurPanier = data;
          if(this.superP.collecteurPanier.find((obj) => {
            console.log(JSON.stringify(obj));
            obj.id == id_produit; })){
              return true;
          }else{
              return false;
          }
        }
      })
    })
  }
  addToCart(res) {
    let self = this;
    this.storage.ready().then(() => {
      this.storage.get("id_contact").then((id_contact) => {
        if(id_contact != null) {
          this.storage.get("panier").then((data) => {
              if(data){
                let found = false;
                let cnt = 0;
                data.forEach(element => {
                  console.log( element);
                  console.log( res);
                  if(element.id == res.id_produit){
                    found = true;
                    this.superP.collecteurPanier[cnt].quantite++;
                    self.storage.set("panier", self.superP.collecteurPanier);
                    this.globalProv.presentToast(this.superP.globalLanguages.msg_quantite_mise_jour,2000,'bottom');
                  }
                  cnt++;
                });
                if (!found) {
                  this.addNewItem({
                    "id": res.id_produit,
                    "titre": res.titre,
                    "prix": res.prix,
                    "img": res.url_image,
                    "quantite": 1
                  });
                  this.globalProv.presentToast(this.superP.globalLanguages.msg_btn_produitajoute,2000,'bottom');
                }
            }else{
              this.addNewItem({
                "id": res.id_service,
                "titre": res.titre,
                "prix": res.prix,
                "img": res.url_image,
                "quantite": 1
              });
              this.globalProv.presentToast(this.superP.globalLanguages.alert_ajouter_au_panier,2000,'bottom');
            }
        })
      } else {
        this.globalProv.presentToast(this.superP.globalLanguages.alert_login_must_be_connetced,2000,'bottom');
        //this.globalProv.presentModal('SigninPage')
      }
    })
  })

  }
 
  checkFavorie(id_produit) {
    let self = this;
    this.storage.ready().then(() => {
      this.storage.get("id_contact").then((id_contact) => {
        if(id_contact) {
            self.globalProv.checkFavoris(id_contact,id_produit).subscribe(Data => {
              if (Data) {
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
          } else {
            this.globalProv.presentToast(this.superP.globalLanguages.alert_login_must_be_connetced,3000,'bottom');
          }
      })
    })
  }
  addNewItem(item){
    let self = this;
    self.superP.collecteurPanier.push(item);
    self.storage.set("panier", self.superP.collecteurPanier);
  }

  removeItem(array, element){
    return array.filter(e => e !== element);
  }

}
