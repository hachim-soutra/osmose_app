import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-verifier',
  templateUrl: './verifier.page.html',
  styleUrls: ['./verifier.page.scss'],
})
export class VerifierPage implements OnInit {

  id_pre_commande:any;
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  constructor(
    public globalProv :GlobalService,
    public superP: SuperService,
    public storage: Storage,
    public navParams: ActivatedRoute,
    private navCtrl: NavController
  ) { 
    this.navParams.paramMap.subscribe( para =>{
      this.id_pre_commande = para.get('id');
    })
    this.lottieConfig = {
      path: 'https://assets1.lottiefiles.com/packages/lf20_IwfCpp.json',
      renderer: 'canvas',
      autoplay: true,
      // loop: true
  };
  }
  ngOnInit() {
  }

  verifier() {
    let self = this;
    this.globalProv.checkPayment(this.id_pre_commande,5555).subscribe((res) => {
      let obj:any = [];
      obj = res;
      console.log('obj : ', JSON.stringify(obj))
       if(obj.status == "200"){
          this.storage.remove('panier'+self.superP.id_contact);
          this.storage.remove('result');
          this.superP.collecteurPanier = "";
          this.globalProv.presentToast(obj.result,4000, "bottom");
          this.navCtrl.navigateForward("cmd");
       } else {
          this.globalProv.presentToast(obj.result,4000, "bottom");
          this.navCtrl.navigateForward("panier");
       }
    })
   }
}
