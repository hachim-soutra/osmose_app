import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SuperService {

  URL:any="https://osmose.mobigo.ch/";
  WebSite = 'https:///osmose.mobigo.ch/api/';
  Topic:any = "topict_osmose";
  PROFILE:any;
  Connected:Boolean;
  Token:any = null;
  id_contact:any;
  collecteurPanier:any = [];
  User:any ;
  globalLanguages:any;

  constructor(public http: HttpClient) {
    this.Connected = true;
  }
}
