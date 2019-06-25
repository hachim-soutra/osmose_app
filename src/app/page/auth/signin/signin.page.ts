import { Component, OnInit } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
//import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  user:{};
  email:string;
  password:string;
  public loginForm: FormGroup;
  constructor(
    public superP: SuperService,
    private globalProv: GlobalService,
    private storage: Storage,
    private navctrl: NavController,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ["", Validators.compose([Validators.required , Validators.email ])],
      password : ["", Validators.compose([Validators.required, Validators.minLength(5)])],
    })
   }

  ngOnInit() {
  }

  login(){
    let self=this;
    let FormValues = this.loginForm.value;
    FormValues['token'] = this.superP.Token;
    console.log(this.superP.Token);
    if(this.loginForm.valid){

      self.globalProv.getlogin(FormValues).subscribe(res => {
          let obj:any=[];
          obj = res;
          if(obj.status =="200") {
            console.log('user info :' , obj.user);
            self.storage.set('user' , obj.user);
            self.setidContact(obj.user.id_contact);
            console.log('test ' +this.storage.get('user'));
            this.globalProv.presentToast(this.superP.globalLanguages.alert_login_success,3000,'bottom');
            this.navctrl.navigateForward('compte');
          }else if(obj.status == "508"){
            this.globalProv.presentToast(this.superP.globalLanguages.alert_login_verification,3000,'bottom');
          }
      });
    }
  }

  setidContact(id_contact){
      this.superP.id_contact = id_contact;
      this.storage.set('id_contact', id_contact);
  }

  onClick(){
    this.navctrl.navigateForward('signup');
  }
  forget(){
    this.navctrl.navigateForward('forget');
  }
}
