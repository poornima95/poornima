import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ProductService } from './product.service';
import { IProduct } from './product';
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
@Component({
    templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent  {
    pageTitle: string = 'Product Detail';
    productId = this.route.snapshot.params['productId'];
    constructor(
                private router: Router,
    private route: ActivatedRoute, private productservice: ProductService,) { const id: Observable<string> = route.params.map(p => p.productId);
        this.pageTitle += `: ${this.productId}`;
        console.log(this.productId);
  }
onBack(): void {
    this.router.navigate(['/']);
}}
