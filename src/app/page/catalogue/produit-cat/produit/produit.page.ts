import { Component, OnInit, Input } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
})
export class ProduitPage implements OnInit {

  res: any;
  id: any;

  constructor(
    public superP: SuperService,
    public globalProv :GlobalService,
    public navParams: ActivatedRoute,
    public router : Router
) { 
  
  }
  ngOnInit() { 
    this.navParams.paramMap.subscribe( para =>{
      if(!para.has('idp')){
        this.router.navigateByUrl('catalogue');
        return;
      }
      this.id = para.get('idp');
    })
    this.init();
  }

  init() {
    let self = this;
    self.globalProv.getListProduits("1").subscribe(Data => {
      if (Data) {
        self.res = Data;
        console.log("produits par categorie : "+JSON.stringify(Data));
      }
    });
  }

}
