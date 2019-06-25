import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ProduitServiceComponent } from 'src/app/component/produit-service/produit-service.component';

@Component({
  selector: 'app-produit-cat',
  templateUrl: './produit-cat.page.html',
  styleUrls: ['./produit-cat.page.scss'],
})
export class ProduitCatPage implements OnInit {

  @Input()value: object;
  result:any;
  id:any;
  constructor(
    public globalProv: GlobalService,
    public superP: SuperService,
    public navParams: ActivatedRoute,
    private router: Router,
    private modalController: ModalController
  ) {
    
   }

   ngOnInit() { 
    this.navParams.paramMap.subscribe( para =>{
      if(!para.has('id')){
        this.router.navigateByUrl('catalogue');
        return;
      }
      this.id = para.get('id');
    })
    this.init();
  }

  
  init() {
    let self = this;
    self.globalProv.getProduitsParCategorie(self.id).subscribe(Data => {
      if (Data) {
        self.result = Data;
        console.log("produits par categorie : "+JSON.stringify(self.result));
      }
    });
  }
  
    async openProduit(x) {
      const modal = await this.modalController.create({
      component: ProduitServiceComponent,
      componentProps: { value: x }
      });
    
      await modal.present();
    
    }
  
}
