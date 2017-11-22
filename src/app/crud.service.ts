import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CrudService {
employees=[];
constructor (private _http: Http) {}
view(){
return this._http.get("http://localhost/api/view.php")
.map(res=>res.json());

}
addemp(info){
    
return this._http.post("http://localhost/api/insert.php",info)
.map(()=>"");
}

	  
 getemp(id){
    return this._http.post("http://localhost/api/selectone.php/",{'id':id})
      .map(res=>res.json());
  }
    del(id){
    return this._http.post("http://localhost/api/del.php/",{'id':id})
      .map(()=>this.view());
	
  }
    delemp(id){
    return this._http.post("http://localhost/api/delete.php/",{'id':id})
      .map(()=>this.view());
	
  }
  login(id){
    return this._http.post("http://localhost/api/login.php/",{'id':id})
      .map(()=>this.view());
	
  }

   updateEmployee(info){
    return this._http.post("http://localhost/api/update.php/", info)
      .map(()=>"");
  }
  getFoods() {
    return this._http.get('/app/food.json').map((res:Response) => res.json());
  }
  createFood(food) {
  
    let body = JSON.stringify(food);
    return this._http.post('/api/food/', body ).map((res: Response) => res.json());
  }
}