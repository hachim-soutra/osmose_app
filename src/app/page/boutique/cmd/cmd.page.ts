import { Component, OnInit } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { ModalController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-cmd',
  templateUrl: './cmd.page.html',
  styleUrls: ['./cmd.page.scss'],
})
export class CmdPage implements OnInit {

  result:any = [];
  colors:any;
  constructor(
    public superP :SuperService,
    public storage :Storage , 
    public modalCtrl : ModalController, 
    private globalProv :GlobalService,
    public navCtrl: NavController, 
  ) { }

  ionViewDidEnter() {
    this.init();
  }

  init() {
    let self = this;
    this.storage.ready().then(() => {
      this.storage.get("id_contact").then((id_contact) => {
          self.globalProv.commandesList(id_contact).subscribe(Data => {
            if (Data) {
              let obj:any= [];
              obj = Data;
              console.log('data : ', Data);
                this.result = obj.result;
            }
          })
      })
    })
  }
  ngOnInit() {
  }

  doRefresh(refresher) {
    setTimeout(() => {
      this.init();
      refresher.complete();
    }, 1000);
  }

  goToDetail(id_cmd) {
    this.navCtrl.navigateForward("cmd-detail/"+id_cmd);
  }
}
