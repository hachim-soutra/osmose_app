import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { ModalController, NavController, Platform } from '@ionic/angular';
import { MapComponent } from 'src/app/component/map/map.component';


@Component({
  selector: 'app-lieu',
  templateUrl: './lieu.page.html',
  styleUrls: ['./lieu.page.scss'],
})
export class LieuPage implements OnInit {
  result: Object;
  public lottieConfig: Object;

constructor(
  public platform: Platform,
  public globalProv: GlobalService,
  public modalController: ModalController,
  public superP: SuperService,
  private nav: NavController ) { 
    this.lottieConfig = {
      path: 'https://assets8.lottiefiles.com/datafiles/XMGcLL5xutviPDe/data.json',
      renderer: 'canvas',
      autoplay: true,
      // loop: true
    };
  }
 
  ngOnInit(): void {
    this.init();
  } 

  init() {
    let self = this;
    self.globalProv.getLieux().subscribe(Data => {
      if (Data) {
        self.result = Data;
      }
    });
  }

  checkMap(result) {
    this.nav.navigateForward('map/'+result);

  }
}
