import { Component, OnInit } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {

  result: any = [];
  places:any=[];

  constructor( public superP: SuperService , public storage :Storage ,public globalProv: GlobalService,  public navCtrl: NavController) {  }

  ngOnInit() {
     this.init();
  }

  init() {
    let self = this;
    self.globalProv.getListCategoriesServices().subscribe(Data => {
      // let Obj:any = [];
      // Obj = Data;
      console.log("re : ", Data);
        // if(Obj.status == "200"){
            self.result = Data;
            console.log("res eboutique : ", self.result);
        // }else if(Obj.status == "500"){
        //     this.result = [];
        // }
    });
  }
 
  

  goToProduits(id:any){
    this.navCtrl.navigateForward("produit-service/"+id )
  }

 

  doRefresh(refresher) {
    setTimeout(() => {
      this.init();
      refresher.target.complete();
    }, 500);
  }

}
