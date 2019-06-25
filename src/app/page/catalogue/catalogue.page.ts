import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {

  result:any = [];

  constructor(
    public globalProv: GlobalService,
    public superP: SuperService,
  ) { }

  ngOnInit(): void {
    this.init();
  } 

  init() {
    let self = this;
    self.globalProv.getCatalogueCategories().subscribe(Data => {
      if (Data) {
        self.result = Data;
      }
    });
  }
  doRefresh(refresher) {
    setTimeout(() => {
      this.init();
      refresher.target.complete();
    }, 500);
  }
  
}
