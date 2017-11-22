import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { ProductFilterPipe } from './product-filter.pipe';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './product-list.component.html',
	styleUrls:['./product-list.component.css'],
	 providers : [ProductService]
})

export class ProductListComponent {

    pageTitle: string = 'Book List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = '';
	products: IProduct[];
	constructor(private _productService: ProductService){
}
    
toggleImage(): void {
    this.showImage = !this.showImage;
}

ngOnInit(): void {
    this._productService.get()
		.subscribe(products => 
		{
			this.products = products;
					
		});
}

onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
}
}
