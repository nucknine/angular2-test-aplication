import { Component, Input, EventEmitter, Output } from "@angular/core";
import {Product} from '../services/product';

@Component({
    moduleId: module.id,
    selector: 'product',
    templateUrl: 'product.component.html',
    styleUrls: ['product.component.css']
})
export class ProductComponent {
    @Input()
    product: Product;

    @Output()
    delete: EventEmitter<number> = new EventEmitter();

    deleteProduct() {        
        this.delete.emit();
    }

}