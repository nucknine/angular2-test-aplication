import { Component, Input, OnInit, EventEmitter, Output } from "@angular/core";
import { ProductService, Product } from '../services/product';

@Component({
    moduleId: module.id,
    selector: 'my-table',
    templateUrl: 'my-table.component.html'
})
export class MyTableComponent {

    deleteHandler(value) {
        console.log("Deleted ProductId - " + value);
        this.deleteProduct(value);
    }

    products: Array<Product> = []; 

    constructor(private productService: ProductService) {
        this.products = this.productService.getProducts(); 
    }

    @Input() 
    rows: number = 0;

    filtered: any[] = [];          

    deleteProduct(value) {
        let delItem = [value];
        for (var i = 0; i < this.filtered.length; i++) {
            var obj = this.filtered[i];
        
            if (delItem.indexOf(obj.id) !== -1) {
                this.filtered.splice(i, 1);
                i--;
                console.log(obj.id);
            }
        }
    }

    
    ngOnInit(){
        for (let i = 0; i < this.rows; i++) {
            this.filtered.push(this.products[i]);
        }
        
    }

}