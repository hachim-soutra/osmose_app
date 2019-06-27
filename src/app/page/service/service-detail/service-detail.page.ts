import { Component, OnInit } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { NavController, ModalController } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global.service';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoginComponent } from 'src/app/component/login/login.component';
import { DemandeinfoComponent } from 'src/app/component/demandeinfo/demandeinfo.component';


@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.page.html',
  styleUrls: ['./service-detail.page.scss'],
})
export class ServiceDetailPage implements OnInit {
  id_service: any;
  result: any;
  id_cat: string;

  constructor(
    public modalController: ModalController,
    public superP: SuperService,public storage:Storage,public navCtrl: NavController,public globalProv: GlobalService,public navParams: ActivatedRoute){
      this.navParams.paramMap.subscribe( para =>{
        this.id_service = para.get('id');
        this.id_cat = para.get('idc');
      })
  }

  ngOnInit() {
    this.init();
  }

  init() {
    let self = this;
    self.globalProv.getServicesDetail(this.id_cat).subscribe(Data => {
      console.log('list produit  : ', JSON.stringify(Data));
      if (Data) {
        let Obj:any = [];
        Obj = Data;
      
        if(Obj.status == "200"){
          let i: any;
          for( i of Obj.result){
            console.log(' produit 1 : ', i);

            if(i.id_service == this.id_service){
              console.log('list produit 1 : ', i.result);

              this.result =i;
            }
          }
         
        }else if(Obj.status == "500"){
          console.log('list produit 2 : ', Obj.result);
          this.result = [];
        }
      }
    });
  }

  async infoModal(res) {
    const modal = await this.modalController.create({
    component: DemandeinfoComponent,
    componentProps: { value: res }
    });
  
    await modal.present();
  
  }

  async loginModal() {
    const modal = await this.modalController.create({
    component: LoginComponent,
    componentProps: { value: 123 }
    });
  
    await modal.present();
  
  }

  demandeInfo(res) {
    let self = this;
    this.storage.ready().then(() => {
      this.storage.get("id_contact").then((id_contact) => {
          if(id_contact != null) {   
             this.infoModal(res);
          } else {
            this.globalProv.presentToast(this.superP.globalLanguages.alert_login_must_be_connetced, 2000, 'bottom');
            this.loginModal();
          }
      })
    })
  }
}
