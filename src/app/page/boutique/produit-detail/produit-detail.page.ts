import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.page.html',
  styleUrls: ['./produit-detail.page.scss'],
})
export class ProduitDetailPage implements OnInit {

    
  @Input() res;
  // filtres:any='name'
  // affichageType:any='grid'
  result:any = [];
  result1:any = [];
  id_categorie:any;
  x:any;
  categorie: any;

  constructor(
    private globalProv: GlobalService,
    public superP: SuperService,
    // private modalController: ModalController,
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
    self.globalProv.getListCategories().subscribe(Data => {
      self.result1 = Data;

            let x:any;
           for(x of this.result1){
              if(x.id_category == this.id_categorie){
                console.log(x);
                this.categorie = x.name;
                this.result = x.children;
              }
            }
            console.log("eeee" +this.categorie);
            console.log("res eboutique : ", self.result);
    }); 
  }
  afficherProduit(id){
    this.navCtrl.navigateRoot("produit-detail/"+id);
  }
  goToProduits(res:any,data,i){
    console.log('rres : ', i)
    if(data.length != 0) {
      this.navCtrl.navigateForward("categories-page/"+i+"/rebrique/"+res);
    }
    else{
      this.globalProv.presentToast("this.superP.globalLanguages.no_articles",2000,'bottom');
    }
  }
//  async gotoDetails(res){
//     const modal = await this.modalController.create({
//       component: ProduitComponent,
//       componentProps: { value: res }
//       });
//       await modal.present();
//   }

}
