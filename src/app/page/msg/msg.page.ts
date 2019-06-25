import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { NavController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { MsgComponent } from 'src/app/component/msg/msg.component';


@Component({
  selector: 'app-msg',
  templateUrl: './msg.page.html',
  styleUrls: ['./msg.page.scss'],
})
export class MsgPage implements OnInit {
  result:any = [];

  constructor(
   public storage : Storage,
   public globalProv: GlobalService,
   public superP : SuperService,
   public navCtrl:NavController,
   public modal: ModalController
    ) {}
    
  ngOnInit() {}

  ionViewDidEnter() {
    this.init();
  }

  init() {
    let self = this;
    this.storage.ready().then(() => {
      this.storage.get("id_contact").then((id_contact) => {
        if(self.superP.Connected){
          self.globalProv.getMessage(id_contact).subscribe(Data => {
            if (Data) {
              self.result = Data;
              console.log('data : ', self.result)
            }
          })
        }
      })
    })
  }

  async goToDetailMessage(id){
      const modal = await this.modal.create({
      component: MsgComponent,
      componentProps: { value: id }
      });
      await modal.present();
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
              } else {  
                this.globalProv.presentToast(obj.result, 3000, "bottom")
              }

            } 
          })
      })
    })
  }

  doRefresh(refresher) {
    setTimeout(() => {
      this.init();
      refresher.target.complete();
    }, 1000);
  }
}
