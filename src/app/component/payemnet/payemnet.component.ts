import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { SuperService } from 'src/app/service/super.service';
import { GlobalService } from 'src/app/service/global.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Storage } from '@ionic/storage';

import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { Console } from '@angular/core/src/console';


@Component({
  selector: 'app-payemnet',
  templateUrl: './payemnet.component.html',
  styleUrls: ['./payemnet.component.scss'],
})
export class PayemnetComponent implements OnInit {

  result:any= [];
  @Input()value: object;
  PanierObj:any = [];
  total:any;
  constructor(public modalController: ModalController,private navCtrl: NavController,
    private nav: NavParams,private iab: InAppBrowser,
     public superP : SuperService,
     private globalProv: GlobalService,
     private payPal: PayPal,
     private storage: Storage) {
    this.result = this.nav.get('value');
    console.log('result in check out detail : ', JSON.stringify(this.result));
   }

  test(){
   this.payPal.init({
    PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
    PayPalEnvironmentSandbox: 'AWCc22yop0_s3hMf4yElHoWjv7JdSOOx6C91pRdXQYnrOhEpGVeakyYdK4ERScqdCLBf_2lKLwJ2rGd-',
      }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        let payment = new PayPalPayment(this.result.prix_total, this.superP.globalLanguages.capitale, 'Description', 'sale');
        this.payPal.renderSinglePaymentUI(payment).then((res) => {
          // Successfully paid
         if(res.response.state){
           this.closeLink();
          }
          // Example sandbox response
          //
          // {
          //   "client": {
          //     "environment": "sandbox",
          //     "product_name": "PayPal iOS SDK",
          //     "paypal_sdk_version": "2.16.0",
          //     "platform": "iOS"
          //   },
          //   "response_type": "payment",
          //   "response": {
          //     "id": "PAY-1AB23456CD789012EF34GHIJ",
          //     "state": "approved",
          //     "create_time": "2016-10-03T13:33:33Z",
          //     "intent": "sale"
          //   }
          // }
        }, (err) => {
          // Error or render dialog closed without being successful
          this.globalProv.presentToast("payemnt not complet",3000, "bottom");

        });
      }, (x) => {
        // Error in configuration
        console.log(x);
        this.globalProv.presentToast(x,3000, "bottom");

      });
    }, (er) => {
      this.globalProv.presentToast(er,3000, "bottom");

      // Error in initialization, maybe PayPal isn't supported or something else
  });
}

  ngOnInit() {
    this.showPanierContent();
  }
  closeModal(){
    this.modalController.dismiss();
  }
  goToCheckout() {
    this.closeModal();
    this.navCtrl.navigateForward("home");  
   }
  showPanierContent(){
    let self = this;
    self.total=0;
    this.storage.ready().then(() => {
      this.storage.get("panier").then((data) => {
        if(data){
          console.log('panier : ', JSON.stringify(data));
          self.PanierObj = data;
          console.log('panier obj : ', JSON.stringify(this.PanierObj));
          for(let i=0; i< data.length ;i++) {
              this.total = parseFloat(this.total)+parseFloat(data[i].prix)*parseFloat(data[i].quantite);           
          }
        } else {
          self.PanierObj = [];
        }
      }).catch((err) => {
          console.error("error : ",err);
      })  
    })
  }
  openLink() {
  this.globalProv.presentToast("produit bien ",3000, "bottom");
  const browser = this.iab.create(this.superP.URL+'api/payment/index.php?action=postfinance&id_pre_cmd='+this.result.id_pre_cmd,'_blank',{
        location:'yes',
        clearcache:'yes',
        toolbar:'yes',
        closebuttoncaption: ' X '
  });
  this.closeModal();
  this.navCtrl.navigateForward("verifier/"+this.result.id_pre_cmd);
  browser.show();
  browser.on('exit').subscribe(data => {
       this.closeLink();
        console.log('close link');
  });
  this.navCtrl.navigateForward("verifier/"+this.result.id_pre_cmd);
  this.closeModal();
 }

  closeLink() {
      this.globalProv.checkPayment(this.result.id_pre_cmd,55555).subscribe((res) => {
        let obj:any = [];
        obj = res;
        console.log('obj : ', JSON.stringify(obj))
         if(obj.status == "200"){
          this.storage.remove('panier');
          this.storage.remove('result');
          this.superP.collecteurPanier = [];
          this.closeModal();
            this.globalProv.presentToast(obj.result,3000, "bottom");
            // go to list commandes here
         } else {
            this.globalProv.presentToast(obj.result,3000, "bottom");
         }
      })
  }

}
