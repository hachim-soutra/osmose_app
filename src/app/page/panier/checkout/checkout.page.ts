import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { PayemnetComponent } from 'src/app/component/payemnet/payemnet.component';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  public form: FormGroup;
  result: any =[];
  id_contact: any;
  sexe: any;
  constructor(public modalController: ModalController,public globalProv: GlobalService,
    public superP: SuperService,private navCtrl: NavController,private fb: FormBuilder,private storage: Storage ) { 
      this.form = this.fb.group({
        nom         : ["", Validators.compose([Validators.required ])],
        prenom      : ["", Validators.compose([Validators.required])],
        tel         : ["", Validators.compose([Validators.required ])],
        adresse     : ["", Validators.compose([Validators.required ])],
        code_postal : ["", Validators.compose([Validators.required])],
        ville       : ["", Validators.compose([Validators.required ])],
      });
    }

  ngOnInit() {
    let self = this;
    this.storage.ready().then(() => {
      this.storage.get("user").then((user) => {
        self.result = user;
        console.log("user  : ", user);
      })
      this.storage.get("id_contact").then((id_contact) => {
        self.id_contact = id_contact;
        console.log("id_contact  : ", id_contact);
      })
    })
  }

  async payement(res) {
    const modal = await this.modalController.create({
    component: PayemnetComponent,
    componentProps: { value: res }
    });
    await modal.present();
  }

  save() {
    let self = this;
    let formulaire = this.form.value;
    formulaire['sexe']=this.sexe;
    console.log("formulaire : ", formulaire);
    if (this.form.valid) {
      this.storage.ready().then(() => {
        this.storage.get("panier").then((panier) => {
          if (panier) {
            console.log('id contact  : ', self.id_contact)
            self.globalProv.preCmd(self.id_contact, panier, formulaire).subscribe(res => {
              let obj: any = [];
              obj = res;
              console.log('obj checkout : ', JSON.stringify(obj))
              if (obj.status == "200") {
                console.log('res : ' + JSON.stringify(obj))
                this.payement(obj);
              } else {
                self.globalProv.presentToast(obj.result, 3000, "bottom");
              }
            })
          }
        })
      })
    }
  }

}
