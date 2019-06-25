import { Component, OnInit } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { ToastController, NavController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  name:string;
  prenom:string;
  email:string;
  x:Boolean = false;
  password:string;
  reapet_password:string;

  constructor(
    public storage : Storage,
    public toastCtrl: ToastController ,
    private navCtrl: NavController ,
    private globalProv: GlobalService, 
    public navParams: NavParams,
    public superP: SuperService,
  ) { }

  ngOnInit() {
  }
  save(){ 
    let self = this;
    let Data = [this.prenom , this.name, this.email, this.password, this.reapet_password];
    Data['token'] = this.superP.Token;
    if(this.password == this.reapet_password ){
      self.globalProv.getInscription(Data).subscribe(res => {
        console.log('Data : ', JSON.stringify(Data))
        let obj:any=[];
        obj = res;
        console.log("response inscription: "+JSON.stringify(res));
        if(obj.status =="200"){
          self.globalProv.presentToast(obj.result,3000,'bottom');
          self.navCtrl.navigateForward("loginT");
          
        }else{
          self.globalProv.presentToast(obj.result,3000,'bottom');
          return false;
        }
      });
    }else{
      self.globalProv.presentToast('password not match',3000,'bottom');
    }
  }
}
