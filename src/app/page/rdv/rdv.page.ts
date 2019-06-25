import { Component, OnInit } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.page.html',
  styleUrls: ['./rdv.page.scss'],
})
export class RdvPage implements OnInit {

  id_contact:any;
  description:any;
  date_resa : any;
  constructor(
    public superP: SuperService,
    private globalProv: GlobalService,
    public storage :Storage , 
  ) { }

  ngOnInit() {
  }
  send() {
    let self = this;
     if(self.description) {
      self.storage.ready().then(() => {
        self.storage.get("id_contact").then((id_contact) => {
            if (id_contact != null) {
              console.log('send  : ', id_contact)
              self.globalProv.sendDemandeRdv(id_contact, this.description, this.date_resa).subscribe(Data => {
                  if (Data) {
                    console.log('res demande : ', JSON.stringify(Data))
                    let obj:any=[];
                    obj = Data;
                    if(obj.status == "200") {
                      self.globalProv.presentToast(obj.result,3000,"bottom");
                      this.date_resa = '';
                      this.description = '';
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
      self.globalProv.presentToast(self.superP.globalLanguages.demandeinfo_vide_champs, 3000, "bottom")
    }
  } 

}
