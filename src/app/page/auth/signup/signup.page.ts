import { Component, OnInit, Injectable } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { NavComponent } from '@ionic/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Injectable()
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  nom:string;
  prenom:string;
  email:string;
  password:string;
  reapet_password:string;
  person :{};
  public form: FormGroup;
  constructor(private navctrl: NavController,
    public superP: SuperService, private globalProv: GlobalService,private navCtrl: NavController,private fb: FormBuilder){}

  ngOnInit() {
    this.form = this.fb.group({
      nom: ["", Validators.compose([Validators.required ])],
      prenom: ["", Validators.compose([Validators.required])],
      email: ["", Validators.compose([Validators.required , Validators.email ])],
      password : ["", Validators.compose([Validators.required, Validators.minLength(5)])],
      repassword : ["", Validators.compose([Validators.required])]
    });
    

    // this.form.error('email', '', 'remplire le champs email');
    // this.form.setErrorMessage('password', '', 'remplire le champs mot de passe');
    // this.form.setErrorMessage('repassword', '', 'rentrer le mot de passe');
    // this.form.setErrorMessage('nom', '', 'remplire le champs nom');
    // this.form.setErrorMessage('prenom', '', 'remplire le champs prenom');
  }


  save(){ 
    let self = this;
    let Data ;
    Data = this.form.value;
    console.log(Data);
    if(this.form.valid){
      Data['token'] = this.superP.Token;
      self.globalProv.getInscription(Data).subscribe(res => {
        console.log('Data : ', JSON.stringify(Data))
        let obj:any=[];
        obj = res;
        console.log("response inscription: "+JSON.stringify(res));
        if(obj.status =="200"){
          self.globalProv.presentToast(obj.result,3000,'bottom');
           self.navCtrl.navigateForward("signin");
        }else{
          self.globalProv.presentToast(obj.result,3000,'bottom');
          return false;
        }
      });
    }
  }

  signin(){
    this.navctrl.navigateForward('signin');
  }
 
}
