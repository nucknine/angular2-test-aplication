import { Component, OnInit } from "@angular/core";
import { Product } from "../../services/product";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { ProductService } from "../../services/product.service";

@Component({
    moduleId: module.id,
    selector: "product-details",
    templateUrl: "product-details.component.html"
})
export class ProductDetailsComponent implements OnInit{
    pid: number;
    product: any = {
        title: "product name"
    };

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private service: ProductService
    ) {}

    ngOnInit(){
        this.activatedRoute.params.forEach((params: Params) => {
            let id = +params["id"];
            this.service
                .getProduct(id)
                .then(result => {
                    this.product = result;                    
                });                
        });
    }

    goToProducts() {
        let pid = this.product ? this.product.id : null;
        this.router.navigate(["../", { id: pid}], {relativeTo: this.activatedRoute});
    }
}