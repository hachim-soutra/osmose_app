import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { NavController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-evenement-detail',
  templateUrl: './evenement-detail.page.html',
  styleUrls: ['./evenement-detail.page.scss'],
})
export class EvenementDetailPage implements OnInit {


  events: any;
  idEvent: any;
  toggle: boolean;

  constructor(
    public storage: Storage,
     public globalProv: GlobalService, 
     public superP: SuperService, 
     public navCtrl: NavController, 
     public navParams: ActivatedRoute) {
      this.navParams.paramMap.subscribe( para =>{
       
        this.idEvent = para.get("id");
      })

    console.log("id events : " + this.idEvent);
    this.toggle = true;
  }

  ngOnInit(): void {
    this.getEvents();
    this.checkParticipation(this.idEvent);
  }

  checkParticipation(id) {
    let self = this;
    this.storage.ready().then(() => {
      this.storage.get("id_contact").then((id_contact) => {
        self.globalProv.checkParticipation(id_contact, id).subscribe(data => {
          let OBj: any = [];
          OBj = data;
          if (OBj.status == '200') {
            self.toggle = false;
          } else if (OBj.status == '508') {
            self.toggle = true;
          }
        });
      })
    })
  }

  getEvents() {
    let self = this;
    self.globalProv.getEventsDetails(this.idEvent).subscribe(Data => {
      if (Data) {
        let OBj: any = [];
        OBj = Data;
        self.events = OBj.result;
      }
    });
  }

  participer(id_evenement) {
    let self = this;
    this.storage.ready().then(() => {
      this.storage.get("id_contact").then((id_contact) => {
          if(id_contact != null) {
            self.globalProv.participerEvent(id_contact, id_evenement).subscribe(data => {
              let OBj: any = [];
              OBj = data;
              if (OBj.status == '200') {
                self.globalProv.presentToast(OBj.result, 3000, 'bottom');
                self.toggle = false;
              } else if (OBj.status == '508') {
                self.globalProv.presentToast(OBj.result, 3000, 'bottom');
              }
            });
          } else {
            this.globalProv.presentToast(this.superP.globalLanguages.alert_login_must_be_connetced,2000,'bottom');
            this.globalProv.presentModal('SigninPage')
          }
      })
    })
  }

  noParticiper(id_evenement) {
    let self = this;
    this.storage.ready().then(() => {
      this.storage.get("id_contact").then((id_contact) => {
        self.globalProv.noParticiperEvent(id_contact, id_evenement).subscribe(data => {
          let OBj: any = [];
          OBj = data;
          if (OBj.statut == '200') {
            self.globalProv.presentToast(OBj.message, 3000, 'bottom');
            self.toggle = true;
          } else {
            self.globalProv.presentToast(OBj.message, 3000, 'bottom');
          }
        });
      })
    })
  }

  doRefresh(refresher) {
    setTimeout(() => {
      this.getEvents();
      refresher.complete();
    }, 1000);
  }

}
