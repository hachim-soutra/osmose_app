import { Component, OnInit } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-detailvisite',
  templateUrl: './detailvisite.page.html',
  styleUrls: ['./detailvisite.page.scss'],
})
export class DetailvisitePage implements OnInit {

  map: any;
  res:any;
  markers:any = [];
  marker:any;
  panorama:any;

  constructor(public sanitizer: DomSanitizer,public superP : SuperService,public navCtrl: NavController) {
    // this.res = navParams.get('res');
    this.res = "https://www.google.com/maps/embed?pb=!4v1539702468009!6m8!1m7!1spzKZ3oxYQUsAAAQWs8S4Xg!2m2!1d46.20267963881727!2d6.144632516771026!3f282.70950213404217!4f-1.6716782010350215!5f0.4000000000000002";
    console.log('res : ', JSON.stringify(this.res));
  }


  photoURL(v) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(v);
  }
  ngOnInit(): void {
     //this.createMap(46.5111378,6.636625);  
  }

}
