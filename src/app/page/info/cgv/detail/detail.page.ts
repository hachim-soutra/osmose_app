import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  result:any = [];
  id:any;

  constructor(public superP:SuperService ,
    public storage:Storage ,
    public globalProv: GlobalService,
    public navCtrl: NavController,
     public navParams: ActivatedRoute) {
      this.navParams.paramMap.subscribe( para =>{
        this.id = para.get("id");
      })
  }

  ngOnInit(): void {
      this.init(this.id) 
  }

  init(id) {
    let self = this;
    self.globalProv.listoffresDetail(this.id).subscribe(Data => {
      if (Data) {
        let obj:any = [];
        obj=Data;
        if(obj.status == "200") {
            this.result = obj.result;
            console.log('result detail :: ', this.result)
        } else {
            this.result = [];
        }
      }
    });
  }

  doRefresh(refresher) {
    setTimeout(() => {
      this.init(this.id);
      refresher.complete();
    }, 1000);
  }

  

}
