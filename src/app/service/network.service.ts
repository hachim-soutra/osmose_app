import { Injectable } from '@angular/core';
import { SuperService } from './super.service';
import { AlertController, Events } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';

export enum ConnectionStatusEnum{
  Online,
  Offline
}
@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  previousStatus;
  

  constructor(public superP : SuperService,public alertCtrl: AlertController, public network: Network,public eventCtrl: Events) {
    this.previousStatus = ConnectionStatusEnum.Online;
    
  }

    public initializeNetworkEvents(): void {
        this.network.onDisconnect().subscribe(() => {
            if (this.previousStatus === ConnectionStatusEnum.Online) {
                this.eventCtrl.publish('network:offline');
                this.superP.Connected = false;
            }
            this.previousStatus = ConnectionStatusEnum.Offline;
        });
        this.network.onConnect().subscribe(() => {
            if (this.previousStatus === ConnectionStatusEnum.Offline) {
                this.eventCtrl.publish('network:online');
                this.superP.Connected =true;
            }
            this.previousStatus = ConnectionStatusEnum.Online;
        });
    }
  }
