import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  result: Object;

    constructor(
    public globalProv: GlobalService,
    public superP: SuperService
  ) { }

  ngOnInit(): void {
    this.init();
  } 

  init() {
    let self = this;
    self.globalProv.getAboutus().subscribe(Data => {
      if (Data) {
        self.result = Data;
      }
    });
  }
}
