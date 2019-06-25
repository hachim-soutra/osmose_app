import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.page.html',
  styleUrls: ['./evenement.page.scss'],
})
export class EvenementPage implements OnInit {
  result: Object;

    constructor(
    public globalProv: GlobalService,
    public superP: SuperService,
    private navCtrl: NavController,
  ) { }

  ngOnInit(): void {
    this.init();
  } 
  doRefresh(refresher) {
    setTimeout(() => {
      this.init();
      refresher.target.complete();
    }, 500);
  }

  init() {
    let self = this;
    self.globalProv.getEvents().subscribe(Data => {
      if (Data) {
        console.log(Data);
        self.result = Data;
      }
    });
  }

  goToDetailEvent(id){
    this.navCtrl.navigateForward("evenement-detail/" + id);
  }

}
