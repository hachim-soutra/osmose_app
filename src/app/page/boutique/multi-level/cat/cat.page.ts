import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.page.html',
  styleUrls: ['./cat.page.scss'],
})
export class CatPage implements OnInit {

  @Input() res;
  result:any = [];
  result1:any = [];
  id_categorie:any;
  id_categorie1:any;
  id_rebrique: any;
  x:any;
  categorie: any;
  sousCategorie: any;
  id_categorie2: any;
  sousCategorie2: any;


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
        this.id_categorie1 = para.get('idr');
        this.id_categorie2 = para.get('id');
        console.log(this.id_categorie2);
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
                let i: any;
                for(i of x.children){
                  if(i.id_category == this.id_categorie1){
                    console.log(i);
                    this.sousCategorie = i.name;
                    let e: any;
                    for(e of i.children){
                      if(e.id_category == this.id_categorie2){
                        console.log(e);
                        this.sousCategorie2 = e.name;
                        this.result = e.children;
                      }
                    }
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
      this.navCtrl.navigateRoot("categories-page/"+this.categorie+"/rebrique/"+this.id_categorie1+"/sous-cat/"+res);
    }
    else{
      this.globalProv.presentToast("this.superP.globalLanguages.no_articles",2000,'bottom');
    }
  }

}
