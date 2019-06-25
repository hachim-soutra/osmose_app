import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { Storage } from '@ionic/storage';
import { NavController, ModalController } from '@ionic/angular';
import { ProduitServiceComponent } from 'src/app/component/produit-service/produit-service.component';
import { FavArtComponent } from 'src/app/component/fav-art/fav-art.component';
import { ArtFavComponent } from 'src/app/component/art-fav/art-fav.component';

@Component({
  selector: 'app-article-fav',
  templateUrl: './article-fav.page.html',
  styleUrls: ['./article-fav.page.scss'],
})
export class ArticleFavPage implements OnInit {

  result: any;
  obj :any;
  constructor(public globalProv: GlobalService,public superP: SuperService,private storage: Storage,
    public nav: NavController,private modalController:ModalController){ 
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
         self.globalProv.getArticleFavoris(id_contact).subscribe(Data => {
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
  const modal = await this.modalController.create({
    component: ArtFavComponent,
    componentProps: { value: res }
    });
  await modal.present();
 }

  doRefresh(refresher) {
    setTimeout(() => {
      this.init();
      refresher.target.complete();
    }, 500);
  }

}
