import { Component, OnInit } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services-pro',
  templateUrl: './services-pro.page.html',
  styleUrls: ['./services-pro.page.scss'],
})
export class ServicesProPage implements OnInit {

  extras: any;
  res: any;
  constructor(
    public superP: SuperService,
    private globalProv: GlobalService,
    public navParams: ActivatedRoute
    ) {
      this.navParams.paramMap.subscribe( para =>{
        console.log(para)
        //this.res = para.get('res');
        this.setExtras(para['res']);
      })
    }

  ngOnInit() {
    this.res = this.navParams.snapshot.paramMap.get('res');
  }

  public setExtras(data){
    this.extras = data;
  }

  public getExtras(){
    return this.extras;
  }


}
