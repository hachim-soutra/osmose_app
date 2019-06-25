import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { SuperService } from 'src/app/service/super.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { GlobalService } from 'src/app/service/global.service';
import { Storage } from '@ionic/storage';
import { RegisterComponent } from '../register/register.component';
import { ForgetComponent } from '../forget/forget.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public myForm: FormGroup;

  constructor(
    private modal:ModalController ,
    public superP: SuperService ,
    private builder: FormBuilder ,
    private storage: Storage,
    private globalProv: GlobalService,
    private navctrl: NavController 
    ){ 
    this.myForm = this.builder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      passsword: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {}

  closeModal(){
    this.modal.dismiss();
  }

  async registerModal(){
    this.closeModal();
    const modal = await this.modal.create({
      component: RegisterComponent,
      componentProps: { value: 1234 }
      });
    modal.present();
  }

  async forgetModal(){
    this.closeModal();
    const modal = await this.modal.create({
      component: ForgetComponent,
      componentProps: { value: 1234 }
      });
    modal.present();
  }

  login(formData){
    let self=this;
    let FormValues = formData.value;
    FormValues['token'] = this.superP.Token;
    console.log(this.superP.Token);
    if(formData.valid) {
      self.globalProv.getlogin(FormValues).subscribe(res => {
          let obj:any=[];
          obj = res;
          if(obj.status =="200") {
            self.storage.set('user' , obj.user);
            this.superP.User = obj.user;
            self.setidContact(obj.user.id_contact);
            this.storage.ready().then(() => {
              this.storage.get("panier").then((panier) => {
                  this.superP.collecteurPanier = panier;
              })
            })
            this.closeModal();
            this.navctrl.navigateRoot('home');
            this.globalProv.presentToast(this.superP.globalLanguages.alert_login_success,3000,'bottom');
         }else if(obj.status == "508"){
            this.globalProv.presentToast(this.superP.globalLanguages.alert_login_verification,3000,'bottom');
          }
      });
    }
}

setidContact(id_contact){
  this.storage.ready().then(() => {
    this.superP.id_contact = id_contact;
    this.storage.set('id_contact', id_contact);
  })
  this.storage.ready().then(() => {
    this.storage.get('panier').then((panier) => {
        if(panier != null) {
            this.superP.collecteurPanier = panier;
        } else {
          this.storage.set('panier', "");
          this.superP.collecteurPanier = [];
        }
    })
  })
}

}
