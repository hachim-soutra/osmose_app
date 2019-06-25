import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { SuperService } from 'src/app/service/super.service';
import { NetworkService } from 'src/app/service/network.service';
import { Network } from '@ionic-native/network/ngx';
import { Events, NavController } from '@ionic/angular';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {
  result: Object;

    constructor(
    public nav: NavController,
    public superP: SuperService,
    public networkProvider: NetworkService,
    public events: Events, 
    public network: Network, 
    public globalProv: GlobalService
) { }

  ngOnInit(): void {
    this.init();
  } 

  doRefresh(refresher) {
    setTimeout(() => {
      this.init();
      refresher.target.complete();
    }, 500);
  }
  init(){
      let self = this;
      this.networkProvider.initializeNetworkEvents();
      this.events.subscribe('network:offline', () => {
        self.globalProv.presentToast("y a pas de connexion réseau essayez de vous reconnecter", 3000, 'top');
        this.nav.navigateRoot('favorite');

      });
      this.events.subscribe('network:online', () => {
        self.globalProv.presentToast("Bien connecter!", 3000, 'top');
        this.nav.navigateRoot('home');

      });
    }
}
