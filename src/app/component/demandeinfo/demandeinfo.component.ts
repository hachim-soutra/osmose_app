import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, NavController } from '@ionic/angular';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-demandeinfo',
  templateUrl: './demandeinfo.component.html',
  styleUrls: ['./demandeinfo.component.scss'],
})
export class DemandeinfoComponent implements OnInit {
  res: any;
  description: any;
  date_resa: any;

  constructor(
    private modal: ModalController,
    private nav: NavParams,
    public superP : SuperService,
    private navCtrl: NavController,
    private globalProv: GlobalService,
    private storage: Storage ,
  ) { 
    this.res = this.nav.get('value');
    console.log('result detail : ', JSON.stringify(this.res));
  }

  ngOnInit() {}

  async closeModal() {
    await this.modal.dismiss();
  }
  send() {
    let self = this;
     if(self.description) {
      self.storage.ready().then(() => {
        self.storage.get("id_contact").then((id_contact) => {
            if (id_contact != null) {
              // sendDemandeInfoServices(id_contact, id_service, description, date_resa)
              this.globalProv.sendDemandeInfoServices(id_contact,this.res.id_service,this.description).subscribe(Data => {
                  if (Data) {
                    console.log('res demande : ', JSON.stringify(Data))
                    let obj:any=[];
                    obj = Data;
                    if(obj.status == "200") {
                      self.globalProv.presentToast(obj.result,3000,"bottom");
                      this.closeModal();
                    } else {
                      self.globalProv.presentToast(obj.result,3000,"bottom");
                    }
                  }
                });
            } else {
              this.globalProv.presentToast(this.superP.globalLanguages.alert_login_must_be_connetced, 'bottom');
            }
          })
        })
    } else {
      self.globalProv.presentToast(this.superP.globalLanguages.demandeinfo_vide_champs, 3000, "bottom")
    }
  } 
}
