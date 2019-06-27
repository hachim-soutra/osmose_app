import { Component, OnInit, Input } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { Storage } from '@ionic/storage';
import { GlobalService } from 'src/app/service/global.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-deamnadeinfo-pre',
  templateUrl: './deamnadeinfo-pre.page.html',
  styleUrls: ['./deamnadeinfo-pre.page.scss'],
})
export class DeamnadeinfoPrePage implements OnInit {
  res: any;
  description: any;
  date: any;

  constructor(
    public superP: SuperService,
    private globalProv:GlobalService,
    private storage: Storage,
    public navParams: ActivatedRoute,
    private nav: NavController,
    private modal: ModalController
  ) { 
    this.navParams.paramMap.subscribe( para =>{
     
      this.res = para.get('id');
    })
      console.log('res : b ', this.res)
  }

  ngOnInit() {
  }

  send() {
    let self = this;
     if(self.description) {
      self.storage.ready().then(() => {
        self.storage.get("id_contact").then((id_contact) => {
          console.log('send  : ', this.res)
          self.globalProv.sendDemandeInfoEboutique(id_contact, self.res, self.description).subscribe(Data => {
            if (Data) {
              console.log('res demande : ', JSON.stringify(Data))
              let obj:any=[];
              obj = Data;
              if(obj.status == "200") {
                self.globalProv.presentToast(obj.result,3000,"bottom");
                this.nav.navigateRoot("article/"+this.res);
              } else {
                self.globalProv.presentToast(obj.result,3000,"bottom");
              }
            }
            });
          })
        })
    } else {
      self.globalProv.presentToast(self.superP.globalLanguages.demandeinfo_vide_champs, 3000, "bottom")
    }
  } 
  

  

}
