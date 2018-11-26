import { Component, OnInit } from '@angular/core';
import {IProduct} from './product'
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls : ['./product-list.component.css'],
    providers: [ProductService]
})

export class ProductListComponent implements OnInit{
    pageTitle:string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 5;
    showImage: boolean = false;
    errorMessage: string;
    _listFilter: string;
   

   

    get listFilter() : string{
        return this._listFilter;
    }

    set listFilter(value: string){
        console.log('start filtering products:' + value)
        this._listFilter = value;
        this.filteredProducts = this.listFilter? this.performFiltering(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[];

    constructor(private productService: ProductService){
    
    }
    

    ngOnInit(): void {
            this.productService.getProducts().subscribe(
            products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any>error
            
        );
        this.filteredProducts = this.products;
        console.log('On Initialization!')
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    

    performFiltering( searchString: string) : IProduct[]{
        searchString = searchString.toLocaleLowerCase();
        return this.products.filter((prod: IProduct) => prod.productName.toLocaleLowerCase().indexOf(searchString)!== -1);
    }

    onRatingClicked(message: string) :void {
        this.pageTitle = 'Product List: ' + message;
    }
}