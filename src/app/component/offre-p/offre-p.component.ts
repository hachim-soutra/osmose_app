import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams, NavController } from '@ionic/angular';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-offre-p',
  templateUrl: './offre-p.component.html',
  styleUrls: ['./offre-p.component.scss'],
})
export class OffrePComponent implements OnInit {

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
     private storage: Storage) { 
    this.res = this.nav.get('value');
    this.showAdd = true;
    console.log('result detail : ', JSON.stringify(this.res));
    this.btnAddFavoris =true;
  }

  ngOnInit() { 
    this.checkProduct(this.res.id_service);
    console.log('detail services  : ', this.res.id_service)
  }

  async closeModal() {
    await this.modal.dismiss();
  }
  demandeInfo(x){
    this.navCtrl.navigateForward("demandeinfo/prestation/" +x);
    this.closeModal();
  }

  checkProduct(id_produit){
    this.storage.ready().then(() => {
      this.storage.get("panier").then((data) => {
        if(data){
          console.log(data);
          this.superP.collecteurPanier = data;
          if(this.superP.collecteurPanier.find((obj) => {
            console.log("object :" + obj);
             obj.id == id_produit; 
             console.log(obj.id);
            })){
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
                  if(element.id == res.id_service){
                    found = true;
                    this.superP.collecteurPanier[cnt].quantite++;
                    self.storage.set("panier", self.superP.collecteurPanier);
                    this.globalProv.presentToast(this.superP.globalLanguages.msg_quantite_mise_jour,2000,'bottom');
                  }
                  cnt++;
                });
                if (!found) {
                  this.addNewItem({
                    "id": res.id_service,
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
 
  
  addNewItem(item){
    let self = this;
    self.superP.collecteurPanier.push(item);
    self.storage.set("panier", self.superP.collecteurPanier);
  }

removeItem(array, element){
  return array.filter(e => e !== element);
}
}
