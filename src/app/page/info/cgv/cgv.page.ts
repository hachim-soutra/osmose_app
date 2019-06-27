import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cgv',
  templateUrl: './cgv.page.html',
  styleUrls: ['./cgv.page.scss'],
})
export class CgvPage implements OnInit {
  result:any = [];

  constructor(public superP: SuperService,public storage:Storage ,public globalProv: GlobalService,public navCtrl: NavController) {}

  ngOnInit(): void {
      this.init() 
  }

  init() {
    let self = this;
    self.globalProv.listoffres().subscribe(Data => {
      if (Data) {
        let obj:any = [];
        obj=Data;
        if(obj.status == "200") {
            this.result = obj.result;
            console.log('result : ', this.result)
        } else {
            this.result = [];
        }
      }
    });
  }
  goToDetail(id) {  
    this.navCtrl.navigateForward("detailavantapres/"+id );
  } 

} 
