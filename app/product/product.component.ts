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

    // выходное свойство (событие (delete)) на родителе 
    @Output()
    delete: EventEmitter<number> = new EventEmitter();

    deleteProduct() {
        // вызвать событие delete на родителе из дочернго компонента по клику 
        // (событие click на дочернем компоненте вызывает deleteProduct(), что иницирует вызов нашего события delete)      
        this.delete.emit();
    }

}