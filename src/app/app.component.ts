import { Component } from '@angular/core';

import { Platform, NavController, MenuController, ModalController, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { SuperService } from './service/super.service';
import { GlobalService } from './service/global.service';
import { FCM } from '@ionic-native/fcm/ngx';
import { LoginComponent } from './component/login/login.component';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { NetworkService } from './service/network.service';
import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  pages: Array<{ title: string, component: any, iconMd: any, iconIos: any }>;
  socials: any = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private menu: MenuController,
    public superP: SuperService,
    public nav: NavController,
    public events: Events, 
    public networkProvider: NetworkService,
    private fcm: FCM,
    private modalCntl: ModalController,
    private globalProv: GlobalService,
    private screenOrientation: ScreenOrientation,
  ) {
    this.initializeApp();
    this.checkingConnexion()
    this.fillUser();
    this.screenOrientation.lock('portrait');
  }
  ngOnInit(): void {
    this.getLiens();
    this.getFileLanguage();
    this.fillUser();
  }

  getLiens() {
    let self = this;
    let obj: any = [];
    self.globalProv.getLiens().subscribe(Data => {
      if (Data) {
        obj = Data;
        console.log("les liens : " + JSON.stringify(Data));
        obj.forEach(element => {
          self.socials.push(
            {title: element.titre, href: element.lien, icon: element.icone, color: element.color }
          )
        });
      }
    });  
  }

  checkingConnexion() {
    let self = this;
    this.networkProvider.initializeNetworkEvents();
    this.events.subscribe('network:offline', () => {
      self.globalProv.presentToast("y a pas de connexion réseau essayez de vous reconnecter", 3000, 'top')
      this.nav.navigateRoot('favorite');
    });
    this.events.subscribe('network:online', () => {
      self.globalProv.presentToast("Bien connecter!", 3000, 'top');
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      // this.statusBar.overlaysWebView(false);
      this.statusBar.overlaysWebView(true);
      this.statusBar.backgroundColorByHexString("#d4509a");
      this.splashScreen.hide();

      /**FCM Topic - Token & Receive Notifications */
      console.log("token :" +this.superP.Token) ;

      // if (this.platform.is('cordova')) {
      this.fcm.subscribeToTopic(this.superP.Topic);

      // this.fcm.onTokenRefresh().subscribe(token => {
      //   this.settingToken(token);
      // });y
      
      this.fcm.getToken().then(token => {
        console.log("token :" +token);
        this.settingToken(token);
      });

      this.fcm.onNotification().subscribe(data => {
        if (data.wasTapped) {
         this.nav.navigateRoot(data.lien);
        } else {
          this.nav.navigateRoot(data.lien);
        }; 
      });
      // }
    });
  }
  openPage(page) {
      this.storage.get("id_contact").then((id_contact) => {
        if(page.component == "msg"||page.component == "fav" || page.component == "compte" || page.component == "cmd") {
            if(id_contact != null) {
                this.nav.navigateForward(page.component);
                this.menu.close();
            } else {
              this.globalProv.presentToast(this.superP.globalLanguages.alert_login_must_be_connetced,2000,'bottom');
              this.globalProv.presentModal('login')
            }
        } else {
            this.nav.navigateForward(page.component);
            this.menu.close();
        }
      })
  }

  logout() {
    this.superP.id_contact = null;
    this.storage.remove('id_contact');
    this.storage.remove('user');
    this.openPage("home");
    this.superP.collecteurPanier = [];
  }

  settingToken(token) {
    this.storage.ready().then(() => {
      let tok = token;
      this.superP.Token = tok;
      this.storage.set('token', tok);
    })
  }

  fillUser() {
    let self = this;
      self.storage.get("user").then((user) => {
        console.log("token :" +this.superP.Token) ;
        if(user != null) {
          self.superP.User = user;
        } 
      })
      self.storage.get("id_contact").then((id_contact) => {
        if(id_contact != null) {
          self.superP.id_contact = id_contact;
        } 
    })
    console.log('user :' + JSON.stringify(self.superP.User));
  }

  getFileLanguage() {
      this.globalProv.getFileLanguage().subscribe(data => {
        if (data) {
              this.storage.set('langue', data);
              this.superP.globalLanguages = data;
              this.pages = [ 
                { title: this.superP.globalLanguages.menu_accueil, component: "home", iconMd: "md-home", iconIos: "ios-home" },
                { title: this.superP.globalLanguages.menu_boutique_enligne, component: "categories-page", iconMd: "basket", iconIos: "basket" },
                { title: this.superP.globalLanguages.menu_services_enligne, component: "services", iconMd: "md-shirt", iconIos: "ios-shirt" },
                { title: this.superP.globalLanguages.menu_boutique_offres, component: "offre", iconMd: "pricetag" ,iconIos: "pricetag"},
                // { title: this.superP.globalLanguages.menu_RDV ,component:"rdv", iconMd:"calendar" ,iconIos:"calendar"},
                { title: this.superP.globalLanguages.menu_evenement, component: "evenement", iconMd: "md-eye", iconIos: "ios-eye" },
                { title: this.superP.globalLanguages.menu_actualite, component: "catalogue", iconMd: "md-flame", iconIos: "ios-flame" },
                { title: this.superP.globalLanguages.menu_lieux, component: "lieu", iconMd: "md-pin", iconIos: "ios-pin" },
                { title: this.superP.globalLanguages.menu_messages, component: "msg", iconMd: "md-mail-open", iconIos: "ios-mail-open" },
                { title: this.superP.globalLanguages.menu_apropos, component: "about", iconMd: "help-circle", iconIos: "ios-help-circle" },
                { title: this.superP.globalLanguages.menu_galerie, component: "galerie", iconMd: "md-images", iconIos: "ios-images" },
                
                { title: this.superP.globalLanguages.menu_favoris, component: "fav", iconMd: "heart", iconIos: "ios-heart-outline" },
                // { title: this.superP.globalLanguages.menu_visitevirtuel, component: "detailvisite", iconMd: "md-calendar", iconIos: "ios-calendar" },
                // { title: this.superP.globalLanguages.menu_temoignage, component: "temiognage", iconMd: "md-shirt", iconIos: "ios-shirt" },
                // { title: this.superP.globalLanguages.menu_shop, component: "shop", iconMd: "md-shirt", iconIos: "ios-shirt" },
                // { title: this.superP.globalLanguages.menu_blog, component: "blog", iconMd: "md-shirt", iconIos: "ios-shirt" },
                // { title: this.superP.globalLanguages.menu_tarif, component: "tarif", iconMd: "md-shirt", iconIos: "ios-shirt" },
               
                // { title: this.superP.globalLanguages.menu_boutique_enligne, component: "MultilevelsPage", iconMd: "md-shirt", iconIos: "ios-shirt" },
                // { title: this.superP.globalLanguages.menu_creation, component: "CreationPage", iconMd: "md-images", iconIos: "ios-images" },
                // { title: this.superP.globalLanguages.menu_visitevirtuel, component: "VisitevirtuelPage", iconMd: "md-calendar", iconIos: "ios-calendar" },
                // { title: this.superP.globalLanguages.menu_lookbook, component: "LookbookPage", iconMd: "md-eye", iconIos: "ios-eye" },
                { title: this.superP.globalLanguages.menu_mon_profil, component: "compte", iconMd: "md-person", iconIos: "ios-person" },
                { title: this.superP.globalLanguages.menu_boutique_avantapres, component: "cgv", iconMd: "md-information-circle", iconIos: "ios-information-circle" },
                // { title: this.superP.globalLanguages.menu_commandes, component: "cmd", iconMd: "md-filing", iconIos: "ios-filing" },
              ];
        }
      })
  }
  onClick(x){
    this.menu.close();
    this.nav.navigateForward(x);
  }

  openModal(tab) {
       this.storage.get("id_contact").then(async (id_contact) => {
            if(tab == "fav" || tab== "profil") {
                if(id_contact != null) {
                  const modal = await this.modalCntl.create({
                    component: tab.Component,
                    componentProps: { value: 1234 }
                    });
                  modal.present();
                }else {
                  this.globalProv.presentToast(this.superP.globalLanguages.alert_login_must_be_connetced,'bottom');
                  this.nav.navigateForward('login');
                }
            } else {
              const modal = await this.modalCntl.create({
                component: LoginComponent,
                componentProps: { value: 1234 }
                });
              modal.present();
            }
          })
  }

  presentProfileModal() {
    this.globalProv.presentModal('ProfilePage');
  }

}
