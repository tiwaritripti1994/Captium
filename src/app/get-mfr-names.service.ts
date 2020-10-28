import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetMfrNamesService {

  constructor(private http: HttpClient) { }

  public getMfname(search): Observable<any>{
    return this.http.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakeForManufacturer/'+search+'?format=json');
  }
}
