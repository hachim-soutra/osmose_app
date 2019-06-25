import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { NavController, ModalController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.scss'],
})
export class MsgComponent implements OnInit {
  res: any;
  @Input()value: object;

  constructor(
    public storage: Storage,public globalProv: GlobalService,
    public superP: SuperService,public navCtrl: NavController,
    public modal: ModalController,private nav: NavParams,) { 
    this.res = this.nav.get('value');
    console.log(this.res)
  }

  ngOnInit() {
    this.updateStatusMessage(this.res.id_msg,2)
  }

  async closeModal() {
    await this.modal.dismiss();
  }

  updateStatusMessage (id, statut) {
    this.storage.ready().then(() => {
      this.storage.get("id_contact").then((id_contact) => {
          this.globalProv.supprimerMessage(id_contact,id,statut).subscribe(Data => {})
      })
    })
  }

  supprierMessage(id, statut) {
    this.storage.ready().then(() => {
      this.storage.get("id_contact").then((id_contact) => {
          this.globalProv.supprimerMessage(id_contact,id,statut).subscribe(Data => {
            if (Data) {
              let obj:any = [];
              obj = Data;
              if(obj.status == "200") {
                  this.globalProv.presentToast(obj.result, 3000, "bottom")
                  this.navCtrl.navigateRoot("msg");
              } else {  
                this.globalProv.presentToast(obj.result, 3000, "bottom")
              }
            } 
          })
      })
    })
  }
}
