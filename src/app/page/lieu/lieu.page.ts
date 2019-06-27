import { Component, OnInit } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { Storage } from '@ionic/storage';
import { GlobalService } from 'src/app/service/global.service';
import { DemmandesListComponent } from 'src/app/component/demmandes-list/demmandes-list.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-lieu',
  templateUrl: './lieu.page.html',
  styleUrls: ['./lieu.page.scss'],
})
export class LieuPage implements OnInit {

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
  }
    
  ionViewDidEnter() {
    this.init();
  }

  init() {
    let self = this;
    this.storage.ready().then(() => {
      this.storage.get("id_contact").then((id_contact) => {
        console.log('data : ', id_contact);

          self.globalProv.listDemandeInfoServices(id_contact).subscribe(Data => {
            if (Data) {
              console.log('data : ', Data);
              // if(obj.status == "200") { 
                this.result =Data;
              // } else{
              //   this.result = [];
              // }
            }
          })
      })
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
  annuler(id) {
    let self = this;
    self.globalProv.removeDemandeInfoServices(id).subscribe(Data => {
      if (Data) {
        let obj:any=[];
        obj = Data;
        console.log('remove : ', Data);
        if(obj.status == "200") { 
          this.globalProv.presentToast( obj.result, 3000 , 'bottom')
          this.init();
        } else{
          this.globalProv.presentToast( obj.result, 3000 , 'bottom')
        }
      }
    })
  }

}
