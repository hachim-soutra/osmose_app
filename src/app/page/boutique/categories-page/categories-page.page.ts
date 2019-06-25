import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { NavController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.page.html',
  styleUrls: ['./categories-page.page.scss'],
})
export class CategoriesPagePage implements OnInit {

  result: any ;
  places:any=[];
  constructor( private globalProv: GlobalService,public superP: SuperService, private navCtrl : NavController) { }

  ngOnInit() {
    this.init();
  }
  doRefresh(refresher) {
    setTimeout(() => {
      this.init();
      refresher.target.complete();
    }, 500);
  }
  init() {
    let self = this;
    self.globalProv.getListCategories().subscribe(Data => {
      self.result = Data;
      console.log("res eboutique : ", self.result);
    }); 
  }

  goToProduits(res:any,data){
    console.log('rres : ', res)
    if(data.length != 0) {
      this.navCtrl.navigateRoot("categories-page/"+res);
    }
    else{
      this.globalProv.presentToast("this.superP.globalLanguages.no_articles",2000,'bottom');
    }
  }
  afficherProduit(id){
    this.navCtrl.navigateRoot("produit-detail/"+id);
  }

}
