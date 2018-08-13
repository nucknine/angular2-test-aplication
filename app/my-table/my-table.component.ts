import { Component, Input, OnInit, OnChanges, DoCheck } from "@angular/core";
import { ProductService, Product } from '../services/product';

@Component({
    moduleId: module.id,
    selector: 'my-table',
    templateUrl: 'my-table.component.html',
    styleUrls: ['my-table.component.css']
})
export class MyTableComponent {
    
    @Input() 
    rows: number = 0;    
    filtered: Array<Product> = [];             
    products: Array<Product> = []; 
    categories: Array<String> = []; 
    hightPrice: number = 70;
    currentCategory: string = 'electronics';

    constructor(private productService: ProductService) {
        this.products = this.productService.getProducts(); 
        this.categories = this.productService.getCategories(); 
    }    

    isHightPrice(price) {
        if (price > this.hightPrice) {
            return true;
        }
    }

    deleteHandler(value) {
        console.log("Deleted ProductId - " + value);
        this.deleteProduct(value);
    }

    private deleteProduct(value) {
        let delItem = [value];
        for (var i = 0; i < this.products.length; i++) {
            var obj = this.products[i];
        
            if (delItem.indexOf(obj.id) !== -1) {
                this.products.splice(i, 1);
                i--;
                console.log(this.filtered);
            }
        }
    }

    refreshTable(): void {
        this.filtered = [];
        for (let i = 0; i < this.rows; i++) {
            if(this.products[i].categories.join(',').includes(this.currentCategory)) {
                this.filtered.push(this.products[i]);
            }
        }
    }

    ngDoCheck(){
        this.refreshTable();
    }
    ngOnInit(){
        this.refreshTable();        
    }

}