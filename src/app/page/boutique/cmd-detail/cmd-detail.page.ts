import { Component, OnInit } from '@angular/core';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cmd-detail',
  templateUrl: './cmd-detail.page.html',
  styleUrls: ['./cmd-detail.page.scss'],
})
export class CmdDetailPage implements OnInit {

  id:any;
  result:any;
  constructor(
    public navParams: ActivatedRoute,
    public superP : SuperService,  
    public globalProv: GlobalService, 
    ) {
    this.navParams.paramMap.subscribe( para =>{
      if(!para.has('id')){
        return;
      }
      this.id = para.get('id');
    })
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.init();
  }

  init() {
    this.globalProv.commandesCmdDetail(this.id).subscribe(Data => {
      if (Data) {
        let obj:any= [];
        obj = Data;
        console.log('DETAIL data : ', Data);
        if(obj.status == "200") { 
          this.result = obj.result;
        } else{
          this.result = [];
        }
      }
    })
  }

  goToDetailProduct(res, id_wishlist) {
    console.log('res : ', res);
    //.navCtrl.push('ComandedetailproductPage', {res : res, id_wishlist : id_wishlist})
  } 
}
