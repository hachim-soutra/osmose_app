import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SuperService {

  URL:any="https://oryal2.mobigo.ch/";
  WebSite = 'https:///tsarine.mobigo.ch/api/';
  Topic:any = "topictsarine";
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
