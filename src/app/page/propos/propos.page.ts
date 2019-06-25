import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-propos',
  templateUrl: './propos.page.html',
  styleUrls: ['./propos.page.scss'],
})
export class ProposPage implements OnInit {
  id: string;
  result: any;

  constructor(
    public storage: Storage,
     public globalProv: GlobalService, 
     public superP: SuperService, 
     public navCtrl: NavController, 
     public navParams: ActivatedRoute) {
      this.navParams.paramMap.subscribe( para =>{
        this.id = para.get("id");
        console.log(this.id);
      });
      this.init();
  }
  ngOnInit() {
  }

  init() {
    let self = this;
    self.globalProv.getDetailMessage(this.id).subscribe(Data => {
      if (Data) {
        let obj:any = [];
        obj = Data;
        if(obj.status == "200") {
            console.log('rdetail msg : ', self.result)
            this.result = obj.result[0];
        } else {  
          this.result =[];
        }
      } 
      console.log('rdetail msg : ', self.result)

    })
  }

  updateStatusMessage (id, statut) {
    this.storage.ready().then(() => {
      this.storage.get("id_contact").then((id_contact) => {
          this.globalProv.supprimerMessage(id_contact,id,statut).subscribe(Data => {})
      })
    })
  }

  doRefresh(refresher) {
    setTimeout(() => {
      this.init();
      refresher.complete();
    }, 1000);
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
