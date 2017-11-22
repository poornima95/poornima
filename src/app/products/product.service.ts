import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductService {
   

    constructor(private _http: Http) { }

    getProducts(id){
	return this._http.get("assets/products.json")
	.map(res=>res.json());

    

}
 get(){
	return this._http.get("assets/products.json/")
	.map(res=>res.json());
	}}