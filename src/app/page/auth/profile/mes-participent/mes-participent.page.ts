import { Component, OnInit } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { Storage } from '@ionic/storage';
import { GlobalService } from 'src/app/service/global.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mes-participent',
  templateUrl: './mes-participent.page.html',
  styleUrls: ['./mes-participent.page.scss'],
})
export class MesParticipentPage implements OnInit {

  result:any = [];
  obj:any;
  constructor(
    public superP: SuperService,private storage: Storage,private globalProv: GlobalService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.init();
  }

  init() {
    let self = this;
    this.storage.ready().then(() => {
      this.storage.get("id_contact").then((id_contact) => {
          self.globalProv.getListParticipations(id_contact).subscribe(Data => {
            if (Data) {
              this.obj = Data;
              if(this.obj.status == "200") {
                this.result = this.obj.result;
                console.log('mes participation : ', this.result);
              } else if(this.obj.status == "500"){
                this.result = [];
                console.log('mes 1 participation : ', this.result);
              }
            }
          })
      })
    })
  }

  goToDetailEvent(id){
    this.navCtrl.navigateForward("evenement-detail/" + id);
  }

}
