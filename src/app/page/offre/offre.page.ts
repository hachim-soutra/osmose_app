import { Component, OnInit } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { ProduitServiceComponent } from 'src/app/component/produit-service/produit-service.component';
import { ModalController, NavController } from '@ionic/angular';
import { OffrePComponent } from 'src/app/component/offre-p/offre-p.component';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.page.html',
  styleUrls: ['./offre.page.scss'],
})
export class OffrePage implements OnInit {
  services:any = [];
  produits:any = [];
  x: number;

  constructor(
    public superP: SuperService,
    private globalProv: GlobalService,
    public modalController: ModalController,
    private nav: NavController
  ) { }

  ngOnInit() {
    this.listOffresProduits();
    this.listOffresServices();
  }
 
  listOffresProduits() {
    let self = this;
    self.globalProv.listOffresProduits().subscribe(Data => {
      //let Obj:any = [];
      //Obj = Data;
      console.log("res services : ", Data);
        // if(Obj.status == "200"){
            self.produits = Data;
            console.log("res services : ", self.services);
        // }else if(Obj.status == "500"){
        //     this.produits = [];
        // }
    });
  }

  listOffresServices() {
    let self = this;
    self.globalProv.listOffresServices().subscribe(Data => {
      
      console.log("res services : ", Data);
       
            this.services = Data;
            console.log("res services : ", self.services);
       
    });
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail);
    if (ev.detail.value =='offre'){
      this.x = 0;
    }else{
      this.x = 1;
    }
  }
   
  gotToDetailProduit(res) {
    this.nav.navigateForward("offre-produit-detail/"+res);
  }

  gotToDetailService(res) {
    this.nav.navigateForward("offre-service-detail/"+res);
  }

  async openProduit(x) {
    const modal = await this.modalController.create({
    component: OffrePComponent,
    componentProps: { value: x }
    });
  
    await modal.present();
  
  }
}
