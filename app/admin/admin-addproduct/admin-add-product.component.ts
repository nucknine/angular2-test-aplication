import { Component, Optional } from "@angular/core";
import { ProductService } from "../../services/product.service";

@Component({
    moduleId: module.id,
    selector: 'add-product',
    templateUrl: 'admin-add-product.component.html',
    styleUrls: ['admin-add-product.component.css']
})
export class AdminAddProductComponent {
    addTitle: string;
    addPrice: number;
    addRate: number;
    addDesc: string;
    addCat: string;
    categories: Array<String>;

    constructor(@Optional() private productService: ProductService) 
    {        
        if (!this.productService) {
            console.log('Service error');
        } else {
            this.productService.getCategories().then(r => this.categories = r); 
        }
    }    

    addProduct() {        
        this.productService.addProduct(this.addTitle, this.addPrice, this.addRate, this.addDesc, this.addCat);
    }
}