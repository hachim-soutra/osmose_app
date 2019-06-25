import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class StoragesService {

  constructor(public http: HttpClient,public storage: Storage) {
    console.log('Hello StoragesProvider Provider');
  }

  
  setValue(key, value): Promise<any> {
    return this.storage.set(key, value);
  }

  getValue(key): Promise<any> {
    return this.storage.get(key).then((val) => {
      return val;
    });
  }

  removeValue(key): Promise<any> {
    return this.storage.remove(key).then((val) => {
      return val;
    });
  }

  allKeys(){
    return this.storage.keys();
  }
}
