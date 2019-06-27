import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  imagePath:any;
  random:any;
  colors: string[];
  result: Object;
  result1: any;
  x: number;
  constructor(
    public globalProv: GlobalService,
    public superP: SuperService,
    private storage: Storage,
    private navCtrl: NavController
  ) {
    this.colors = [
      "#ff0000",
      "#008000",
      "#800080"
    ]
   }

  ngOnInit() {
    this.init();
 }

 ionViewDidEnter() {
  this.init();
}

init() {
  let self = this;
  this.storage.ready().then(() => {
    this.storage.get("id_contact").then((id_contact) => {
        self.globalProv.listDemandeInfoEboutique(id_contact).subscribe(Data => {
          if (Data) {
            console.log('data : ', Data);
            // if(obj.status == "200") { 
              let x:any;
              this.result =Data;
              // for(x of this.result1){
              //    if(x.etat = '1'){
              //      this.result = x;
              //    }
              //  }
          }
        })
    })
  })
}

  annuler(id) {
    let self = this;
    self.globalProv.removeDemandeInfoEboutique(id).subscribe(Data => {
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
  
}
