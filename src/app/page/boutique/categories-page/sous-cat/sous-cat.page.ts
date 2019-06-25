import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { NavParams, ModalController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ProduitServiceComponent } from 'src/app/component/produit-service/produit-service.component';
import { ProduitComponent } from 'src/app/component/produit/produit.component';
import { of } from 'rxjs';

@Component({
  selector: 'app-sous-cat',
  templateUrl: './sous-cat.page.html',
  styleUrls: ['./sous-cat.page.scss'],
})
export class SousCatPage implements OnInit {

  @Input() res;
  filtres:any='name'
  affichageType:any='grid'
  result:any = [];
  result1:any = [];
  id_categorie:any;
  x:any;

  constructor(
    private globalProv: GlobalService,
    public superP: SuperService,
    private modalController: ModalController,
    private navCtrl: NavController,
    public navParams: ActivatedRoute) {
  
      this.navParams.paramMap.subscribe( para =>{
        if(!para.has('id')){
          return;
        }
        this.id_categorie = para.get('id');
        console.log(this.id_categorie);
        this.init();

      })
  }
  ngOnInit() {
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail);
    if (ev.detail.value =='grid'){
      this.x = 0;
    }else{
      this.x = 1;
    }
  }
  init() {
      let self = this;
      self.globalProv.getListProduits(this.id_categorie).subscribe(Data => {
        console.log('list produit  : ', JSON.stringify(Data));
        if (Data) {
          let Obj:any = [];
          Obj = Data;
          console.log('list produit  : ', Obj);
          if(Obj.status == "200"){
            this.result = Obj.result;
          }else if(Obj.status == "500"){
              this.result = [];
          }
        }
      });
  }
  gotoDetails(res){
    this.navCtrl.navigateForward("article/"+res.id_product);
  }
//  async gotoDetails(res){
//     const modal = await this.modalController.create({
//       component: ProduitComponent,
//       componentProps: { value: res }
//       });
//       await modal.present();
//   }
}
