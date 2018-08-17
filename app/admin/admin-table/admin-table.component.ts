import { Component, Optional } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Product } from "../../services/product";
import { Params, Router, ActivatedRoute } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'admin-table',
    templateUrl: 'admin-table.component.html',
    styleUrls: ['admin-table.component.css']
})
export class AdminTableComponent {
    rows: number = 20;    
    filtered: Array<Product> = [];             
    products: Array<Product> = []; 
    categories: Array<String> = []; 
    hightPrice: number = 70;
    currentCategory: string = 'all';    

    selectedId: any;

    constructor(@Optional() private productService: ProductService,
                            private router: Router,
                            private activatedRoute: ActivatedRoute) 
    {        
        if (this.productService) {
            this.productService.getProducts().then(r => this.products = r);
            this.productService.getCategories().then(r => this.categories = r); 
        } else {
            console.log('Service error');
        }
    }        
    
    isHightPrice(price) {
        if (price > this.hightPrice) {
            return true;
        }
    }

    deleteProduct(value) {
        console.log("Deleted ProductId - " + value);        
        this.productService.deleteProduct(value);
        this.productService.getProducts().then(r => this.products = r);
        this.refreshTable();
    }

    refreshTable(): void {
        
        this.filtered = [];
        let j = this.rows > this.products.length ? this.products.length : this.rows;
        for (let i = 0; i < j; i++) {
            if (this.currentCategory == 'all'){
                this.filtered.push(this.products[i]);                
            }
            if (this.products[i].categories.join(',').includes(this.currentCategory)) {
                this.filtered.push(this.products[i]);                                          
            }
        }
    }

    onSelect(product: Product){
        this.router.navigate(["/products", product.id]);      
    }

    isSelected(id) {
        return id == this.selectedId ? true : false; 
    }

    ngDoCheck(){                  
        this.refreshTable();        
    }
    
    ngOnInit(){
        this.activatedRoute.params.forEach((params: Params) => {
            this.selectedId = +params['id'];
        })
        this.refreshTable();        
    }
}