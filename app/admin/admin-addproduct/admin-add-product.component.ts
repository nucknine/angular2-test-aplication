import { Component, Optional, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: 'add-product',
    templateUrl: 'admin-add-product.component.html',
    styleUrls: ['admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit {

    categories: Array<String>;

    addProductForm: FormGroup;

    constructor(@Optional() private productService: ProductService,
                private fb: FormBuilder)
    {
        if (!this.productService) {
            console.log('Service error');
        } else {
            this.productService.getCategories().then(r => this.categories = r);
        }
    }

    ngOnInit(){
        this.addProductForm = this.fb.group({
            title: ["", Validators.required],
            price: ["", Validators.required],
            rating: ["4.3", Validators.required],
            description: ["", Validators.required],
            category: ["", Validators.required]
        })
    }

    onSubmit(form) {
        this.productService.addProduct(
            form.value.title,
            form.value.price,
            form.value.rating,
            form.value.description,
            form.value.category);
        this.addProductForm.reset();
    }
}