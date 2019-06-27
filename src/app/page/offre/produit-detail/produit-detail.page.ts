import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.page.html',
  styleUrls: ['./produit-detail.page.scss'],
})
export class ProduitDetailPage implements OnInit {

  id_produit: any;
  res: any;
  slideOpts = {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    slideTo : 5
    };
  @ViewChild('slides') slides;
  @Input()value: object;
  btnAddFavoris:boolean;
  showAdd:boolean;
  showDelete:boolean;
  attribut:any = [];
  declinison_id:any = null;
  declinison_image:any;
  check: any;

  constructor(private globalProv: GlobalService,public superP: SuperService,private navCtrl: NavController,public navParams: ActivatedRoute,private storage: Storage) {
    this.navParams.paramMap.subscribe( para =>{
      if(!para.has('id')){
        return;
      }
      this.check = false;
      this.id_produit = para.get('id');
      this.showAdd = true;
      this.btnAddFavoris =true;
      console.log(this.id_produit);
      this.init();
      // console.log(this.res.declinaison.length);
     
    })
  }

  checkFavorie() {
    let self = this;
    this.storage.ready().then(() => {
      this.storage.get("id_contact").then((id_contact) => {
        if(id_contact) {
            self.globalProv.checkFavoris(id_contact,this.id_produit).subscribe(Data => {
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
  checkProduct(id_produit){
    this.storage.ready().then(() => {
      this.storage.get("panier").then((data) => {
        if(data){
          this.superP.collecteurPanier = data;
          if(this.superP.collecteurPanier.find((obj) => { obj.id == id_produit; })){
              return true;
          }else{
              return false;
          }
        }
      })
    })
  }

  demandeInfo(x) {
    this.navCtrl.navigateForward("demandeinfo/prestation/"+ x );
  }

  addToFavoris(id_catalogue) {
    if(this.check == 0){
      this.globalProv.presentToast(this.superP.globalLanguages.check,3000,'bottom');
    }
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

  addNewItem(item){
    let self = this;
    self.superP.collecteurPanier.push(item);
    self.storage.set("panier", self.superP.collecteurPanier);
  }

  removeItem(array, element){
    return array.filter(e => e !== element);
  }

  // declinisonSelected(v,x) {
  //   console.log('v : '+v.detail.value.prix);
  //   this.check = true;
  //   this.res.prix = v.detail.value.prix;
  //   this.attribut =v.detail.value.attribut;
  //   this.declinison_id = v.detail.value.id_produit_declinaison;
  //   this.declinison_image = this.res.url_image;
  // }
  
  ngOnInit() {
    this.checkProduct(this.id_produit);
    this.checkFavorie();
  }
  init() {
    let self = this;
    self.globalProv.produit_detail(this.id_produit).subscribe(Data => {
      let obj:any=[];
      obj =Data;
      if( obj.status =="200"){
        this.res = obj.result;
        console.log("res eboutique : ", self.res);
      }else{
        self.globalProv.presentToast(obj.result,3000,'bottom');
        return false;
      }
    }); 
  }

  addToCart(res) {
  //  if( this.res.declinaison.length == 0){
  //   console.log(this.res.declinaison.length);
  //  }else{
    // if(this.declinison_id == null ){
    //   this.globalProv.presentToast(this.superP.globalLanguages.produit_detail_no_attribut_selected,4000,'bottom');
    //   return false;
    // }
  //  }
    let self = this;
    this.storage.ready().then(() => {
      this.storage.get("id_contact").then((id_contact) => {
        if(id_contact != null) {
          this.storage.get("panier").then((data) => {
            if(data){
              console.log('panier : ', data);
                let found = false;
                let cnt = 0;
                data.forEach(element => {
                  console.log( 'panier'+JSON.stringify( element));
                  console.log( res);
                  if(element.id == res.id_product){
                    if(this.id_produit == null ){
                      found = true;
                      this.superP.collecteurPanier[cnt].quantite++;
                      self.storage.set("panier", self.superP.collecteurPanier);
                      this.globalProv.presentToast(this.superP.globalLanguages.msg_quantite_mise_jour,2000,'bottom');  
                    }else{
                      if (element.id == this.id_produit){
                        found = true;
                        this.superP.collecteurPanier[cnt].quantite++;
                        self.storage.set("panier", self.superP.collecteurPanier);
                        this.globalProv.presentToast(this.superP.globalLanguages.msg_quantite_mise_jour,2000,'bottom');  
                      }
                    }
                  }
                  cnt++;
                });
                if (!found) {
                  this.addNewItem({
                    "id": res.id_product,
                    "titre": res.name,
                    "prix": res.price,
                    "img": this.res.url_image,
                    "quantite": 1,
                    // "attribut" : this.attribut,
                    // "id_produit_declinaison" : this.declinison_id
                  });
                  this.globalProv.presentToast(this.superP.globalLanguages.msg_btn_produitajoute,2000,'bottom');
                }
            }else{
              this.addNewItem({
                "id": res.id_product,
                "titre": res.name,
                "prix": res.price,
                "img": this.res.url_image,
                "quantite": 1,
                // "attribut" : this.attribut,
                // "id_produit_declinaison" : this.declinison_id
              });
              this.globalProv.presentToast(this.superP.globalLanguages.alert_ajouter_au_panier,2000,'bottom');
            }
        })
      } else {
        this.globalProv.presentToast(this.superP.globalLanguages.alert_login_must_be_connetced,2000,'bottom');
      }
    })
  })

  }

}
