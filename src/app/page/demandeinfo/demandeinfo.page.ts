import { Component, OnInit, Input } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { Storage } from '@ionic/storage';
import { GlobalService } from 'src/app/service/global.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-demandeinfo',
  templateUrl: './demandeinfo.page.html',
  styleUrls: ['./demandeinfo.page.scss'],
})
export class DemandeinfoPage implements OnInit {

  @Input() value: object;
  description: any;
  res: any;
  page: string;

  constructor(
    public superP: SuperService,
    private globalProv:GlobalService,
    private storage: Storage,
    public navParams: ActivatedRoute,
    private nav: NavController
  ) { 
    this.navParams.paramMap.subscribe( para =>{
     
      this.res = para.get('id');
    })
      console.log('res : b '+ this.res)
  }

  ngOnInit() {
  }

  send() {
    let self = this;
     if(self.description) {
      self.storage.ready().then(() => {
        self.storage.get("id_contact").then((id_contact) => {
          self.globalProv.sendDemandeInfo(id_contact, this.res, self.description).subscribe(Data => {
              if (Data) {
                console.log('res demande : ', JSON.stringify(Data))
                let obj:any=[];
                obj = Data;
                if(obj.status == "200") {
                  self.globalProv.presentToast(obj.result,3000,"bottom");
                  this.nav.navigateRoot("catalogue");
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
