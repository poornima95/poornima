import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Employee } from './crud';
@Injectable()
export class EmpService {
  Employee=[];
  constructor(private _http:Http) { }
 
   addemp(info:Employee){
   let body = `name=${info.name}`;
    return this._http.post("http://localhost/api/insert.php",body)
      .map(()=>"");
  }
  
  }