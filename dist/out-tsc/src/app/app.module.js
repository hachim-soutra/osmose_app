import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { Network } from '@ionic-native/network/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { SuperService } from './service/super.service';
import { GlobalService } from './service/global.service';
import { LoginComponent } from './component/login/login.component';
import { FavComponent } from './component/fav/fav.component';
import { ProfilComponent } from './component/profil/profil.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NetworkService } from './service/network.service';
import { StoragesService } from './service/storage.service';
import { ForgetComponent } from './component/forget/forget.component';
import { RegisterComponent } from './component/register/register.component';
//import { environment } from 'src/environments/environment';
//import { AngularFireModule } from '@angular/fire';
import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/File/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { PayPal } from '@ionic-native/paypal/ngx';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [AppComponent, FavComponent, LoginComponent, ProfilComponent, ForgetComponent, RegisterComponent],
            entryComponents: [LoginComponent, FavComponent, ProfilComponent, ForgetComponent, RegisterComponent],
            imports: [
                BrowserModule,
                IonicModule.forRoot(),
                AppRoutingModule,
                IonicStorageModule.forRoot(),
                HttpClientModule,
                FormsModule,
                ReactiveFormsModule,
                ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
            ],
            providers: [
                StatusBar,
                SplashScreen,
                { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
                Network,
                FCM,
                SuperService,
                GlobalService,
                NetworkService,
                StoragesService,
                Camera, File, FilePath,
                FileTransfer,
                InAppBrowser,
                Geolocation,
                ScreenOrientation,
                PayPal,
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map