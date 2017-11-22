import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Employee} from './employee';
@Injectable()
export class EmpService {
employees=[];
constructor (private _http: Http) {}
getemployees(){
return this._http.get("http://localhost/api/empRegister.php")
.map(res=>res.json());

}
}