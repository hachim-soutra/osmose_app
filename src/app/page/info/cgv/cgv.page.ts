import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';

@Component({
  selector: 'app-cgv',
  templateUrl: './cgv.page.html',
  styleUrls: ['./cgv.page.scss'],
})
export class CgvPage implements OnInit {
  result: Object;


  constructor(
    public globalProv: GlobalService,
    public superP: SuperService
  ) { }

  ngOnInit() {
    this.init();
}


init() {
  let self = this;
  console.log("connected : "+self.superP.Connected);
  if(self.superP.Connected){
    self.globalProv.getCgv().subscribe(Data => {
      if (Data) {
        self.result = Data;
      }
    });
  }
}

}
