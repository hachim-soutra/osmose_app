import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { NavController } from '@ionic/angular';
import { SuperService } from 'src/app/service/super.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.page.html',
  styleUrls: ['./forget.page.scss'],
})
export class ForgetPage implements OnInit {

  email: any;
  constructor(
    private globalProv: GlobalService,
    public superP: SuperService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  send(){
    let self=this;
    console.log(this.email); 
      self.globalProv.sendEmail(this.email).subscribe(res => {
        console.log('res  : ', JSON.stringify(res));
        let obj:any=[];
        obj = res;
        if(obj.status =="200") {
          self.globalProv.presentToast(obj.result,3000,'bottom');
        }else {
          self.navCtrl.navigateForward("signin");
          self.globalProv.presentToast(obj.result,3000,'bottom');
        }
     
    })
  }
}
