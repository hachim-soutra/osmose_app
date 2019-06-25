import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { ZoomComponent } from 'src/app/component/zoom/zoom.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.page.html',
  styleUrls: ['./galerie.page.scss'],
})
export class GaleriePage implements OnInit {
  result: Object;

    constructor(
    public globalProv: GlobalService,
    public superP: SuperService,
    private modalController: ModalController
  ) { }

  ngOnInit(): void {
    this.init();
  } 

  init() {
    let self = this;
    self.globalProv.getGalerie().subscribe(Data => {
      if (Data) {
        self.result = Data;
      }
    });
  }

  async goToZoom(result, i) {
    const modal = await this.modalController.create({
      component: ZoomComponent,
      componentProps: { value: result, position: i}
      });
      await modal.present();
    //this.navCtrl.push('ZoomPage', {res : {result: result, index : i} })
  }

}
