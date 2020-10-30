import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

private allnamedata:any;
  constructor() { }

  setallnameValue(val) { 

    this.allnamedata = val;
     }
    
  getallnameValue() { return this.allnamedata; }
}
