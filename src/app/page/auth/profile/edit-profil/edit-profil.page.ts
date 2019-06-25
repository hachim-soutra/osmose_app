import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.page.html',
  styleUrls: ['./edit-profil.page.scss'],
})
export class EditProfilPage implements OnInit {

  public form: FormGroup;
  result:any = [];
  constructor(
    public superP: SuperService,
     private globalProv: GlobalService,
     private navCtrl: NavController,
     public http: HttpClient,
     private storage: Storage,
     private fb: FormBuilder){
      this.form = this.fb.group({
        nom: ["", Validators.compose([Validators.required ])],
        prenom: ["", Validators.compose([Validators.required])],
        email: [""],
        adresse : ["", ],
        tel : ["", Validators.compose([Validators.required])],
  
        //repassword : ["", Validators.compose([])]
      });
      this.form.setErrors(['adresse','ffff'])
     }

  ngOnInit() {
    let self = this;
    this.storage.ready().then(() => {
      this.storage.get("user").then((user) => {
          console.log("user  : ", user);
          self.result = user; 
          self.superP.User = user;
      })
    }) 
  }

  save(){
    let self = this;
    let userData = this.form.value;
    this.storage.ready().then(() => {
        if(this.form.valid){
          self.storage.get("user").then((user) => {
            userData['id'] = user.id_contact;
            console.log(userData);
            this.globalProv.editProfil(userData).subscribe(Data => {
              console.log(Data);
              if (Data) {
                let obj:any=[];
                obj = Data; 
                if(obj.status =="200") {
                    self.globalProv.presentToast(obj.result,3000,'bottom');
                    console.log('result edit profil : ', JSON.stringify(self.result));
                    user.prenom = userData.prenom;
                    user.nom = userData.nom;
                    user.tel = userData.tel;
                    user.adresse = userData.adresse;
                    user.email = userData.email;
                    this.storage.set("user", user);
                    this.navCtrl.navigateRoot('compte');
                } else{
                  self.globalProv.presentToast(obj.result,3000,'bottom');
                }
              } 
              this.globalProv.presentToast(" user"+this.result.id_contact,3000,'bottom')
            })
          })
      }else{
        this.globalProv.presentToast("form invalid",3000,'bottom')
      }
    })
  }
}
