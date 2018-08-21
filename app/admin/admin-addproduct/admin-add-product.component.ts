import { Component, Optional, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductService } from "../../services/product.service";

@Component({
    moduleId: module.id,
    selector: 'add-product',
    templateUrl: 'admin-add-product.component.html',
    styleUrls: ['admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit {

    addProductForm: FormGroup;
    categories: Array<String>;

    // Объект с ошибками, которые будут выведены в пользовательском интерфейсе
    formErrors = {
        "title": "",
        "price": "",
        "rating": "",
        "description": "",
        "categories": ""
    };

    // Объект с сообщениями ошибок
    validationMessages = {
        "title": {
            "required": "Обязательное поле.",
            "minlength": "Значение должно быть не менее 4х символов.",
            "maxlength": "Значение не должно быть больше 50 символов."
        },
        "price": {
            "required": "Обязательное поле.",
            "pattern": "Значение должно быть числом."
        },
        "rating": {
            "required": "Обязательное поле.",
            "pattern": "Значение должно быть числом."
        },
        "description": {
            "required": "Обязательное поле.",
            "minlength": "Значение должно быть не менее 4х символов.",
            "maxlength": "Значение не должно быть больше 150 символов."
        },
        "categories": {
            "required": "Обязательное поле.",
        }
    };

    constructor(@Optional() private productService: ProductService,
                private fb: FormBuilder)
    {
        if (!this.productService) {
            console.log('Service error');
        } else {
            this.productService.getCategories().then(r => this.categories = r);
        }
    }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.addProductForm = this.fb.group({
            "title": ["title", [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(50)
                ]],
            "price": ["0.0", [
                Validators.required,
                Validators.pattern("\\d+.\\d+")
                ]
            ],
            "rating": ["4.3", [
                Validators.required,
                Validators.pattern("\\d+.\\d+")
                ]],
            "description": ["description", [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(150)
                ]
            ],
            "categories": ["", Validators.required]
        });

        this.addProductForm.valueChanges
                .subscribe(data => this.onValueChange(data));

        this.onValueChange();
    }

    onValueChange(data?: any) {
        if (!this.addProductForm) return;
        let form = this.addProductForm;

        for (let field in this.formErrors) {
            this.formErrors[field] = "";
            // form.get - получение элемента управления
            let control = form.get(field);

            if (control && control.dirty && !control.valid) {
                let message = this.validationMessages[field];
                for (let key in control.errors) {
                    this.formErrors[field] += message[key] + " ";
                }
            }
        }
    }

    onSubmit(form) {
        this.productService.addProduct(form.value);
        this.addProductForm.reset();
    }
}