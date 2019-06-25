import { Component, OnInit } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';

@Component({
  selector: 'app-deamnadeinfo-ofre',
  templateUrl: './deamnadeinfo-ofre.page.html',
  styleUrls: ['./deamnadeinfo-ofre.page.scss'],
})
export class DeamnadeinfoOfrePage implements OnInit {

  constructor(
    public superP: SuperService
  ) { }

  ngOnInit() {
  }

}
