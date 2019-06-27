import { Component, OnInit } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { Storage } from '@ionic/storage';
import { GlobalService } from 'src/app/service/global.service';
import { DemmandesListComponent } from 'src/app/component/demmandes-list/demmandes-list.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-list-demande',
  templateUrl: './list-demande.page.html',
  styleUrls: ['./list-demande.page.scss'],
})
export class ListDemandePage implements OnInit {
  obj: any;
  result: any;
  colors:any;
  x: number;

  constructor(public superP: SuperService,private storage: Storage,private globalProv: GlobalService,public modalController:ModalController) {
    this.colors = [
      "#ff0000",
      "#008000",
      "#800080"
    ]
   }

  ngOnInit() {
    this.init();
  }

  init() {
    let self = this;
    this.storage.ready().then(() => {
      this.storage.get("id_contact").then((id_contact) => {
          self.globalProv.listDemandeInfo(id_contact).subscribe(Data => {
            if (Data) {
                this.result = Data;
                console.log('mes participation : ', this.result);
            }
          })
      })
    })
  }

  ionViewDidEnter() {
    this.init();
  }

  annuler(id) {
    let self = this;
    self.globalProv.removeDemandeInfo(id).subscribe(Data => {
      if (Data) {
        let obj:any=[];
        obj = Data;
        console.log('remove : ', Data);
        if(obj.status == "200") { 
          this.globalProv.presentToast( obj.result, 3000 , 'bottom')
        } else{
          this.globalProv.presentToast( obj.result, 3000 , 'bottom')
        }
      }
    })
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail);
    if (ev.detail.value =='all'){
      this.x = 0;
    } else if(ev.detail.value =='active'){
      this.x = 1;
    }else{
      this.x = 2;

    }
  }
  
  async Details(res){
    const modal = await this.modalController.create({
      component: DemmandesListComponent,
      componentProps: { value: res }
      });
    await modal.present();
   }

   
}
