import { Component, OnInit } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-produit-service',
  templateUrl: './produit-service.page.html',
  styleUrls: ['./produit-service.page.scss'],
})
export class ProduitServicePage implements OnInit {
  id: any;
  result:any = [];
  id_categorie:any;
  x: number;
  constructor(
    public superP: SuperService,public navCtrl: NavController,public globalProv: GlobalService,
    public navParams: ActivatedRoute
    ) {
      this.navParams.paramMap.subscribe( para =>{
        console.log(para)
        this.id_categorie = para.get('id');
       
      })
    }

  ngOnInit() {
    this.init();
  }

  init() {
    let self = this;
    self.globalProv. getServicesDetail(this.id_categorie).subscribe(Data => {
      console.log('list produit  : ', JSON.stringify(Data));
      if (Data) {
        let Obj:any = [];
        Obj = Data;
      
        if(Obj.status == "200"){
          this.result = Obj.result;
          console.log('list produit 1 : ', Obj.result);
        }else if(Obj.status == "500"){
          console.log('list produit 2 : ', Obj.result);
          this.result = [];
        }
      }
    });
  }

  gotoDetails(res){
    console.log('res : ', res);
    this.navCtrl.navigateForward("service-detail/"+this.id_categorie+"/"+res.id_service);
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail);
    if (ev.detail.value =='grid'){
      this.x = 0;
    }else{
      this.x = 1;
    }
  }
}
