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
                            private activatedRoute: ActivatedRoute) {
        if (!this.productService) {
            console.log('Service error');
        }
    }

    ngOnInit(){
        this.getProducts();
        this.activatedRoute.params.forEach((params: Params) => {
            this.selectedId = +params['id'];
        });
    }

    private getProducts() {
        this.productService.getProducts().then(r => this.products = r);
        this.productService.getCategories().then(r => this.categories = r);
    }

    public isHightPrice(price) {
        if (price > this.hightPrice) {
            return true;
        }
    }

    public deleteProduct(id) {
        console.log("Deleted ProductId - " + id);
        this.productService.deleteProduct(id);
        this.productService.getProducts().then(r => this.products = r);
        this.refreshTable();
    }

    public editProduct(id) {
        this.router.navigate(["admin", "editProduct", id]);
    }

    private refreshTable(): void {

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

    public onSelect(product: Product){
        this.router.navigate(["/products", product.id]);
    }

    public isSelected(id) {
        return id == this.selectedId ? true : false;
    }

    ngDoCheck(){
        this.refreshTable();
    }
    
}