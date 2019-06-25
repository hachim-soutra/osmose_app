import { Component, OnInit } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { ModalController, MenuController, NavController, NavParams } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global.service';
import { Storage } from '@ionic/storage';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { DemmandesListComponent } from 'src/app/component/demmandes-list/demmandes-list.component';
import { ProduitServiceComponent } from 'src/app/component/produit-service/produit-service.component';
import { ProFavComponent } from 'src/app/component/pro-fav/pro-fav.component';


@Component({
  selector: 'app-list-demande-services',
  templateUrl: './list-demande-services.page.html',
  styleUrls: ['./list-demande-services.page.scss'],
})
export class ListDemandeServicesPage implements OnInit {

  result: any;
  obj :any;
  constructor(public globalProv: GlobalService,public superP: SuperService,private storage: Storage,
    public nav: NavController,private modalController:ModalController, private navCtrl: NavController){ 
    this.init();
  }

  ngOnInit() {
  }
 
 init() {
   let self = this;
   let obj:any = [];
   this.storage.ready().then(() => {
     this.storage.get("id_contact").then((id_contact) => {
         console.log(id_contact);
         self.globalProv.getProFavoris(id_contact).subscribe(Data => {
           console.log(Data);
           if (Data) {
             obj = Data;
             if(obj.status == '200') {
                 self.result = obj.result;
             }else if(obj.status == '500'){
                 self.result = []; 
             }
           }
         })
     })
     
   })
 }
 gotoDetails(res){
   console.log(res);
 }

 async Details(res){
  this.navCtrl.navigateRoot("article/"+res.id_produit);

  // const modal = await this.modalController.create({
  //   component: ProFavComponent,
  //   componentProps: { value: res }
  //   });
  // await modal.present();
 }


  doRefresh(refresher) {
    setTimeout(() => {
      this.init();
      refresher.target.complete();
    }, 500);
  }
}
