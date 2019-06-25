import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-multi-level',
  templateUrl: './multi-level.page.html',
  styleUrls: ['./multi-level.page.scss'],
})
export class MultiLevelPage implements OnInit {

  @Input() res;
  result:any = [];
  result1:any = [];
  id_categorie:any;
  id_categorie1:any;
  id_rebrique: any;
  x:any;
  categorie: any;
  sousCategorie: any;


  constructor(
    private globalProv: GlobalService,
    public superP: SuperService,
    private navCtrl: NavController,
    public navParams: ActivatedRoute) {
  
      this.navParams.paramMap.subscribe( para =>{
        if(!para.has('id')){
          return;
        }
        this.id_categorie = para.get('idc');
        this.id_categorie1 = para.get('id');
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
                // this.result = x.children;
                let i: any;
                for(i of x.children){
                  if(i.id_category == this.id_categorie1){
                    console.log(x);
                    this.sousCategorie = i.name;
                    this.result = x.children;
                  }
                }
              }
              
            }
            console.log("eeee" +this.sousCategorie);
            console.log("res eboutique : ", self.result);
    }); 
  }
  
  afficherProduit(id){
    this.navCtrl.navigateRoot("produit-detail/"+id);
  }
  goToProduits(res:any,data){
    console.log('rres : ', res)
    if(data.length != 0) {
      this.navCtrl.navigateRoot("categories-page/"+this.id_categorie+"/rebrique/"+this.id_categorie1+"/sous-cat/"+res);
    }
    else{
      this.globalProv.presentToast("this.superP.globalLanguages.no_articles",2000,'bottom');
    }
  }

}
